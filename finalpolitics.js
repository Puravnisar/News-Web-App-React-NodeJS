//Purav Nisar
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Async from 'react-async';
import MyCard from './MyCard.js';
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader"; 
import { Redirect } from 'react-router-dom'; 
import { Button, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Route, Link,Switch as RSwitch } from 'react-router-dom';
import SwitchPage from './switchpage';
import {FaRegBookmark} from 'react-icons/fa';
import Searchbarfinal from './searchbarfinal';
import SwitchPageTemp from './switchpagetemp';
import ReactTooltip from 'react-tooltip';

class FinalPolitics extends React.Component{

	constructor(props) {
    super(props);
    this.state = { apiResponse: [],
                    isLoading: true,
                    clickedoonnav:"" };
    this.gupdate=this.gupdate.bind(this);
	}


	async componentDidMount() {
    console.log("url");
    console.log(this.props.url);
	    const response = await fetch(this.props.url);
    	const json = await response.json();
    	this.setState({ apiResponse: json,
                      isLoading: false });
    }
    
    gupdate(gchecked)
    {
        this.props.handlep(gchecked);
    }

    tabselected(tabvalue)
    {
        this.setState({clickedoonnav:tabvalue});
    }


	render()
	{
		var data = this.state.apiResponse;
    var final = data.map(function(data){
                        return <MyCard key={data.id} dataobj={data} />;
                      });

    /*var Temp=this.handleData();
		var Temp2=React.createElement("div",null,Temp);*/
    const overridecss = css`
                      display: block;
                      margin: 0 auto;
                    `;
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    //const style = { marginTop:"50%" ,marginBottom:"50%" }
    if(this.state.clickedoonnav==="")
    {
        if(this.state.isLoading)
        {
        return(
            <> 
                <Navbar collapseOnSelect expand="lg" style={{backgroundImage:"linear-gradient(to right,#1d2b4f,#4a67af)"}} variant="dark" className="pl-0 mb-4">
                <Searchbarfinal/>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto ml-3 ml-lg-0">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/World">World</Nav.Link>
                    <Nav.Link as={Link} to="/Politics"  className="bold" style={{color:"white"}}>Politics</Nav.Link>
                    <Nav.Link as={Link} to="/Business">Business</Nav.Link>
                    <Nav.Link as={Link} to="/Technology">Technology</Nav.Link>
                    <Nav.Link as={Link} to="/Sports">Sports</Nav.Link>
                    </Nav>
                    <Nav.Link as={Link} to="/favourite" className="px-1 ml-3 ml-lg-0" style={{cursor:"default"}}><FaRegBookmark className="mr-2" style={{color:"white"}} data-tip data-for="bookmarksearchbar"/></Nav.Link>
                    <div className="mr-3 ml-3 ml-md-0" style={{fontSize:18,color:"white"}}>NYTimes</div>
                    <SwitchPageTemp handle={this.gupdate} switchstate={this.props.switchstate}/>
                    <div className="ml-lg-2 ml-3" style={{fontSize:18,color:"white"}}>Guardian</div>
                </Navbar.Collapse>
                </Navbar>
                <ReactTooltip id='bookmarksearchbar' effect="solid"  place="bottom" className="px-1 py-1">
                            <span>Bookmark</span>
                </ReactTooltip>
                <div style={style} className="justify-content-center">
                <div> 
                <BounceLoader
                    size={40}
                    color={"#6380da"}
                    css={overridecss}
                />
                </div>
                <div>Loading</div>  
                </div>
            </>
            )
        }
        else
        {
            return(
                <div>
                <Navbar collapseOnSelect expand="lg" style={{backgroundImage:"linear-gradient(to right,#1d2b4f,#4a67af)"}} variant="dark" className="pl-0 mb-4">
                <Searchbarfinal searchpagedirect={this.gotoexpandedsearch}/>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto ml-3 ml-lg-0">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/World">World</Nav.Link>
                    <Nav.Link as={Link} to="/Politics"  className="bold" style={{color:"white"}}>Politics</Nav.Link>
                    <Nav.Link as={Link} to="/Business">Business</Nav.Link>
                    <Nav.Link as={Link} to="/Technology">Technology</Nav.Link>
                    <Nav.Link as={Link} to="/Sports" >Sports</Nav.Link>
                    </Nav>
                    <Nav.Link as={Link} to="/favourite" className="px-1 ml-3 ml-lg-0" style={{cursor:"default"}}><FaRegBookmark className="mr-2" style={{color:"white"}} data-tip data-for="bookmarksearchbar"/></Nav.Link>
                    <div className="mr-3 ml-3 ml-md-0" style={{fontSize:18,color:"white"}}>NYTimes</div>
                    <SwitchPageTemp handle={this.gupdate} switchstate={this.props.switchstate}/>
                    <div className="ml-lg-2 ml-3" style={{fontSize:18,color:"white"}}>Guardian</div>
                </Navbar.Collapse>
                </Navbar>
                <ReactTooltip id='bookmarksearchbar' effect="solid"  place="bottom" className="px-1 py-1">
                            <span>Bookmark</span>
                </ReactTooltip>
                {final}
                </div>
                )
        }
    }
    else
    {
        console.log("In redirect");
        return(<Redirect push to={'/'+this.state.clickedoonnav} />);
    }

	}
  
}
export default FinalPolitics;