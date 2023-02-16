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
    // padding: 5px 0;
    // height: ${props => props.height || '0'};
    display: flex;
    align-items: center;
    justify-content: ${props => props.justify || 'center'};
    // background: blue;

    p {
        font-size: ${props => props.fontSize || '16px'};
    }
`


export default Para;