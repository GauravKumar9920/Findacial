import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;    
`

export const NavbarContainer = styled.div`
    display: flex;
    height: 80px;
    justify-content: space-between;
    padding: 0 25px;
    z-index: 1;
    width: 100%;   
`
export const NavLogo = styled(Link)`
    color: orange;
    justify-self: flex-start;
    display: flex;
    align-items: center;
    margin-left: 80px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    font-size: 1.5rem;
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;
    margin-right: 100px;
`
export const NavItem = styled.li`
    height: 80px;
` 
export const NavLinks = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    height: 100%;
    padding: 0 1rem;
    text-align: center;
    
    
    &.active {
        border-bottom: 25px solid green;
    }
    &:hover {
        color: orange;
    }
`