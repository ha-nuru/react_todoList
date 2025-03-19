import "./App.css";
import {useState, useRef } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const mockData = [
	{
		id : 0,
		content : '밥먹기',
		date : new Date().getTime(),
		isDone : false,
	},
	{
		id : 1,
		content : '잠자기',
		date : new Date().getTime(),
		isDone : false,
	},
	{
		id : 2,
		content : 'React 공부하기',
		date : new Date().getTime(),
		isDone : false,
	}
]


function App() {
    const [todos, setTodos] = useState(mockData);
	const idRef = useRef(3)
	const onCreate = (content) => {
		const newTodo = {
			id: idRef.current++,
			content: content,
			date : new Date().getTime(),
			isDone : false,
		};
		setTodos([newTodo, ...todos])
	}

    return (
        <div className="App">
            <Header />
            <Editor onCreate={onCreate}/>
            <List todos={todos} setTodos={setTodos}/>
        </div>
    );
}

export default App;
