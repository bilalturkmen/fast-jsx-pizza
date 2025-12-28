import PizzaItem from "../menu/pizzaitem";

const PizzaList = ({ pizzas }) => {
  return (
    <>
      {pizzas.map((pizza) => (
        <PizzaItem key={pizza.name} pizza={pizza} />
      ))}
    </>
  );
};

export default PizzaList;
