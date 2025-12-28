import { pizzaData } from "../../data/data";
import PizzaList from "./pizzalist";

const PizzaMenu = () => {
  const pizzas = pizzaData;

  return (
    <main className="lg:w-4xl md:w-3xl w-md px-3">
      {pizzas.length ? (
        <>
          <section className="w-full mb-3 text-center">
            <h3 className="sm:text-3xl text-2xl font-bold title-font my-3">
              Our Menu
            </h3>
            <p className="leading-relaxed">
              Authentic Italian cuisine, 6 creative dishes to choose from.
              <br />
              All from our stone oven, all organic, all delicious.
            </p>
          </section>
          <section className="flex flex-wrap">
            <PizzaList pizzas={pizzas} />
          </section>
        </>
      ) : (
        <section className="leading-relaxed text-base">
          We're still working on our menu. Please come back later :)
        </section>
      )}
    </main>
  );
};

export default PizzaMenu;
