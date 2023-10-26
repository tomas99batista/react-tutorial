// 7. Output the ID of the selected event on the EventDetailPage
import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>EventDetailPage!</h1>
      <p>Event: {params.eventId}</p>
    </>
  );
};

export default EventDetailPage;
