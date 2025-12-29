import OrderButton from "./orderbutton";
import Attribution from "./attribution";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="flex flex-col justify-between self-stretch text-center mt-2 px-10">
      {isOpen ? (
        <OrderButton closeHour={closeHour} openHour={openHour} />
      ) : (
        <p className="font-semibold">
          We are currently closed <span className="text-2xl">😉</span>
          <br /> We would be happy to welcome you between {openHour}:00 and{" "}
          {closeHour}:00
        </p>
      )}
      <div>
        <Attribution />
      </div>
    </footer>
  );
};

export default Footer;
