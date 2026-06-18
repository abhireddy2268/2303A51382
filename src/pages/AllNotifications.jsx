import NotificationCard from "../components/NotificationCard";

function AllNotifications() {
  const notifications = [
    {
      id: 1,
      type: "Placement",
      message: "Microsoft Hiring Drive",
      timestamp: "2026-06-18",
    },
    {
      id: 2,
      type: "Result",
      message: "Semester Results Published",
      timestamp: "2026-06-17",
    },
  ];

  return (
    <div>
      <h2>All Notifications</h2>

      {notifications.map((item) => (
        <NotificationCard
          key={item.id}
          notification={item}
        />
      ))}
    </div>
  );
}

export default AllNotifications;
