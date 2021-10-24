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
                                <NavLink active href="/employers">
                                    Employer Search
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink active href="/fullsurvey">
                                    Full Survey
                                </NavLink>
                            </NavItem>
                            <Dropdown
                                open={this.state.dropdownOpen}
                                toggle={this.toggleDropdown}
                                group
                            >
                                <DropdownToggle nav split/>
                                <DropdownMenu>
                                    <DropdownItem href="/faircompensation">Compensation</DropdownItem>
                                    <DropdownItem href="/healthsafety">Health + Safety</DropdownItem>
                                    <DropdownItem href="/workplaceequality">Workplace Equality</DropdownItem>
                                    <DropdownItem href="/unionization">Unionization</DropdownItem>
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