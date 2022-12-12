import "./App.css";
import Searchable from "./components/Searchable";
import SearchInput from "./components/SearchInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <TodoList />
      <Searchable />
      <SearchInput />
    </div>
  );
}

export default App;
