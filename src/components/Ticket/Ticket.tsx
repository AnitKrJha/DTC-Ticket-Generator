import { formData } from "../../App";
import TicketBtn from "./TicketBtn";
import { getColorInfo } from "./../../utils/getColorData";
interface Props {
  formData: formData;
  setShowTicket: (a: any) => void;
}

const Ticket = ({ formData, setShowTicket }: Props) => {
  const { bg_class, fare } = getColorInfo(formData.color);

  return (
    <div
      className={`${bg_class} flex w-full justify-center items-center min-h-dvh px-4 relative`}
    >
      <button
        className="absolute top-4 right-4 bg-white border-0  text-black px-2 py-1 rounded"
        onClick={() => setShowTicket(false)}
      >
        RESET
      </button>
      <div className="text-black min-w-72 w-full max-w-sm rounded-md bg-white flex flex-col gap-3 px-4 shadow shadow-black py-3">
        <div className="heading font-semibold text-center">
          Transport Dept. of Delhi
        </div>
        <div className="bus_number uppercase flex justify-between border-b border-black py-2">
          <span>{formData.busNumber}</span>
          <span> {fare}</span>
        </div>
        <BusRouteRow routeNumber={formData.busRoute} fare={fare} />
        <BusTiming />
        <BusStops start={formData.startingStop} end={formData.endingStop} />
        <TicketCode />
        <TicketBtn bg={bg_class} />
      </div>
    </div>
  );
};

const TicketCode = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "T";

  for (let i = 1; i < 20; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return <div className="text-center text-xs">{result}</div>;
};

const BusRouteRow = ({
  routeNumber,
  fare,
}: {
  routeNumber: string;
  fare: string;
}) => {
  return (
    <div className="route  flex justify-between ">
      <div className="flex flex-col">
        <span className="text-xs">Bus Route</span>
        <span className="uppercase">{routeNumber}</span>
      </div>
      <div className="flex flex-col text-right">
        <span className="text-xs">Fare</span>
        <span className="uppercase">{fare}</span>
      </div>
    </div>
  );
};
const BusTiming = () => {
  const currentDate: Date = new Date();
  const yyyy: number = currentDate.getFullYear();
  let mm: string | number = currentDate.getMonth() + 1;
  mm = mm < 10 ? "0" + mm : mm;
  let dd: string | number = currentDate.getDate();
  dd = dd < 10 ? "0" + dd : dd;
  let hh: string | number = currentDate.getHours();
  hh = hh < 10 ? "0" + hh : hh;
  let min: string | number = currentDate.getMinutes();
  min = min < 10 ? "0" + min : min;
  let ss: string | number = currentDate.getSeconds();
  ss = ss < 10 ? "0" + ss : ss;

  const formattedDate = `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
  return (
    <div className="route  flex justify-between ">
      <div className="flex flex-col">
        <span className="text-xs">Booking Time</span>
        <span>{formattedDate}</span>
      </div>
      <div className="flex flex-col text-right">
        <span className="text-xs">Bus Tickets</span>
        <span>{"1"}</span>
      </div>
    </div>
  );
};

const BusStops = ({ start, end }: { start: string; end: string }) => {
  return (
    <div className="route  flex flex-col justify-between ">
      <span className="text-xs up">Starting Stop</span>
      <span className="uppercase">{start}</span>

      <span className="text-xs inline-block mt-1">Ending Stop</span>
      <span className="uppercase">{end}</span>
    </div>
  );
};

export default Ticket;
