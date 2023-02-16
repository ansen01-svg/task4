import styled from "styled-components";


const Para = ({ text, height, fontSize, justify }) => {
    return (
        <ParaWrapper 
        height={height} 
        justify={justify}
        fontSize={fontSize}
        >
            <p>{ text }</p>
        </ParaWrapper>
    )
}

const ParaWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: ${props => props.justify || 'center'};

    p {
        font-size: ${props => props.fontSize || '16px'};
    }
`


export default Para;