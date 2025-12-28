import { Header, PizzaMenu, Footer } from "./components";

function App() {
  return (
    <div className="min-h-screen bg-amber-50 lg:w-240 md:w-210">
      <div className="flex flex-col items-center justify-between  p-3 border-r border-l border-stone-200/50">
        <Header />
        <PizzaMenu />
        <Footer />
      </div>
    </div>
  );
}

export default App;
