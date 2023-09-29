import "./App.css";
import bimage from "./Resources/icon-moon.svg";
import Forms from "./Components/Forms";
import TodoItem from "./Components/TodoItem";
import FilterNav from "./Components/FilterNav";

function App() {
  const todoItems = [
    {
      id: 1,
      name: "Items 1",
    },
    {
      id: 2,
      name: "Items 2",
    },
    {
      id: 3,
      name: "Items 3",
    },
  ];

  return (
    <div className="container">
      <nav>
        <h1>TODO</h1>
        <img src={bimage} alt="moon image" />
        <Forms />
      </nav>
      <section>
        <FilterNav />
        {todoItems.map((item) => (
          <TodoItem text={item.name} key={item.id} />
        ))}
        <div id="foot">
          <p>4 Items</p>
          <button>Clear Completed</button>
        </div>
      </section>
    </div>
  );
}

export default App;
