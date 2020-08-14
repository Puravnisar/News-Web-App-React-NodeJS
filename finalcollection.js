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
import MyFinalCardExpanded from './myfinalexpandedcard';
import Searchbarfinal from './searchbarfinal';
//import Switch from "react-switch";
import FinalFavouritePage from './finalfavourite';
import FinalSearchPage from './finalsearchpage'
import MyFinalSearchCardExpanded from './myfinalsearchcardexpanded';
import { Redirect } from 'react-router-dom';
import FinalTabs from './finaltabs';
import FinalWorld from './finalworld';
import FinalPolitics from './finalpolitics';
import FinalBusiness from './finalbusiness';
import FinalTechnology from './finaltechnology';
import FinalSports from './finalsports';


class FinalCollection extends React.Component{

	constructor(props) {
	super(props);
	let temppaper=localStorage.getItem("newspaper");
	//console.log("newspaper from storage");
	//console.log(temppaper);
	let tempchecked=true;
	if(temppaper==null)
	{	
		temppaper="guardian";
		//console.log("in if");
	}
	if(temppaper=="")
	{
		temppaper="guardian";
		//console.log("in if string");
	}
	if(temppaper=="null")
	{
		temppaper="guardian";
		//console.log("in if string null");
	}
	if(temppaper=="newyorktimes")
		tempchecked=false
	//console.log("temppaper")
	//console.log(temppaper);
    this.state = { apiResponse: "",
					newspaper:temppaper,
					checked: tempchecked,
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
		localStorage.setItem("newspaper", finalnews);
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
		//console.log("in render" );
		//console.log("newspaper");
		//console.log(this.state.newspaper);
		//const loadOptions = (inputValue, callback) => {
		  // do some work
		  //const requestResults = ...

		  //callback(requestResults)
		//}
		return(
			<div>
			<BrowserRouter>
			<RSwitch>
				<Route path='/' component={() => <FinalTabs url={"https://kanchan-9.appspot.com/"+this.state.newspaper+"/home"} handlep={this.handleChange} typeoftab={"Home"} switchstate={this.state.checked}/>} exact />
				<Route path='/World' component={() => <FinalWorld url={"https://kanchan-9.appspot.com/"+this.state.newspaper+"/world"} handlep={this.handleChange} typeoftab={"world"} switchstate={this.state.checked}/>} />
				<Route path='/Politics' component={() => <FinalPolitics url={"https://kanchan-9.appspot.com/"+this.state.newspaper+"/politics"} handlep={this.handleChange} typeoftab={"politics"} switchstate={this.state.checked} />} />
				<Route path='/Business' component={() => <FinalBusiness url={"https://kanchan-9.appspot.com/"+this.state.newspaper+"/business"} handlep={this.handleChange} typeoftab={"business"} switchstate={this.state.checked} />} />
				<Route path='/Technology' component={() => <FinalTechnology url={"https://kanchan-9.appspot.com/"+this.state.newspaper+"/technology"} handlep={this.handleChange} typeoftab={"technology"} switchstate={this.state.checked}/>} />
				<Route path='/Sports' component={() => <FinalSports url={"https://kanchan-9.appspot.com/"+this.state.newspaper+"/sports" } handlep={this.handleChange} typeoftab={"sports"} switchstate={this.state.checked} />}  />
				<Route path='/detailedarticle/' component={(props)=><MyFinalCardExpanded {...props} type={this.state.newspaper} handlep={this.handleChange} />} />
				<Route path='/favourite' component={(props)=><FinalFavouritePage {...props} type={this.state.newspaper} handlep={this.handleChange} />} />
				<Route path='/search/' component={(props)=><FinalSearchPage {...props} type={this.state.newspaper}  handlep={this.handleChange}/>} />
				<Route path='/detailedarticlefromsearch/' component={(props)=><MyFinalSearchCardExpanded {...props} handlep={this.handleChange} />} />
			</RSwitch>
			</BrowserRouter>
			</div>
			);
		}
	
}
export default FinalCollection;