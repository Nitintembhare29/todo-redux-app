import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../redux/todoSlice";

const TaskList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(
      deleteTodo({
        id: id,
      })
    );
  };
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title} </span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
