import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos }) => {
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <Listbox>
            <h4>Todo List 🌱</h4>
            <input className="search_field" type="text" placeholder="검색어를 입력해주세요." value={search} onChange={onChangeSearch} />
            <div className="todos_wrapper">
                {todos.map((todo) => {
                    return <TodoItem key={todo.id} {...todo}></TodoItem>;
                })}
            </div>
        </Listbox>
    );
};

const Listbox = styled.div`
    h4 {
        margin: 20px 0;
    }
    input.search_field {
        all: unset;
        width: 100%;
        padding: 10px 0;
        border-bottom: 1px solid #999999;
    }
`;
export default List;
