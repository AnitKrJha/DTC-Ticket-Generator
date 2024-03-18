import QR from "./../../assets/qr.svg";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bgClass?: string;
  content?: string;
}

const TicketBtn = ({ bgClass, content, ...rest }: Props) => {
  return (
    <button
      {...rest}
      className={`w-full text-center rounded-sm text-white ${bgClass} py-1 flex justify-center items-center gap-2`}
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
