import { useRecoilValue } from "recoil";

import TodoItem from "./todoItem";
import { todoListState } from "../atoms/todoList";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Todo List</h1>
      <ul className="pr-">
        {todoList.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
