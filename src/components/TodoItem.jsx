import styled from "styled-components";

const TodoItem = (props) => {
    const { todo, onUpdate } = props;
    const onChangeCheckbox = () => {
        onUpdate(todo.id);
    };
    return (
        <Todoitembox>
            <input
                type="checkbox"
                checked={todo.isDone}
                onChange={onChangeCheckbox}
            />
            <div className="content">{todo.content}</div>
            <div className="date">
                {new Date(todo.date).toLocaleDateString()}
            </div>
            <button>삭제</button>
        </Todoitembox>
    );
};

const Todoitembox = styled.div`
    display: flex;
    gap: 0 10px;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #999999;
    .content {
        flex: 1 0 auto;
    }
    button {
        all: unset;
        font-size: 12px;
        flex-shrink: 0;
        background-color: #f1f1f1;
        padding: 5px 10px;
        border-radius: 5px;
    }
`;
export default TodoItem;
