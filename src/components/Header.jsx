import styled from "styled-components";

const Header = () => {
    return (
        <HeaderBox>
            <h2>오늘은 📆</h2>
            <h1>{new Date().toDateString()}</h1>
        </HeaderBox>
    );
};

const HeaderBox = styled.div`
    h1 {
        color: #2593ff;
    }
    h2 {
        font-size: 20px;
    }
`;

export default Header;
