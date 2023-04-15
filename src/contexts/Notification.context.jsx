import {
  createContext,
  useEffect,
  useState,
} from "react";

import AuthContext from "./Auth.context";
import { getNotifications } from "../services/User.service";
import { useMemo } from "react";
import { useCallback } from "react";
import { useContext } from "react";
import useInterval from "../hooks/useInterval";

const NotificationContext = createContext();
export default NotificationContext;

export const NotificationProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [notifications, setNotifications] = useState([]);

  const manageNotifications = useCallback(() => {
    if (currentUser) {
        getNotifications()
        .then(newNotifications => {
            setNotifications(newNotifications)
        })
    }
  }, [currentUser]);

  useEffect(() => {
    manageNotifications()
  }, [manageNotifications])

  useInterval(manageNotifications, 10000);

  const value = useMemo(() => {
      return {
      notifications,
      manageNotifications
      };
    }, [notifications, currentUser, manageNotifications]);


  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  )
}
