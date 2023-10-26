import { Link } from "react-router-dom";

const EVENTS = [
  { id: "E1", title: "Event 1" },
  { id: "E2", title: "Event 2" },
  { id: "E3", title: "Event 3" },
];

const EventsPage = () => {
  return (
    <>
      <h1>EventsPage!</h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={`${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
