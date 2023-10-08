import { useState } from "react";
import "./App.css";
import bimage from "./Resources/icon-moon.svg";
import sun from "./Resources/icon-sun.svg";
import Forms from "./Components/Forms";
import TodoItem from "./Components/TodoItem";
import FilterNav from "./Components/FilterNav";
import { GetThemeValues } from "./Components/ContextTheme";

export const App = () => {
  const { darkTheme, themeHandler } = GetThemeValues();

  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("all");
  // const [num, setNum] = useState();

  const addTodo = (userInput) => {
    const newTodo = {
      id: Date.now(),
      text: userInput,
      status: false,
    };

    setTodoList((prevData) => [newTodo, ...prevData]);
  };

  // function to remove a todo by its ID

  const removeTodoById = (id) => {
    const todoItems = todoList.filter((todo) => todo.id !== id);
    setTodoList(todoItems);
  };

  //Function to set status

  const toggleTodoStatus = (id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: !todo.status };
        }
        return todo;
      })
    );
  };

  //Function to clear all completed todos

  const clearCompletedTodos = () => {
    const todoItems = todoList.filter((todo) => !todo.status);
    setTodoList(todoItems);
  };
  //Function to update the filter value

  const updateFilterValue = (value) => setFilter(value);

  //Function to render todolist base on filter value
  const renderTodoList = () => {
    let filteredTodo = todoList;
    if (filter === "all") {
      filteredTodo = todoList;
    } else if (filter === "active") {
      filteredTodo = todoList.filter((todo) => !todo.status);
    } else if (filter === "complete") {
      filteredTodo = todoList.filter((todo) => todo.status);
    }

    return filteredTodo.map((item) => (
      <TodoItem
        todoData={item}
        deleteItem={removeTodoById}
        statusUpdate={toggleTodoStatus}
        key={item.id}
      />
    ));
  };

  //Function to get the number of todos ina filter.

  const getTodoCount = () => {
    if (filter === "all") {
      return todoList.length;
    } else if (filter === "active") {
      return todoList.filter((todo) => !todo.status).length;
    } else if (filter === "complete") {
      return todoList.filter((todo) => todo.status).length;
    }

    return 0;
  };

  return (
    <div className="container">
      {/* {darkTheme} ? style={.container { backgroundColor: "blue" }} : style ={.container{ backgrounColor: "#F2F2F2" }} */}
      <nav>
        <h1>TODO</h1>
        <img src={darkTheme ? sun : bimage} alt="moon" onClick={themeHandler} />
        <Forms addHandler={addTodo} />
      </nav>
      <section>
        <FilterNav filterHandler={updateFilterValue} />
        {renderTodoList()}
        <div id="foot">
          <p>{getTodoCount()} Item(s)</p>
          <button className="btn3" onClick={clearCompletedTodos}>
            Clear Completed
          </button>
        </div>
      </section>
    </div>
  );
};

export default App;
