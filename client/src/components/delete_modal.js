import { AiOutlineClose } from "react-icons/ai";
import styled from 'styled-components';
import Button from '../components/button';
import { useMyContext } from '../context';
import deleteJoke from '../utils/delete_joke';


const DeleteModal = ({ deleteModal, setDeleteModal }) => {
    return (
        <Wrapper
        display={ deleteModal ? 'block' : 'none' }
        >
            <MainComponent setDeleteModal={setDeleteModal} /> 
        </Wrapper>
    )
}

const MainComponent = ({ setDeleteModal }) => {
    return (
        <MainWrapper>
            <ContentHolder 
            setDeleteModal={setDeleteModal}
            />
            <ButtonsHolder setDeleteModal={setDeleteModal} />
        </MainWrapper>
    )
}

const ContentHolder = ({ setDeleteModal }) => {
    return (
        <ContentWrapper>
            <IconHolder setDeleteModal={setDeleteModal} />
            <p>Are you sure you want to delete?</p>
        </ContentWrapper>
    )
}

const IconHolder = ({ setDeleteModal }) => {
    return (
        <IconWrapper onClick={() => setDeleteModal(false)}>
            <AiOutlineClose id='close' />
        </IconWrapper>
    )
}

const ButtonsHolder = ({ setDeleteModal }) => {

    let { toDeleteJoke } = useMyContext();

    let deleteCurrentJoke = (id) => {
        deleteJoke(id)
        setDeleteModal(false)
    }

    return (
        <ButtonsWrapper>
            <OptionButton onClick={() => setDeleteModal(false)}>
                No
            </OptionButton>
            <OptionButton onClick={() => deleteCurrentJoke(toDeleteJoke._id)}>
                Yes
            </OptionButton>
        </ButtonsWrapper>
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
    width: 35%;
    height: 250px;
    background: var(--hover_color);
    margin-top: 20%;
    margin-left: 30%;
`

const ContentWrapper = styled.div`
    width: calc(100% - 40px);
    height: 70%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
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

const ButtonsWrapper = styled.div`
    width: calc(100% - 40px);
    height: 30%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

const OptionButton = styled(Button)`
    width: 20%;
    height: 35px;
`


export default DeleteModal;