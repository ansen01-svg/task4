import styled from 'styled-components';
import LinkHolder from './links';


const Navbar = () => {
    return (
        <NavWrapper>
            <NavCenter />
        </NavWrapper>
    )
}

let NavCenter = () => {
    return (
        <InnerWrapper>
            <LinkHolder link={'/'} linkName={'Home'} /> 
            <LinkHolder link={'/jokePage'} linkName={'Get Random Jokes'} />
        </InnerWrapper>
    )
}

const NavWrapper = styled.div`
    width: 100vw;
    height: 80px;
    background-color: var(--bg_color);
    display: flex;
    justify-content: center;
`

const InnerWrapper = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
`


export default Navbar;