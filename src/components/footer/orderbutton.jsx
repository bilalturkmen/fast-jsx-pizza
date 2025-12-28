import { useState } from "react";

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
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="1.25em"
              height="1.25em"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M8.9884 3.21891c3.0076.24714 5.945 1.51873 8.2417 3.8154 2.269 2.26907 3.5376 5.16369 3.806 8.13349.1181 1.3063-.817 2.3512-1.9748 2.5974-.3781.0805-.7426.0766-1.0826.0053-.0526-.9449-.1322-1.9863-.2259-2.7243-.2666-2.0994-1.0578-3.9824-2.805-5.72956-1.7428-1.74283-3.6864-2.60074-5.82006-2.9026-.44367-.06276-1.6162-.18893-2.69208-.26801-.06233-.34562-.05329-.7147.04516-1.0954.2799-1.0824 1.27852-1.93272 2.50758-1.83172Z"
              />
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M15.7687 15.2981c.0789.6213.1481 1.4924.1977 2.3181L4.6757 20.8741c-.34909.1007-.72534.0042-.98281-.2521-.25747-.2564-.35564-.6322-.25642-.9817L6.69176 8.17203c.89043.07337 1.79027.17058 2.15583.2223 1.73781.24585 3.27301.92348 4.68601 2.33657 1.4054 1.4054 2.0192 2.8665 2.2351 4.5672Zm-4.3548-4.5789c-.0238-.5518-.4904-.97977-1.0422-.95597-.55178.02381-.97978.49037-.95598 1.04217l.00047.0108c.0238.5518.4904.9798 1.04221.956.5517-.0238.9797-.4904.9559-1.0422l-.0004-.0108Zm3.0873 3.0873c-.0238-.5518-.4904-.9798-1.0422-.956-.5518.0238-.9798.4904-.956 1.0422l.0005.0108c.0238.5518.4903.9798 1.0421.956.5518-.0238.9798-.4904.956-1.0421l-.0004-.0109Zm-4.58671 1.4994c-.02377-.5517-.49034-.9798-1.04211-.956-.55177.0238-.9798.4903-.95603 1.0421l.00046.0108c.02377.5518.49034.9798 1.04211.9561.55178-.0238.97981-.4904.95604-1.0421l-.00047-.0109Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
      </div>

      {isModalOpen && (
        <div
          id="default-modal"
          className="fixed top-0 right-0 left-0 z-50 flex items-center justify-center w-full h-full bg-amber-50/50"
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
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18 17.94 6M18 18 6.06 6"
                    />
                  </svg>
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
