import styled from "styled-components";
import { useMyContext } from "../../../context";
import JokeComponent from "./joke_component";


const JokesHolder = ({ setEditModal, setDeleteModal }) => {

    let { jokes, isLoading, isError } = useMyContext();

    if (isLoading) {
        return (
            <HolderWrapper>
                <p id="failed_p">Loading...</p>
            </HolderWrapper>
        )
    }

    if (isError.error) {
        return (
            <HolderWrapper>
                <p id="failed_p">{ isError.msg }</p>
            </HolderWrapper>
        )
    }

    if (!jokes.length) {
        return (
            <HolderWrapper>
                <p id="failed_p">No jokes to view.</p>
            </HolderWrapper>
        )
    }

    return (
        <HolderWrapper>
            {
                jokes.map(joke => <JokeComponent 
                    joke={joke} 
                    key={joke._id} 
                    setEditModal={setEditModal}
                    setDeleteModal={setDeleteModal}
                    />)
            }
        </HolderWrapper>
    )
}

const HolderWrapper = styled.div`
    width: 100%;
    height: calc(100%);
    overflow-y: scroll;

    #failed_p {
        color: var(--hover_color);
        text-align: center;
        padding-top: 30px;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`


export default JokesHolder;