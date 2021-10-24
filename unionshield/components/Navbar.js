import React from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Collapse,
    Button
} from 'shards-react';


export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);

        this.state = {
            dropdownOpen: false,
            collapseOpen: false
        };
    }

    toggleDropdown() {
        this.setState({
            ...this.state,
            ...{
                dropdownOpen: !this.state.dropdownOpen
            }
        });
    }

    toggleNavbar() {
        this.setState({
            ...this.state,
            ...{
                collapseOpen: !this.state.collapseOpen
            }
        });
    }
    render(){
        return(
            <div className="outer sticky-top">
                <Navbar type="light" theme="" expand="md" className="background sticky-top">
                    <NavLink href="/" className="background"><img className="headerlogo" src="/largelogo.png"></img></NavLink>

                    <NavbarToggler onClick={this.toggleNavbar} />

                    <Collapse open={this.state.collapseOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink active href="/">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink active href="/page1">
                                    HELLO
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink active href="/page2">
                                    page2
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink active href="/page3">
                                    page3
                                </NavLink>
                            </NavItem>
                            <Dropdown
                                open={this.state.dropdownOpen}
                                toggle={this.toggleDropdown}
                                group
                            >
                                <NavItem>
                                    <NavLink active href="/page4">
                                        idk
                                    </NavLink>
                                </NavItem>
                                <DropdownToggle nav split/>
                                <DropdownMenu>
                                    <DropdownItem href="/">jasdhfkjdhsf</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
                <style jsx global>{`
                    .outer{
                        position: sticky-top;                 
                    }     
                    .background{
                        background-color: #b9d6f2;
                    }  
                    .headerlogo{
                        height: 50px;
                    }         
                `}</style>
            </div>
        );
    }
}