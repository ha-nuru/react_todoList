import styled from "styled-components";

const TodoItem = (todo) => {
    return (
        <Todoitembox>
            <input type="checkbox" checked={todo.isDone} />
            <div className="content">{todo.content}</div>
            <button>삭제</button>
        </Todoitembox>
    );
};

const Todoitembox = styled.div`
    display: flex;
	padding: 10px 0;
	gap: 0 10px;
	border-bottom: 1px solid #999999;
	.content{
		flex: 1 0 auto;
	}
	button{
		all: unset;
		font-size: 12px;
		flex-shrink: 0;
		background-color: #f1f1f1;
		padding: 5px 10px;
		border-radius: 5px;
	}
`;
export default TodoItem;
