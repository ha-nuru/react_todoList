import { useState, useRef } from "react";
import styled from "styled-components";

const Editor = ({onCreate}) => {
    const [content, setContent] = useState("");

    function onChangeContent(e) {
        setContent(e.target.value);
    }

    function onSubmit() {	
		onCreate(content);
		setContent('');
	}
    return (
        <EditorBox>
            <input type="text" value={content} onChange={onChangeContent} placeholder="새로운 todo..." />
            <button onClick={onSubmit}>추가</button>
        </EditorBox>
    );
};

const EditorBox = styled.div`
    display: flex;
    gap: 0 10px;
    margin: 20px 0;
    input {
        flex: 1 0 auto;
        padding: 10px;
    }
    button {
        all: unset;
        background-color: #2593ff;
        color: #ffffff;
        padding: 5px 15px;
        font-size: 14px;
        border-radius: 5px;
    }
`;
export default Editor;
