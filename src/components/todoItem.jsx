import { useRecoilState } from "recoil";
import PropTypes from "prop-types";

import { todoListState } from "../atoms/todoList";

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const index = todoList.findIndex((listItem) => listItem === item);

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  return (
    <li className="flex items-center">
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
        className="rounded-checkbox"
      />
      <span className="text-gray-800 border-t-[1px] border-b-[1px] border-gray-100 w-full px-2 py-2">
        {item.text}
      </span>
    </li>
  );
};

TodoItem.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TodoItem;
