import { useState } from "react";
import "./App.css";
import Ticket from "./components/Ticket/Ticket";
import Ticketform from "./components/TicketForm/Ticketform";
export interface formData {
  busNumber: string;
  busRoute: string;
  startingStop: string;
  endingStop: string;
  color: string;
}
function App() {
  const [formData, setFormData] = useState<formData>({
    busNumber: "",
    busRoute: "",
    startingStop: "",
    endingStop: "",
    color: "orange",
  });
  const [showTicket, setShowTicket] = useState<boolean>(false);
  return (
    <>
      {!showTicket && (
        <Ticketform
          formData={formData}
          setFormData={setFormData}
          setShowTicket={setShowTicket}
        />
      )}
      {showTicket && (
        <Ticket formData={formData} setShowTicket={setShowTicket} />
      )}
    </>
  );
}

export default App;
