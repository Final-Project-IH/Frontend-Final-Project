import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getAccessToken, setAccessToken } from "../stores/AccessTokenStore";
import { getCurrentUser as getCurrentUserService, getNotifications } from "../services/User.service";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null); // El usuario en sesión
  const [isAuthLoaded, setIsAuthLoaded] = useState(false); // Para saber si ya tengo usuario o al menos lo he comprobado
 
  


  const getCurrentUser = useCallback((callback) => {
    getCurrentUserService() // llama a /users/me para que con el token, me traiga a mi usuario, se lo enchufe al contexto y toda mi aplicación sepa quien es
      .then((user) => {
        setCurrentUser(user);
        setIsAuthLoaded(true);
        callback && callback(); // Para cuando necesite redirigir despues de un login
      });
  }, []);

  //FAVORITES
  const manageFavorites = useCallback((newFavorite, currentUser) => {
    if (!currentUser.favorites.find(favorite => favorite.auction === newFavorite.auction)){
      setCurrentUser({ ...currentUser, favorites: [ ...currentUser.favorites, newFavorite]})
    } else {
      setCurrentUser({ ...currentUser, favorites: currentUser.favorites.filter((favorite) => favorite.auction !== newFavorite.auction)})
    }
  }, [currentUser]);

  const login = useCallback(
    (token) => {
      const navigateToHome = () => {
        navigate("/");
      };
      setAccessToken(token);
      getCurrentUser(navigateToHome);
    },
    [getCurrentUser]
  );

  useEffect(() => {
    if (getAccessToken()) {
      getCurrentUser();
    } else {
      setIsAuthLoaded(true);
    }
  }, [getCurrentUser]);

  const value = useMemo(() => {
    return {
      currentUser, // Usuario que está en sesión
      isAuthLoaded, // Si ya intenté saber si hay usuario en sesión
      login, // login
      manageFavorites,
    };
  }, [currentUser, isAuthLoaded, login, manageFavorites]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

