import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/todoSlice";

export default function ShowTaskList({ item }) {
  //changing buttton color dynamically using useState Hook.
  const [buttonValue, setButtonValue] = useState("Pending");
  const dispatch = useDispatch();

  const deleteTodoItem = (item) => {
    dispatch(todoActions.deleteTodo(item));
  };

  //changing button properties dynamically .
  const completedTask = (e) => {
    e.target.style.backgroundColor = "green";
    setButtonValue("Completed");
  };

  return (
    <div className="w-full flex justify-between items-center border border-red-600 rounded-md my-3 p-2">
      <p className="font-normal">{item}</p>
      <div className="flex gap-4 flex-col md:flex-row">
        <button
          className="bg-yellow-500 text-white px-2 py-2 font-medium rounded-md"
          onClick={completedTask}
        >
          {buttonValue}
        </button>
        <button
          className="text-white bg-red-500 px-2 py-2 font-medium rounded-md"
          onClick={() => deleteTodoItem(item)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
