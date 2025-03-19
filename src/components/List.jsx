import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = (props) => {
    const { todos, setTodos } = props;
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };
    const getFilterData = () => {
        if (search === "") {
            return todos;
        }
        return todos.filter((todo) => {
            // 소문자로 변환해서 필터
            return todo.content.toLowerCase().includes(search.toLowerCase());
        });
    };

    const onUpdate = (targetId) => {
        setTodos(
            todos.map((todo) =>
              todo.id === targetId
                ? { ...todo, isDone: !todo.isDone }
                : todo
            )
          );
    };

    const filteredTodos = getFilterData();

    return (
        <Listbox>
            <h4>Todo List 🌱</h4>
            <input
                className="search_field"
                type="text"
                placeholder="검색어를 입력해주세요."
                value={search}
                onChange={onChangeSearch}
            />
            <div className="todos_wrapper">
                {filteredTodos.map((todo) => {
                    return (
                        <TodoItem key={todo.id} todo={todo} onUpdate={onUpdate} />
                    );
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
