import React, { useContext, useState, useEffect } from "react";
import NotificationContext from "../../../contexts/Notification.context";
import { Link } from "react-router-dom";
import { markNotificationsAsRead } from "../../../services/User.service";

const SURPASSED_BID = "Surpassed Bid";

const NOTIFICATION_MESSAGES = {
  [SURPASSED_BID]: (auction) => (
    <span>
      Your bid for{" "}
      <Link to={`/products/${auction.id}`}>{auction.product.name}</Link> has
      been surpassed
    </span>
  ),
};

const Notification = ({ currentUser, auctionId, type }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const { notifications, manageNotifications } =
    useContext(NotificationContext);

  const unreadNotifications = notifications.filter(
    (notification) => !notification.read
  );

  useEffect(() => {
    if (showNotifications) {
      markNotificationsAsRead(
        unreadNotifications.map((notification) => notification._id)
      ).then(() => {
        manageNotifications();
      });
    }
  }, [showNotifications]);
  return (
    <div className="nav-item dropdown">
      <button
        className="btn dropdown-toggle"
        onClick={() => setShowNotifications(!showNotifications)}
      >
        Notifications ({unreadNotifications.length} unread)
      </button>
      {showNotifications && (
        <ul className="dropdown-menu show">
          {notifications.map((notification) => (
            <li key={notification._id}>
              <a className="dropdown-item" href="#">
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
