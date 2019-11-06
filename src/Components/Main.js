import React,{Component} from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';
//import {removePost} from '../redux/actions';
import {Link} from 'react-router-dom';
import Comment from './Comment';

class Main extends Component{
/*  componentDidMount(){
    this.props.removePost(1);
  }
*/
/*
    componentDidUpdate(prevProps,prevStates){
        alert('update');
        console.log(prevStates.posts);
        console.log(this.state.posts);
    }
*/
    componentDidMount(){
        this.props.startLoadingPost()
        this.props.startLoadingComments()
        //console.log('hello');
    }
    
    render(){
        //console.log(this.props)
        return(
            <div>
            <h1>
               <Link to="/"><Title name="PhotoWall" /></Link>
            </h1>
             <Route exact path="/" render={()=>(
                <div>
               <PhotoWall {...this.props}/>
                </div>
             )}/>
             <Route path="/AddPhoto" render={( {history} )=>(
               <AddPhoto {...this.props} onHistory={history}/>
            )}/>
             <Route path="/comment/:id" render={(params)=>(
                 <Comment {...this.props} {...params} />
             )}/>
            </div>
        )
    }
}



export default Main;
