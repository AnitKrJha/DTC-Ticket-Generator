import { useEffect, useState } from "react";
import "./App.css";
import Ticket from "./components/Ticket/Ticket";
import Ticketform from "./components/TicketForm/Ticketform";
import Oldticket from "./components/Ticket/Oldticket";
import { getColorInfo } from "./utils/getColorData";
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
    startingStop: "ArjunPark",
    endingStop: "N.S.I.T Dwarka",
    color: "orange",
  });
  const [showTicket, setShowTicket] = useState<boolean>(false);
  const [tickets, setTickets] = useState<formData[]>([]);
  const handleDelete = (index: any) => {
    const updatedTickets = [...tickets];
    updatedTickets.splice(index, 1);
    setTickets(updatedTickets);
    localStorage.setItem("tickets", JSON.stringify(updatedTickets));
  };

  const handleEdit = (ticket: formData) => {
    console.log("fd");
    ticket = { ...ticket };
    setFormData(ticket);
  };
  useEffect(() => {
    // Retrieve saved tickets from local storage
    const savedTickets = JSON.parse(localStorage.getItem("tickets")!) || [];
    console.log(savedTickets);

    setTickets(savedTickets);
  }, []);
  let bg_class = getColorInfo(formData.color).bg_class;
  console.log(bg_class);

  return (
    <>
      <div
        className={`${bg_class} flex flex-col w-full justify-center items-center min-h-dvh px-4 relative`}
      >
        {!showTicket && (
          <div className="w-full items-center mx-auto  flex flex-col max-w-sm border-b-2 border-gray-200 rounded mb-2">
            <h1 className="text-white">Previous Tickets</h1>
            {tickets.map((ticket, index) => (
              <>
                {/* <p>Bus Number: {ticket.busNumber}</p>
              <p>Bus Route: {ticket.busRoute}</p>
              
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => handleEdit(ticket)}>Edit</button> */}
                <Oldticket
                  data={ticket}
                  key={Math.random() * 10000000}
                  handleDelete={() => {
                    handleDelete(index);
                  }}
                  handleEdit={() => handleEdit(ticket)}
                />
              </>
            ))}
          </div>
        )}

        {!showTicket && (
          <Ticketform
            tickets={tickets}
            setTickets={setTickets}
            formData={formData}
            setFormData={setFormData}
            setShowTicket={setShowTicket}
          />
        )}
        {showTicket && (
          <Ticket formData={formData} setShowTicket={setShowTicket} />
        )}
      </div>
    </>
  );
}

export default App;
