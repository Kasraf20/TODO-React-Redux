import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/todoSlice";

export default function TaskInput() {
  const inputValue = useRef();
  const dispatch = useDispatch();

  const addTodoItem = () => {
    const todoValue = inputValue.current.value;
    // if input filed is empty then it will show alert and return from this function.
    if (!todoValue) return alert("please enter your task");
    //dispatching the todoItem
    dispatch(todoActions.addTodo(todoValue));
    inputValue.current.value = ""
  };

  return (
    <div className="my-5 flex justify-center flex-col md:flex-row mx-2">
      <input
        type="text"
        ref={inputValue}
        placeholder="Add a new todo"
        className="md:w-2/3 sm:1/3 p-2 border rounded mr-2"
      />
      <button
        className="bg-blue-500 text-white p-2 rounded w-[100px] lg:mt-0 mt-3"
        onClick={addTodoItem}
      >
        Add Todo
      </button>
    </div>
  );
}
