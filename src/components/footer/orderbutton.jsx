import { useState } from "react";
import { OrderIcon, CloseIcon } from "..";

const OrderButton = ({ closeHour, openHour }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOrderClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <p className="font-semibold">
          We're open from {openHour}:00 to {closeHour}:00. Come visit us or
          order online.
        </p>
        <button
          onClick={handleOrderClick}
          className="inline-flex items-center justify-center w-36 p-2 mt-5 font-semibold  cursor-pointer rounded-lg bg-stone-600 hover:bg-stone-700 text-amber-300"
        >
          Order Now{" "}
          <div className="ml-2 mt-1">
            <OrderIcon />
          </div>
        </button>
      </div>

      {isModalOpen && (
        <div
          id="default-modal"
          className="fixed top-0 right-0 left-0 z-50 flex items-center justify-center w-full h-full bg-amber-100/50"
        >
          <div className="relative p-4 w-full max-w-4xl max-h-full">
            <div className="relative bg-amber-50 border border-stone-200 rounded-lg shadow-sm p-4 md:p-6">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4 md:pb-5">
                <h3 className="text-lg font-semibold">Terms of Service</h3>
                <button
                  type="button"
                  className="text-sm w-5 h-6 cursor-pointer"
                  onClick={closeModal}
                >
                  <CloseIcon />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="space-y-4 md:space-y-6 py-4 md:py-6">
                <p>
                  With less than a month to go before the European Union enacts
                  new consumer privacy laws for its citizens, companies around
                  the world are updating their terms of service agreements to
                  comply.
                </p>
                <p>
                  The European Union's General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                  common set of data rights in the European Union. It requires
                  organizations to notify users as soon as possible of high-risk
                  data breaches that could personally affect them.
                </p>
              </div>

              <div className="flex justify-center border-t border-stone-200 space-x-15 pt-4 md:pt-5">
                <button
                  onClick={closeModal}
                  type="button"
                  className="font-semibold rounded-lg   bg-stone-600 text-amber-300 hover:bg-stone-700 cursor-pointer text-sm px-4 py-2.5"
                >
                  I Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderButton;
