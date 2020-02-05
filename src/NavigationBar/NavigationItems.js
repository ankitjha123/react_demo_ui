import React,{ Component } from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Route, withRouter, Link, Switch } from 'react-router-dom';

import Home from '../Pages/Home/Home'
import Books from '../Pages/Books/Books'
import ContactUs from '../Pages/Contact Us/ContactUs'
import classes  from './NavigationItems.css';

class NavigationItems extends Component {

constructor(props) {
    super(props);
}

state = {
    inputText : null
}

getValueHandler = () => {
    var inputVal = this.refs.searchInput.value;
    if (inputVal !== null) {
        this.setState({
            inputText : inputVal
        },() => {
            this.props.history.push(`/books/search/${inputVal}`);
            this.refs.searchInput.value = null;
        })
    }
}

render () {
    
    return (
    <React.Fragment>
        <Navbar bg="light" variant="light" expand="lg" fixed="top" className={classes.NavbarContainer}>
            <Link to="/"> 
                <Navbar.Brand href="/" className={classes.ItemContainer}>React Boostrap</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link to="/books"> 
                    <Nav.Link href="/books" className={classes.ItemContainer}>Books</Nav.Link>
                </Link>
                <Link to="/contactus"> 
                    <Nav.Link href="/contactus" className={classes.ItemContainer}>Contact Us</Nav.Link>
                </Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"  ref='searchInput' />
                    <Button variant="outline-success" onClick={() => this.getValueHandler()}>Search</Button>
                
                </Form>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Switch>
            <Route path = "/" exact render={()=> <Home/>}/>
            <Route path = "/books" exact render={()=> <Books/>}/> 
            <Route path = "/contactus" exact render={()=> <ContactUs/>}/>  
            <Route path = "/books/search/:searchParam" exact render={()=> <Books searchParam = {this.state.inputText} />}/>  
        </Switch>
    </React.Fragment>
        )
    }
}

export default withRouter(NavigationItems);