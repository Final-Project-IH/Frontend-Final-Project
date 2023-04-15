import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);
const unauthenticatedHttp = createHttp(false);

export const getCurrentUser = () => authenticatedHttp.get("/users/me");

export const getNotifications = (limit) => authenticatedHttp.get("/users/me/notifications", { params: { limit } })

export const markNotificationsAsRead = (notificationIds) => 
    authenticatedHttp.patch('/users/me/notifications', {
        notificationIds
    }) 
