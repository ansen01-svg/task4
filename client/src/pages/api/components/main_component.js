import { useState } from 'react';
import styled from "styled-components";
import Button from "../../../components/button";
import Para from "../../../components/para_component";
import useFetchJoke from "../../../utils/getjoke";


let API_ENDPOINT = 'http://localhost:5001/apis/v1/jokes/addJoke'

const MainComponent = () => {

    let [successMsg, setMsg] = useState('');

    let joke = useFetchJoke();

    let saveJokeToDb = (joke) => {
        fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(joke)
        }).then(response => response.json())
          .then(data => setMsg(data.msg))
          .catch(error => console.log(error))
    }

    if (!joke) {
        return (
            <MainWrapper direction={'row'}>
                <p>Fetching your joke . . .</p>
            </MainWrapper>
        )
    }

    return (
        <MainWrapper>
            <ContentHolder joke={joke} />
            <ButtonHolder 
            joke={joke} 
            saveJokeToDb={saveJokeToDb}
            />
            <MessageHolder
            successMsg={successMsg}
            />
        </MainWrapper>
    )
}

const ContentHolder = ({ joke }) => {
    return (
        <ContentWrapper>
            <Para 
            text={joke.Question} 
            fontSize={'20px'} 
            />
            <Para 
            text={joke.Answer} 
            fontSize={'20px'} 
            />
        </ContentWrapper>
    )
}

const ButtonHolder = ({ joke, saveJokeToDb }) => {
    return (
        <ButtonWrapper>
            <SaveButton onClick={() => saveJokeToDb(joke)}>
                Save to collection
            </SaveButton>
        </ButtonWrapper>
    )
}

const MessageHolder = ({ successMsg }) => {

    if (!successMsg) return <></>

    return (
        <MessageWrapper>
            <p>{ successMsg } </p>
        </MessageWrapper>
    )
}

const MainWrapper = styled.div`
    width: calc(45% - 40px);
    height: calc(400px - 40px);
    padding: 0 20px;
    background: var(--hover_color);
    display: flex;
    flex-direction: ${props => props.direction || 'column'};
    align-items: center;
    justify-content: center;
    // margin: auto auto;
`

const ContentWrapper = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`

const ButtonWrapper = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    // background: red;
`

const SaveButton = styled(Button)`
    width: 35%;
    height: 45px;
    font-size: 18px;
`

const MessageWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-size: 14px;
        color: #0a66c2;
    }
`


export default MainComponent;