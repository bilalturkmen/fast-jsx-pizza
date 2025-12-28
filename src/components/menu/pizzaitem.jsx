import { useState } from "react";

const PizzaItem = ({ pizza }) => {
  const { name, ingredients, price, soldOut, photoName } = pizza;
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleAddToFavorites = () => {
    setPopupVisible(true);
    setTimeout(() => setPopupVisible(false), 2000); // Hide popup after 2 seconds
  };

  return (
    <div
      className={`xl:w-1/2 md:w-1/2 md:px-2 py-2 w-full ${
        soldOut ? "sold-out sm:order-0 order-1" : ""
      }`}
    >
      <div className="border border-stone-200/50 p-3 flex gap-4 rounded-lg">
        <div className="shrink-0">
          <img
            className="h-33 rounded object-cover object-center aspect-square"
            src={photoName}
            alt={name}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold title-font mb-1">{name}</h3>
          <p className="min-h-18">{ingredients}</p>

          {isPopupVisible && (
            <div className="text-right text-stone-600 text-xs/3 -mt-6">
              added <br /> favorites
            </div>
          )}

          <div className="flex justify-between">
            <span className="font-bold">
              {soldOut ? (
                <span className="font-normal">-Sold Out-</span>
              ) : (
                `$${price}`
              )}
            </span>

            <button
              className="transition-all duration-500 p-1 rounded-full text-stone-600 bg-stone-100/50 hover:bg-stone-100 cursor-pointer"
              onClick={handleAddToFavorites}
            >
              <CartIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 26 26"
    fill="none"
  >
    <path
      d="M4.47084 14.3196L13.0281 22.7501L21.9599 13.9506M13.0034 5.07888C15.4786 2.64037 19.5008 2.64037 21.976 5.07888C24.4511 7.5254 24.4511 11.4799 21.9841 13.9265M12.9956 5.07888C10.5204 2.64037 6.49824 2.64037 4.02307 5.07888C1.54789 7.51738 1.54789 11.4799 4.02307 13.9184M4.02307 13.9184L4.04407 13.939M4.02307 13.9184L4.46274 14.3115"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PizzaItem;
