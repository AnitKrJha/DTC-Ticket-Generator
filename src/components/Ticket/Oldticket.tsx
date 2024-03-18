import React from "react";
import { formData } from "../../App";
import { getColorInfo } from "../../utils/getColorData";
import TicketBtn from "./TicketBtn";
interface props {
  data: formData;
  handleEdit: (a: any) => void;
  handleDelete: (index: any) => void;
}
const Oldticket = ({ data, handleDelete, handleEdit }: props) => {
  const { border_class: borderColorClass, bg_class } = getColorInfo(data.color);

  return (
    <div
      className={`px-2 w-full flex flex-col items-center mx-auto max-w-sm ${borderColorClass} outline outline-white rounded mb-2 bg-white border-l-8`}
    >
      <h3 className="flex items-center justify-between gap-2 w-full font-bold">
        <strong className="uppercase font-bold">({data.busRoute})</strong>
        <p>
          <strong className="text-sm   inline-block uppercase">
            {data.startingStop}
          </strong>
          <span className="text-xs"> to </span>
          <strong className="text-sm uppercase">{data.endingStop}</strong>
        </p>
        <strong className="text-sm text-gray-500  inline-block uppercase">
          {data.busNumber}
        </strong>
      </h3>
      <div className="buttons flex gap-2 justify-between w-full mt-2">
        <TicketBtn
          bgClass={"bg-red-500"}
          content="Delete"
          onClick={handleDelete}
        />
        <TicketBtn
          bgClass={"bg-green-400"}
          content="Insert"
          onClick={handleEdit}
        />
      </div>
      {/* {JSON.stringify(data)} */}
    </div>
  );
};

export default Oldticket;
