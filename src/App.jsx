import { useEffect } from "react";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";
import { useDispatch } from "react-redux";
import { todoActions } from "./store/todoSlice";

function App() {
  const dispatch = useDispatch()

  //This useEffect fetch the data from localStorage.
  useEffect(() => {
    //after fetch i am dispatching the action
    dispatch(todoActions.getInitialTodo(JSON.parse(localStorage.getItem('items'))))
  },[]);

  return (
    <div className="w-screen flex justify-center items-center flex-col gap-3">
      <div className="md:w-2/3 mt-6 w-full">
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
