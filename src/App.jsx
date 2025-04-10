import Form from "./Components/BasicForm";
import Button from "./Components/Button";
import Counter from "./Components/Counter";
import FetchData from "./Components/FetchData";
import ToDo from "./Components/ToDo";
import User from "./Components/User";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      {/* <ToDo /> */}
      {/* <User /> */}
      {/* <Counter /> */}
      {/* <Form /> */}
      {/* <FetchData /> */}
      <Button label="Click Me" onClick={handleClick} color="blue" />
    </div>
  );
}

export default App;
