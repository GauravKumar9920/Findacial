import React from 'react'
import {Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks} from './NavbarElements'

const Navbar = () => {
    return (
       <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Voter Helpline</NavLogo>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="register">Register</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup">Signup</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
       </>
    )
}

export default Navbar;

