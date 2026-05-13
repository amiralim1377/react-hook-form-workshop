import "./App.css";
import FoodDeliveryForm from "./FoodDeliveryForm";
import TypicalForm from "./TypicalForm";

function App() {
  return (
    <div className="container min-h-screen flex items-center justify-center text-white flex-col gap-2">
      <FoodDeliveryForm />
      <TypicalForm />
    </div>
  );
}

export default App;
