import styled from "styled-components";


const ContentHeader = ({ title }) => {
    return (
        <HeaderWrapper>
            <h1>{ title }</h1>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    width: calc(100% - 40px);
    height: 80px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: var(--hover_color);
`


export default ContentHeader;