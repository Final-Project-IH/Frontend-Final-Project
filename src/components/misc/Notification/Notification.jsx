import React, { useContext, useState, useEffect } from "react";
import NotificationContext from "../../../contexts/Notification.context";
import { Link } from "react-router-dom";
import { markNotificationsAsRead } from "../../../services/User.service";

const SURPASSED_BID = 'Surpassed Bid'

const NOTIFICATION_MESSAGES = {
  [SURPASSED_BID]: (auction) => <span>Your bid for <Link to={`/products/${auction.id}`}>{auction.product.name}</Link> has been surpassed</span>
}

const Notification = ({ currentUser, auctionId, type }) => {
  const [showNotifications, setShowNotifications] = useState(false)
  const { notifications, manageNotifications } = useContext(NotificationContext)

  const unreadNotifications = notifications.filter(notification => !notification.read)

  useEffect(() => {
    if (showNotifications) {
      markNotificationsAsRead(unreadNotifications.map(notification => notification._id))
        .then(() => {
          manageNotifications()
        })
    }
  }, [showNotifications])
  return (
    <div class="nav-item dropdown">
      <button
        class="btn dropdown-toggle"
        onClick={() => setShowNotifications(!showNotifications)}
      >
        Notifications ({unreadNotifications.length} unread)
      </button>
      {showNotifications && (
        <ul class="dropdown-menu show">
          {notifications.map(notification => (
            <li key={notification._id}>
              <a class="dropdown-item" href="#">
                {NOTIFICATION_MESSAGES[notification.type](notification.auction)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notification;
