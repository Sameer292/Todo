import { useState, useEffect } from "react";
import { TodoProvider } from "./Contexts";
import { TodoForm } from "./Components";
import { TodoItem } from "./Components";
import "./font.css";
import Time from "./Components/Time";
import DateToday from "./Components/Date";
function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (todo, id) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? todo : t)));
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleChecked = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  useEffect(() => {
    const todoFromLocalstorage = JSON.parse(localStorage.getItem("todos"));
    if (todoFromLocalstorage && todoFromLocalstorage.length) {
      setTodos(todoFromLocalstorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleChecked }}
    >
      <div className="bg-[#e13e94] min-h-screen ">
        <div className="flex flex-row text-white  justify-between w-full mb-8 pt-5">
          <Time />

          <h1 className="text-3xl font-bold w-1/3 text-center ">Todo</h1>

          <DateToday />
        </div>
        <div className="w-full max-w-2xl mx-auto  rounded-lg px-4 py-3 text-white ">
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3   p-3  rounded-lg  border-2 border-[#344455]  ">
            {todos.length > 0 ? (
              todos.map((todo) => (
                <div
                  className="w-full shadow-md shadow-black rounded-lg "
                  key={todo.id}
                >
                  <TodoItem todo={todo} />
                </div>
              ))
            ) : (
              <div className="text-xl w-full text-center  text-black">
                Empty list
              </div>
            )}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
