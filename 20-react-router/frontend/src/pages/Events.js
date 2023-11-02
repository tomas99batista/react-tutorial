import { json } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  return <EventsList />;
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    return json({ message: "Could not fetch events" }, { status: 500 });
    // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
    //   status: 500,
    // });
    // throw { message: "Could not fetch events" };
    // return { isError: true, message: "Could not fetch events" };
  } else {
    return response;
  }
};
