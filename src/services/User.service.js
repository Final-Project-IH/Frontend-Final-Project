import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);
const unauthenticatedHttp = createHttp(false);

export const getCurrentUser = () => authenticatedHttp.get("/users/me");

export const getNotifications = (limit) => authenticatedHttp.get("/users/me/notifications", { params: { limit } })

export const markNotificationsAsRead = (notificationIds) => 
    authenticatedHttp.patch('/users/me/notifications', {
        notificationIds
    }) 

export const editTheProfile = (user) => authenticatedHttp.post("/users/me/editprofile", user)

export const getMyFavs = () => authenticatedHttp.get("/users/me/favorites")

export const getMyOwnAuctions = () => authenticatedHttp.get("/users/me/products")

export const getMyBids = () =>  authenticatedHttp.get("/users/me/bids")

export const getMyWinnedAuct = () => authenticatedHttp.get("/users/me/winned")