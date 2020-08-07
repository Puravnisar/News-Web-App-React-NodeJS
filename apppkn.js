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
import {BrowserRouter, Route, Link,Switch as RSwitch } from 'react-router-dom';
import World from './world';
import Politics from './politics';
import Business from './business';
import Technology from './technology';
import Sports from './sports';
import Hometabtemp3 from './hometabtemp3';
import SwitchPage from './switchpage';
import MyCardExpanded from './MyCardExpanded';
import Searchbarfinal from './searchbarfinal';
//import Switch from "react-switch";
import FavouritePage from './favourite';
import SearchPage from './searchpage'
import MySearchCardExpanded from './mysearchcardexpanded';
import { Redirect } from 'react-router-dom';

class Apppkn extends React.Component{

	constructor(props) {
    super(props);
    this.state = { apiResponse: "",
					newspaper:"guardian",
					checked: true,
					showSwitch:true};

	this.handleChange = this.handleChange.bind(this);
	this.gotoexpandedsearch = this.gotoexpandedsearch.bind(this);
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
	 	//console.log("in handle change");
		//this.setState({ checked:true,newspaper:"guardian" });
		/*this.setState(prevState=>{
			return{
				checked:!prevState.checked,
				newspaper:prevState.newspaper=="guardian"?"newyorktimes":"guardian"
			}
		})
		console.log(this.state.newspaper);*/
		var finalnews=""
		if(checked)
		{
			finalnews="guardian";
		}
		else
		{
			finalnews="newyorktimes";
		}
		this.setState(
			{
				checked:checked,
				newspaper:finalnews
			}
		)
		console.log(this.state.newspaper)
	  }

	gotoexpandedsearch(value)
	{
		console.log("value");
		//<Redirect push to={'/search?q='+value} />
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
		if(this.state.showSwitch===true)
		{
		return(
			<div>
			<BrowserRouter>
			<Navbar collapseOnSelect expand="lg" style={{backgroundImage:"linear-gradient(to right,#1d2b4f,#4a67af)"}} variant="dark" className="pl-0 mb-4">
				<Searchbarfinal searchpagedirect={this.gotoexpandedsearch}/>
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
			    <Nav.Link as={Link} to="/favourite"><FaRegBookmark className="mr-2" style={{color:"white"}}/></Nav.Link>
			    <div className="mr-3" style={{fontSize:18,color:"white"}}>NYTimes</div>
			    <SwitchPage handle={this.handleChange}/>
			    <div className="ml-2" style={{fontSize:18,color:"white"}}>Guardian</div>
			  </Navbar.Collapse>
			</Navbar>
			<RSwitch>
				<Route path='/' component={() => <Hometabtemp3 url={"http://localhost:9000/"+this.state.newspaper+"/home"}/>} exact />
				<Route path='/World' component={() => <Hometabtemp3 url={"http://localhost:9000/"+this.state.newspaper+"/world"}/>} />
				<Route path='/Politics' component={() => <Hometabtemp3 url={"http://localhost:9000/"+this.state.newspaper+"/politics"} />} />
				<Route path='/Business' component={() => <Hometabtemp3 url={"http://localhost:9000/"+this.state.newspaper+"/business"} />} />
				<Route path='/Technology' component={() => <Hometabtemp3 url={"http://localhost:9000/"+this.state.newspaper+"/technology"} />} />
				<Route path='/Sports' component={() => <Hometabtemp3 url={"http://localhost:9000/"+this.state.newspaper+"/sports"} />} />
				<Route path='/detailedarticle/' component={(props)=><MyCardExpanded {...props} type={this.state.newspaper} />} />
				<Route path='/favourite' component={(props)=><FavouritePage {...props} type={this.state.newspaper} />} />
				<Route path='/search/' component={(props)=><SearchPage {...props} type={this.state.newspaper} />} />
				<Route path='/detailedarticlefromsearch/' component={(props)=><MySearchCardExpanded {...props} />} />
			</RSwitch>
			</BrowserRouter>
			</div>
			);
		}
		else
		{
			return(
			<div>
			<BrowserRouter>
			<Navbar collapseOnSelect expand="lg" style={{backgroundImage:"linear-gradient(to right,#1d2b4f,#4a67af)"}} variant="dark" className="pl-0 mb-4">
				<Searchbarfinal searchpagedirect={this.gotoexpandedsearch}/>
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
			    <Nav.Link as={Link} to="/favourite"><FaRegBookmark className="mr-2" style={{color:"white"}}/></Nav.Link>
			  </Navbar.Collapse>
			</Navbar>
				<Route path='/' component={() => <Hometabtemp3 url={"http://localhost:9000/"+this.state.newspaper+"/home"}/>} exact />
				<Route path='/World' component={() => <Hometabtemp3 url={"http://localhost:9000/"+this.state.newspaper+"/world"}/>} />
				<Route path='/Politics' component={() => <Hometabtemp3 url={"http://localhost:9000/"+this.state.newspaper+"/politics"} />} />
				<Route path='/Business' component={() => <Hometabtemp3 url={"http://localhost:9000/"+this.state.newspaper+"/business"} />} />
				<Route path='/Technology' component={() => <Hometabtemp3 url={"http://localhost:9000/"+this.state.newspaper+"/technology"} />} />
				<Route path='/Sports' component={() => <Hometabtemp3 url={"http://localhost:9000/"+this.state.newspaper+"/sports"} />} />
				<Route path='/detailedarticle/' component={(props)=><MyCardExpanded {...props} type={this.state.newspaper} />} />
				<Route path='/favourite' component={(props)=><FavouritePage {...props} type={this.state.newspaper} />} />
				<Route path='/search/' component={(props)=><SearchPage {...props} type={this.state.newspaper} />} />
				<Route path='/detailedarticlefromsearch/' component={(props)=><MySearchCardExpanded {...props} />} />
			</BrowserRouter>
			</div>
			);

		}
	}
}
export default Apppkn;