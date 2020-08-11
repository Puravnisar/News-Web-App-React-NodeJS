//Purav Nisar
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import './styling.css';
//import './index.css';
import Select from 'react-select';
import Async, { makeAsyncSelect } from 'react-select';
import Searchbartemp from './searchbartemp.js';
import Switchpage from './switchpage';
import {FaRegBookmark} from 'react-icons/fa';
import { Component } from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import World from './world';
import Politics from './politics';
import Business from './business';
import Technology from './technology';
import Sports from './sports';
import Hometabtemp3 from './hometabtemp3';
import Switch from "react-switch";

class Apppkn2 extends React.Component{

	constructor(props) {
    super(props);
    this.state = { apiResponse: "",
					newspaper:"newyorktimes",
					checked: false};
	this.handleChange = this.handleChange.bind(this);
	}

	/*callAPI() {
	    fetch("http://localhost:9000/testAPI")
	        .then(res => res.text())
	        .then(res => this.setState({ apiResponse: res }));
	}


	componentWillMount() {
	    this.callAPI();


	    				<Route path='/Home' render={(props) => <Hometabtemp3 {...props} 
						url={"http://localhost:9000/"+this.state.newspaper+"/home"} exact/>} />
				<Route path='/World' render={(props) => <Hometabtemp3 {...props} 
																		url={"http://localhost:9000/"+this.state.newspaper+"/world"} />} />
				<Route path='/Politics' render={(props) => <Hometabtemp3 {...props} 
																		url={"http://localhost:9000/"+this.state.newspaper+"/politics"} />} />
				<Route path='/Business' render={(props) => <Hometabtemp3 {...props} 
																		url={"http://localhost:9000/"+this.state.newspaper+"/business"} />} />
				<Route path='/Technology' render={(props) => <Hometabtemp3 {...props} 
																		url={"http://localhost:9000/"+this.state.newspaper+"/technology"} />} />
				<Route path='/Sports' render={(props) => <Hometabtemp3 {...props} 
																		url={"http://localhost:9000/"+this.state.newspaper+"/sport"} />} />
	}*/

	 handleChange(checked) {
	 	console.log("in handle change");
		//this.setState({ checked:true,newspaper:"guardian" });
		this.setState(prevState=>{
			return{
				checked:!prevState.checked,
				newspaper:prevState.newspaper=="guardian"?"newyorktimes":"guardian"
			}
		})
	    console.log(this.state.newspaper);
	  }

	render()
	{
		console.log("in render" );
		console.log("newspaper");
		console.log(this.state.newspaper);
		//const loadOptions = (inputValue, callback) => {
		  // do some work
		  //const requestResults = ...

		  //callback(requestResults)
		//}

		return(
			<div>
			<BrowserRouter>
			<Navbar collapseOnSelect expand="lg" style={{backgroundImage:"linear-gradient(to right,#1d2b4f,#4a67af)"}} variant="dark" className="pl-0 mb-4">
				<Searchbartemp/>
			  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
			  <Navbar.Collapse id="responsive-navbar-nav">
			    <Nav className="mr-auto">
			      <Nav.Link as={Link} to="/">Home</Nav.Link>
			      <Nav.Link as={Link} to="/World">World</Nav.Link>
			      <Nav.Link as={Link} to="/Politics">Politics</Nav.Link>
			      <Nav.Link as={Link} to="/Business">Business</Nav.Link>
			      <Nav.Link as={Link} to="/Technology">Technology</Nav.Link>
			      <Nav.Link as={Link} to="/Sports">Sports</Nav.Link>
			    </Nav>
			    <FaRegBookmark className="mr-2"/>
			    <div className="mr-3" style={{fontSize:18}}>NYTimes</div>
			     		<Switch
				            checked={this.state.checked}
				            onChange={this.handleChange}
				            offColor="#d9d9d9"
				            onColor="#2097f3"
				            onHandleColor="white"
				            handleDiameter={21}
				            uncheckedIcon={false}
				            checkedIcon={false}
				            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
				            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
				            height={23}
				            width={48}
				            className="react-switch"
				            id="material-switch"
				          />
			    <div className="ml-2" style={{fontSize:18}}>Guardian</div>
			  </Navbar.Collapse>
			</Navbar>
				<Route path='/' component={() => <Hometabtemp3 url={"http://localhost:9000/"+this.state.newspaper+"/home"} />} exact />
				<Route path='/World' component={() => <Hometabtemp3 url={"http://localhost:9000/"+this.state.newspaper+"/world"} />} />
				<Route path='/Politics' component={() => <Hometabtemp3 url={"http://localhost:9000/"+this.state.newspaper+"/politics"} />} />
				<Route path='/Business' component={() => <Hometabtemp3 url={"http://localhost:9000/"+this.state.newspaper+"/business"} />} />
				<Route path='/Technology' component={() => <Hometabtemp3 url={"http://localhost:9000/"+this.state.newspaper+"/technology"} />} />
				<Route path='/Sports' component={() => <Hometabtemp3 url={"http://localhost:9000/"+this.state.newspaper+"/sports"} />} />
				</BrowserRouter>
			</div>
			)

	}
}
export default Apppkn2;