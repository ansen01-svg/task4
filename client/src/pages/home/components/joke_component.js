import styled from "styled-components";
import Button from "../../../components/button";
import { useMyContext } from "../../../context";


const JokeComponent = ({ setEditModal, setDeleteModal, joke }) => {
    return (
        <JokeWrapper>
            <ContentHolder joke={joke} />
            <RateHolder rate={joke.Rating} />
            <ButtonsHolder 
            joke={joke}
            setEditModal={setEditModal}
            setDeleteModal={setDeleteModal}
            />
        </JokeWrapper>
    )
}

const ContentHolder = ({ joke }) => {
    return (
        <ContentWrapper>
            <ParaHolder
            text={joke.Question}
            justify={'flex-start'}
            />
            <ParaHolder
            text={`- ${joke.Answer}`}
            justify={'flex-start'}
            />
        </ContentWrapper>
    )
}

const ParaHolder = ({ text }) => {
    return (
        <ParaWrapper>
            <p>{text}</p>
        </ParaWrapper>
    )
}

const RateHolder = ({ rate }) => {
    return (
        <RateWrapper>
            <p>
                { !rate ? 'Not rated' : `Rating - ${rate}` }
            </p>
        </RateWrapper>
    )
}

const ButtonsHolder = ({ joke, setEditModal, setDeleteModal }) => {

    let { setCurrentJoke, setToDeleteJoke } = useMyContext();

    let setEditOptions = () => {
        setDeleteModal(false)
        setEditModal(true)
        setCurrentJoke(joke)
    }

    let setDeleteOptions = () => {
        setEditModal(false)
        setDeleteModal(true)
        setToDeleteJoke(joke)
    }

    return (
        <ButtonsWrapper>
            <MyButton onClick={setEditOptions}>
                Edit
            </MyButton>
            <MyButton onClick={setDeleteOptions}>
                Delete
            </MyButton>
        </ButtonsWrapper>
    )
}

const JokeWrapper = styled.div`
    width: calc(100% - 40px);
    height: 100px;
    padding: 0 20px;
    display: flex;
    border-bottom: 1px solid var(--border_color);

    &:hover {
        background: var(--border_color);
    }
`

const ContentWrapper = styled.div`
    width: 60%;
    height: 100%;
`

const ParaWrapper = styled.div`
    width: 100%;
`

const RateWrapper = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
`

const ButtonsWrapper = styled.div`
    width: 20%;
    height: calc(100% - 20px);
    padding-top: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 20px;
`

const MyButton = styled(Button)`
    width: 35%;
    height: 30px;
`


export default JokeComponent;