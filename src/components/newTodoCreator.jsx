import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { nanoid } from "nanoid";

import { todoListState } from "../atoms/todoList";

const NewTodoCreator = () => {
  const [inputValue, setInputValue] = useState("");

  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: nanoid(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <>
      <div className="mt-2 gap-2 flex items-center ">
        <img
          src="/assets/icons/add_icon.png"
          alt="Add icon"
          className="h-6 w-6 "
        />

        <div className="border-y-[1px] border-gray-100 w-full flex justify-between p-1">
          <input
            type="text"
            className="focus:outline-none"
            placeholder="Memorize the dictionary"
            value={inputValue}
            onChange={onChange}
          />
          <button
            className="px-2 py-1 bg-primary text-white rounded hover:bg-secondary"
            onClick={addItem}
          >
            Add Item
          </button>
        </div>
      </div>
    </>
  );
};

export default NewTodoCreator;
