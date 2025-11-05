import React, { useEffect, useRef, useState } from "react";
import { ListTodo } from "lucide-react";
import TodoItems from "./TodoItems";

const API_URL = "http://localhost:5000/todos";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTodoList(data))
      .catch((err) => console.error("Lỗi tải todo:", err));
  }, []);

  const addTodo = async () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") return;

    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: inputText }),
    });

    const newTodo = await res.json();
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = async (id) => {
    await fetch(`${API_URL}/${id}/toggle`, { method: "PATCH" });
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">

      <div className="flex items-center mt-7 gap-2">
        <ListTodo strokeWidth={1.5} size={32} />
        <h1 className="text-3xl font-semibold">To-do List</h1>
      </div>


      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Thêm task của bạn"
        />
        <button
          onClick={addTodo}
          className="border-none rounded-full bg-blue-500 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          Thêm +
        </button>
      </div>


      {todoList.map((item) => (
        <TodoItems
          key={item.id}
          text={item.text}
          id={item.id}
          isComplete={item.isComplete}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};

export default Todo;
