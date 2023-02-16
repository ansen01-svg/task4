import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


let LinkHolder = ({ link, linkName }) => {
    return (
        <LinkWrapper>
            <NavLink to={link}
            className={({isActive}) => isActive ? 'active' : ''}>
                {linkName}
            </NavLink> 
        </LinkWrapper>
    )
}

let LinkWrapper = styled.div`
    padding: 2%;
    display: flex;
    align-items: center;
    justify-content: center;

    #link {
        width: 100%;
        height: 100%;
    }
    
    .active {
        color: var(--button_color);
    }
`


export default LinkHolder;