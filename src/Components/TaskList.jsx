import React from "react";
import { useSelector } from "react-redux";
import ShowTaskList from "./ShowTaskList";

export default function TaskList() {
  //Geting todoList from store.
  const { todoList } = useSelector((store) => store.todo);

  return (
    <>
      {todoList.length === 0 ? (
        <h1 className="text-red-600 uppercase font-semibold text-center text-2xl">
          No Task Added.
        </h1>
      ) : (
        <h1 className="text-blue-600 uppercase font-semibold text-center text-2xl">
          Task List ({todoList.length})
        </h1>
      )}
      {todoList.map((item) => {
        return <ShowTaskList key={item} item={item} />;
      })}
    </>
  );
}
