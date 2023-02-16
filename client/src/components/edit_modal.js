import { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import styled from 'styled-components';
import Button from '../components/button';
import { useMyContext } from '../context';
import postRating from '../utils/post_rating';


const EditModal = ({ editModal, setEditModal }) => {

    let { currentJoke } = useMyContext();

    return (
        <Wrapper
        display={ editModal ? 'block' : 'none' }
        >
            { 
                currentJoke && <MainComponent 
                currentJoke={currentJoke} 
                setEditModal={setEditModal}
                /> 
            } 
        </Wrapper>
    )
}

const MainComponent = ({ currentJoke, setEditModal }) => {
    return (
        <MainWrapper>
            <ContentHolder 
            currentJoke={currentJoke} 
            setEditModal={setEditModal}
            />
            <FormHolder 
            jokeId={currentJoke._id} 
            setEditModal={setEditModal}
            />
        </MainWrapper>
    )
}

const ContentHolder = ({ currentJoke, setEditModal }) => {
    return (
        <ContentWrapper>
            <IconHolder setEditModal={setEditModal} />
            <p>{ currentJoke.Question }</p>
            <p>- { currentJoke.Answer }</p>
        </ContentWrapper>
    )
}

const IconHolder = ({ setEditModal }) => {
    return (
        <IconWrapper onClick={() => setEditModal(false)}>
            <AiOutlineClose id='close' />
        </IconWrapper>
    )
}

const FormHolder = ({ jokeId, setEditModal }) => {

    let [rating, setRating] = useState('');

    let handleSubmit = (e) => {
        e.preventDefault();
        postRating(jokeId, rating);
        setRating('');
        setEditModal(false);
    }

    return (
        <FormWrapper>
            <RatingForm 
            rating={rating}
            setRating={setRating}
            handleSubmit={handleSubmit}
            />
        </FormWrapper>
    )
}

const RatingForm = ({ rating, setRating, handleSubmit }) => {
    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <input type='number' min='0' max='10' 
            placeholder='Rate from 1 to 10'
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            />
            <SubmitButton>Save</SubmitButton>
        </Form>
    )
}

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: var(--bg_color_main);
    display: ${props => props.display};
    opacity: 0.99;
    z-index: 5;
`

const MainWrapper = styled.div`
    width: 45%;
    height: 300px;
    background: var(--hover_color);
    margin-top: 20%;
    margin-left: 27%;
`

const ContentWrapper = styled.div`
    width: calc(100% - 40px);
    height: 70%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: relative;
`

const IconWrapper = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;

    #close {
        font-size: 20px;
    }
`

const FormWrapper = styled.div`
    width: calc(100% - 40px);
    height: 30%;
`
    
const Form = styled.form`
    width: 100%;
    height: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
        width: 30%;
        height: 40px;
        padding-left: 10px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    }
`

const SubmitButton = styled(Button)`
    width: 20%;
    height: 45px;
`


export default EditModal;