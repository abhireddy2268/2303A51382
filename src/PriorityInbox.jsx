import NotificationCard from "../components/NotificationCard";

function PriorityInbox() {
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
    {
      id: 3,
      type: "Event",
      message: "Hackathon Registration Open",
      timestamp: "2026-06-16",
    },
  ];

  return (
    <div>
      <h2>Priority Inbox</h2>

      {notifications.map((item) => (
        <NotificationCard
          key={item.id}
          notification={item}
        />
      ))}
    </div>
  );
}

export default PriorityInbox;