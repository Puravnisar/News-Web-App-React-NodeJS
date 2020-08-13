//Purav Nisar
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Async from 'react-async';
import MyCard from './MyCard.js';
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";
import CardDeck from 'react-bootstrap/CardDeck'; 
import FavouriteCard from './favouriteCard'; 
import { CardColumns } from 'react-bootstrap';
import StackGrid from "react-stack-grid";
//import './styling1.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cssTransition } from 'react-toastify';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify'
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

class FavouritePage extends React.Component{

	constructor(props) {
    super(props);
    let keysconst = Object.keys(localStorage);
    let iconst = keysconst.length;
    this.state = { apiResponse: [],
                    isLoading: true,
                    articlecount:iconst,
                    storedArticles:[] };
    this.articlecountupdate = this.articlecountupdate.bind(this);
    //this.maintainRedirect = this.maintainRedirect.bind(this);
    this.deleteArticle=this.deleteArticle.bind(this);
    console.log("In bind");
	}
/* </div>
<div className="card-columns">*/

	componentDidMount() {
    /*console.log("url");
    console.log(this.props.url);
	    const response = await fetch(this.props.url);
    	const json = await response.json();
    	this.setState({ apiResponse: json,
                      isLoading: false });*/
        console.log("In mount");
        var values = [];
        var keys = Object.keys(localStorage);
        var i = keys.length;
        var j = keys.length;
        console.log("i");
        console.log(i);

        while ( i-- ) {
            values.push( JSON.parse(localStorage.getItem(keys[i]) ));
        }
        this.setState({isLoading:false,
                        storedArticles:values});
  }
  
  articlecountupdate()
  {
    this.setState(prevState=>{
			return{
                articlecount:prevState.articlecount-1
			      }
        });
  }


    deleteArticle(id,title)
    {
      //event.stopPropagation();
      toast(<span style={{color:"black",fontWeight:"bold"}}>Removing - {title}</span>, {
        position: toast.POSITION.TOP_CENTER,
        autoClose:3000,
        transition: Zoom,
        hideProgressBar:true,
        className:"justify-content-left text-left p-1",
      });
      localStorage.removeItem(id);
      var valuesda = [];
      var keysda = Object.keys(localStorage);
      var ida = keysda.length;
      var jda = keysda.length;
      console.log("i");
      console.log(ida);

      while ( ida-- ) {
          valuesda.push( JSON.parse(localStorage.getItem(keysda[ida]) ));
      }
      if(jda!==0)
      {
        this.setState({storedArticles:valuesda});
      }
      else{
        setTimeout(() => {
          this.articlecountupdate();
          this.setState({storedArticles:valuesda});
          }, 1000);
      }

    }





	render()
	{
        console.log("Article count");
        console.log(this.state.articlecount);
        /*var values = [];
        var keys = Object.keys(localStorage);
        var i = keys.length;
        console.log("i");
        console.log(i);

        while ( i-- ) {
            values.push( JSON.parse(localStorage.getItem(keys[i]) ));
        }
        console.log(values);
        console.log(this);*/
        var j = localStorage.length;
        //var data = this.state.apiResponse;
        var final = this.state.storedArticles.map(function(values){
                        return(<div className="col mb-3"><FavouriteCard dataobj={values} handleArticleCount={this.articlecountupdate} removeArticle={this.deleteArticle}/></div>);
                      },this);
        console.log("final");
        console.log(final);

    /*var Temp=this.handleData();
		var Temp2=React.createElement("div",null,Temp);*/
    const overridecss = css`
                      display: block;
                      margin: 0 auto;
                    `;
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    //const style = { marginTop:"50%" ,marginBottom:"50%" }
    if(this.state.isLoading)
    {
      return(
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
        )
    }
    else
    {
      //console.log("i in else");
      //console.log(i);
      console.log(j);
      if(j<=0)
      {
        console.log("In no article");
        return(
          <div>
            <h3 className="float-center text-center">You have no saved articles</h3>
            {final}
          </div>
        )
      }
      else{
          return(
                <>
                <div className="mx-auto pl-3" style={{width:"98%"}}><h3>Favorites</h3></div>
                <div className="row row-cols-md-4 row-cols-1 mx-auto" style={{maxWidth:"98%"}}>
                  {final}
                  </div>
                </>     
              )	
      }	
    }

	}
}
export default FavouritePage;