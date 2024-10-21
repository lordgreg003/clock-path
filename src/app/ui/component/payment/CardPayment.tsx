"use client";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { open_sans, playfair_Display } from "../../fonts/fonts";

const CardPayment = () => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [saveCard, setSaveCard] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ name, cardNumber, expiryDate, cvv, saveCard });
  };

  return (
    <div className="h-[60rem] md:h-screen flex flex-col items-center justify-start bg-primary-primary50">
      <div className="w-full flex justify-start my-6">
        <Link href="/payment" className="flex items-center cursor-pointer">
          <div>
            <IoIosArrowRoundBack className="text-2xl text-[#5C5C5C] md:ml-10" />
          </div>
          <div
            className={` ${open_sans.className} text-[#5C5C5C] font-semibold hover:underline cursor-pointer`}
          >
            Back
          </div>
        </Link>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2
          className={`${playfair_Display.className} text-center  text-[28px] font-bold mb-4 text-[#333333]`}
        >
          Set Up Your Card Details
        </h2>
        <p
          className={`${open_sans.className}  text-[#5C5C5C] font-normal text-center text-[18px] mb-6`}
        >
          Enter your card details to proceed
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className={`${open_sans.className} block text-[16px] font-semibold text-[#333333]`}
            >
              Name on Card
            </label>
            <input
              type="text"
              id="name"
              className={`${open_sans.className} mt-1 w-full p-2 border border-[#CCCCCC] rounded-xl focus:outline-none focus:ring-2 font-normal focus:ring-purple-600 text-[#5C5C5C]`}
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="cardNumber"
              className={`${open_sans.className}  block text-[16px] font-semibold text-[#333333]`}
            >
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              className={`mt-1 w-full p-2 border border-[#CCCCCC] rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 text-[#5C5C5C]`}
              placeholder="************"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label
                htmlFor="expiryDate"
                className={`${open_sans.className} block text-[16px] font-semibold text-[#333333]`}
              >
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                className={`${open_sans.className} font-normal mt-1 w-full p-2 border border-[#CCCCCC] rounded-xl focus:outline-none focus:ring-2 text-[#79808A] focus:ring-purple-600`}
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
              />
            </div>

            <div className="flex-1">
              <label
                htmlFor="cvv"
                className={`${open_sans.className} block text-[16px] font-semibold text-[#333333]`}
              >
                Security Number (CVV)
              </label>
              <input
                type="text"
                id="cvv"
                className={`mt-1 w-full p-2 border border-[#CCCCCC] rounded-xl font-normal focus:outline-none focus:ring-2 focus:ring-purple-600 text-[#79808A]`}
                placeholder="***"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="saveCard"
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              checked={saveCard}
              onChange={(e) => setSaveCard(e.target.checked)}
            />
            <label
              htmlFor="saveCard"
              className={`ml-2 block text-sm text-[#5C5C5C] ${open_sans.className} font-normal text-[15px]`}
            >
              Save Card Details
            </label>
          </div>

          <button
            type="submit"
            className={`${open_sans.className} w-full bg-[#6200EE] text-white text-[18px] py-2 px-4 rounded-lg font-semibold`}
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardPayment;
