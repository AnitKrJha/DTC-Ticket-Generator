import QR from "./../../assets/qr.svg";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bg?: string;
  content?: string;
}

const TicketBtn = ({ bg, content }: Props) => {
  return (
    <button
      className={`w-full text-center rounded-sm text-white ${bg} py-1 flex justify-center items-center gap-2`}
    >
      {!content ? (
        <>
          <img src={QR} alt="" className="w-6 invert" /> Show QR code
        </>
      ) : (
        content
      )}
    </button>
  );
};

export default TicketBtn;
