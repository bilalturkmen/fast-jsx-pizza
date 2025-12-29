import { useState } from "react";
import { FavorIcon } from "..";

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
              <FavorIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaItem;
