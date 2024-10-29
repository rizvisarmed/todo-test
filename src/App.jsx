import TodoList from "./components/todoList";
import NewTodoCreator from "./components/newTodoCreator";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 rounded-lg ">
        <TodoList />
        <NewTodoCreator />
      </div>
    </div>
  );
}

export default App;
