//Purav Nisar
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styling.css';
import Card from 'react-bootstrap/Card'
import Async from 'react-async';
import Badge from 'react-bootstrap/Badge';
import ModalShare from './modalshare';
import Truncate from 'react-truncate';
import { Redirect } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import {EmailShareButton,FacebookShareButton, TwitterShareButton} from 'react-share';
import {EmailIcon,FacebookIcon,TwitterIcon} from 'react-share';
import { Button} from 'react-bootstrap';
import { MdShare } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cssTransition } from 'react-toastify';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify'
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

class FavouriteCard extends React.Component{

	constructor(props) {
    super(props);
	this.state = { apiResponse: [],
				   redirectstate:false, 
				   showModal:false};
				   
	this.maintainRedirect = this.maintainRedirect.bind(this);
	this.openModal = this.openModal.bind(this);
	this.closeModal = this.closeModal.bind(this);
	this.newhandlearticle = this.newhandlearticle.bind(this);
	//this.deleteArticle = this.deleteArticle.bind(this);
	}

	maintainRedirect(event)
	{
		//console.log("Event");
		//console.log(event.target.className);
		//console.log("IN maintain");
		console.log("in detailed state");
		this.setState({redirectstate:true});
	}

	openModal(event)
	{
		event.stopPropagation();
		//event.preventDefault();
		//event.nativeEvent.stopImmediatePropagation();
		console.log("openModal");
		this.setState({
		showModal:true
		});
	}

    closeModal()
	{
		//event.stopPropagation();
		console.log("closeModal");
		this.setState({
		showModal:false
		});
	}

	/*deleteArticle(event)
	{
		event.stopPropagation();
		toast(<span style={{color:"black",fontWeight:"bold"}}>Removing - {this.props.dataobj.title}</span>, {
			position: toast.POSITION.TOP_CENTER,
			autoClose:3000,
			transition: Zoom,
			hideProgressBar:true,
			className:"justify-content-left text-left p-1",
		});
		localStorage.removeItem(this.props.dataobj.id);
		setTimeout(() => {
			this.props.handleArticleCount();
		  }, 1000);
	}*/

	newhandlearticle(event)
	{
		event.stopPropagation();
		this.props.removeArticle(this.props.dataobj.id,this.props.dataobj.title);
	}

	/*					<Card.Text>
						<Truncate lines={3} ellipsis={<span>...</span>}>    
						{this.props.dataobj.description}
						</Truncate>
					</Card.Text>*/

	render()
	{
		console.log("In render");
		console.log(this.state.redirectstate);	
		if(this.state.redirectstate===false)
		{
			/*let lastind=this.props.dataobj.blocks.main.elements[0].assets.length-1;
			let imgsrc="";*/
			console.log(this.state.redirectstate);
			let sectioncolor={};
			let sectiontext="";
			/*if(lastind<0)
				imgsrc="https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png";
			else
				imgsrc=this.props.dataobj.blocks.main.elements[0].assets[lastind].file;*/
			//console.log("SectionId");
			console.log(this.props.dataobj.section);
			if(this.props.dataobj.section==="world")
			{
				//console.log("in world");
				sectioncolor={backgroundColor: "#7938fe", color:"white"};
				sectiontext="WORLD";
			}
			else if(this.props.dataobj.section==="politics")
			{
				//console.log("in politics");
				sectioncolor={backgroundColor: "#008e7e", color:"white"};
				sectiontext="POLITICS";
			}
			else if(this.props.dataobj.section==="business")
			{
				//console.log("in business");
				sectioncolor={backgroundColor: "#3fa3e9", color:"white"};
				sectiontext="BUSINESS";
			}
			else if(this.props.dataobj.section==="technology")
			{
				//console.log("in technology");
				sectioncolor={backgroundColor: "#c3dc00"};
				sectiontext="TECHNOLOGY";
			}
			else if(this.props.dataobj.section==="sport"||this.props.dataobj.section==="sports")
			{
				//console.log("in sport");
				sectioncolor={backgroundColor: "#ffb900"};
				sectiontext="SPORTS";
			}
			else
			{
				//console.log("in others");
				sectioncolor={backgroundColor: "#606b71", color:"white"};
				sectiontext=this.props.dataobj.section.toUpperCase();
			}
			let newscolour={};
			if(this.props.dataobj.newspaper==="GUARDIAN")
			{
				newscolour={backgroundColor:"#162340", color:"white"};
			}
			else
			{
				newscolour={backgroundColor:"#cdcdce"};
			}
			//console.log("sectioncolor");
			//console.log(sectioncolor);
			/*let dategot=new Date(this.props.dataobj.webPublicationDate);
			console.log(this.props.dataobj.webPublicationDate)*/
			//let dateformat=dategot.toLocaleDateString();
			//let dateformat=dategot.toString();
			//dateformat=dateformat.substring(0,10);
			/*let dateformat=this.props.dataobj.webPublicationDate.substring(0,10);
			console.log("DATE");
			console.log(dateformat);*/

			return(
				<div>
					<Modal show={this.state.showModal} onHide={this.closeModal}>
					<Modal.Header closeButton className="py-2">
					<Modal.Title><h4>{this.props.dataobj.title}</h4></Modal.Title>
					</Modal.Header>
					<Modal.Body className="py-2">
					<h4 className="text-center">Share via</h4>
					<div className="d-flex justify-content-around">
					<FacebookShareButton  hashtag="#CSCI_571_NewsApp" url={this.props.dataobj.webUrl}><FacebookIcon round={true}/></FacebookShareButton>
					<TwitterShareButton url={this.props.dataobj.webUrl} hashtags={["CSCI_571_NewsApp"]}><TwitterIcon round={true}/></TwitterShareButton>
					<EmailShareButton subject="#CSCI_571_NewsApp" url={this.props.dataobj.webUrl} ><EmailIcon round={true}/></EmailShareButton>
					</div>
					</Modal.Body>
					</Modal>
					<Card className="mx-auto shadow bg-white rounded p-1" onClick={this.maintainRedirect}>
					<Card.Body>
					<Card.Text className="font-weight-bold font-italic"><Truncate lines={2} ellipsis={<span>...</span>}>{this.props.dataobj.title} </Truncate>
																		<MdShare onClick={this.openModal} />
																		<MdDelete onClick={this.newhandlearticle}/>
					</Card.Text>
					<Card.Img variant="top" src={this.props.dataobj.imagesrc} className="img-thumbnail mb-2" alt="..." />    
					<Card.Text>    
						<div className="card-text d-inline"><div className="w-20 float-left" style={{fontSize:14}}><i>{this.props.dataobj.date}</i></div><div className="w-80 float-right justify-content-right text-right h-100" style={{fontSize:14}}><Badge style={sectioncolor}>{sectiontext}</Badge><Badge className="ml-2" style={newscolour}>{this.props.dataobj.newspaper}</Badge></div></div>
					</Card.Text>
					</Card.Body>
				</Card>
				</div>
			)
		}
		else
		{
			/*let finalurl="";
			if(this.props.dataobj.articleId==null)
			{
				finalurl=this.props.dataobj.webUrl;
			}
			else
			{
				finalurl=this.props.dataobj.articleId;
				console.log("before redirect");
				console.log(this.props.dataobj.articleId);
			}*/
			return(<Redirect push to={'/detailedarticle?id='+this.props.dataobj.id} />)
		}	


	}

}
export default FavouriteCard;