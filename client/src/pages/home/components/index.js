import { useState } from "react";
import styled from "styled-components";
import DeleteModal from '../../../components/delete_modal';
import EditModal from "../../../components/edit_modal";
import ContentHeader from "./header";
import JokesHolder from "./jokes_holder";


const HomePage = () => {

    let [editModal, setEditModal] = useState(false)
    let [deleteModal, setDeleteModal] = useState(false)

    return (
        <HomeWrapper>
            <EditModal 
            editModal={editModal}
            setEditModal={setEditModal}
            />
            <DeleteModal 
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
            />
            <ContentHolder
            setEditModal={setEditModal}
            setDeleteModal={setDeleteModal}
            />
        </HomeWrapper>
    )
}

const ContentHolder = ({ setEditModal, setDeleteModal }) => {
    return (
        <ContentWrapper>
            <ContentHeader title={'Saved Jokes'} />
            <JokesHolder
            setEditModal={setEditModal}
            setDeleteModal={setDeleteModal}
            />
        </ContentWrapper>
    )
}

const HomeWrapper = styled.div`
    width: 100vw;
    height: calc(100vh - 80px - 30px);
    padding-top: 30px;
    display: flex;
    justify-content: center;
`

const ContentWrapper = styled.div`
    width: 80vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`


export default HomePage;