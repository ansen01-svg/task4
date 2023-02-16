import styled from "styled-components";
import MainComponent from "./main_component";


const ApiPage = () => {
    return (
        <ApiWrapper>
            <MainComponent />
        </ApiWrapper>
    )
}

const ApiWrapper = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
`


export default ApiPage;