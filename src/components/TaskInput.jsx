import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const TaskInput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const onAdd = () => {
    dispatch(
      addTodo({
        title: todo,
      })
    );
  };
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Add Todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={onAdd}>Add</button>
    </div>
  );
};

export default TaskInput;
