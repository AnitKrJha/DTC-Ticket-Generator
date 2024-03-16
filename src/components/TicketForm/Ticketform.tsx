import React from "react";
import { formData } from "../../App";
import TicketBtn from "../Ticket/TicketBtn";
import { getColorInfo } from "../../utils/getColorData";
interface Props {
  formData: formData;
  setFormData: (a: any) => void;
  setShowTicket: (a: any) => void;
}

const BusForm = ({ setFormData, formData, setShowTicket }: Props) => {
  // Function to handle form field changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formData);
    setShowTicket(true);
    // You can further process or send the form data here
  };
  const colors = [
    { id: "red", value: "red", class: "bg-red-500" },
    { id: "orange", value: "orange", class: "bg-orange-600" },
    { id: "blue", value: "blue", class: "bg-blue-600" },
    { id: "sky", value: "sky", class: "bg-sky-500" },
    { id: "green", value: "green", class: "bg-green-600" },
  ];

  return (
    <div
      className={`${
        getColorInfo(formData.color).bg_class
      } flex w-full justify-center items-center min-h-dvh px-4 `}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-96 w-full mx-auto bg-white  rounded-lg outline outline-gray-300 outline-1 shadow p-3 gap-2"
      >
        <h2 className="text-2xl font-bold">Generate A ticket</h2>
        <p className="text-sm text-gray-500">Enter details to get a ticket</p>
        <div className="route-detail flex gap-4">
          <div className="busnumber flex flex-col gap-1">
            <label htmlFor="busNumber" className="font-bold">
              Bus Number
            </label>
            <input
              className="w-full py-1 px-1 outline outline-gray-300 outline-1 rounded"
              required
              placeholder="DL1PD****"
              type="text"
              name="busNumber"
              id="busNumber"
              value={formData.busNumber}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="busRoute" className="font-bold">
              Bus Route
            </label>

            <input
              className="w-full py-1 px-1 outline outline-gray-300 outline-1 rounded "
              required
              placeholder="764"
              type="text"
              name="busRoute"
              id="busRoute"
              value={formData.busRoute}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="from-to flex gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="startingStop" className="font-bold">
              Starting Stop
            </label>
            <select
              className="w-full bg-white rounded-sm outline outline-1 outline-gray-300  shadow p-2"
              name="startingStop"
              id="startingStop"
              value={formData.startingStop}
              onChange={handleChange}
            >
              <option value="NSUT">
                Netaji Subhas University of Technology
              </option>
              <option value="PowerHouse">Power House Najafgarh</option>
              <option value="ArjunPark">Arjun Park</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="endingStop" className="font-bold">
              Ending Stop
            </label>
            <select
              className="w-full bg-white rounded-sm outline outline-1 outline-gray-300 shadow p-2"
              name="endingStop"
              id="endingStop"
              value={formData.endingStop}
              onChange={handleChange}
            >
              <option value="NSUT">
                Netaji Subhas University of Technology
              </option>
              <option value="PowerHouse">Power House Najafgarh</option>
              <option value="ArjunPark">Arjun Park</option>
            </select>
          </div>
        </div>

        <label className="font-bold">Bus Color:</label>
        <div className="flex space-x-4">
          {colors.map((color) => (
            <React.Fragment key={color.id}>
              <input
                required
                type="radio"
                name="color"
                id={color.id}
                value={color.value}
                checked={formData.color === color.value}
                onChange={handleChange}
                className="hidden"
              />
              <label
                htmlFor={color.id}
                className={`block cursor-pointer ${
                  color.class
                } w-8 h-8 rounded-full border border-gray-300 ${
                  formData.color === color.value ? "ring-4 ring-black" : ""
                }`}
              >
                <span className="sr-only">{color.value}</span>
              </label>
            </React.Fragment>
          ))}
        </div>
        <div className="button mt-4">
          <TicketBtn
            type="submit"
            bg={getColorInfo(formData.color).bg_class}
            content="Generate Ticket"
          />
        </div>
      </form>
    </div>
  );
};

export default BusForm;
