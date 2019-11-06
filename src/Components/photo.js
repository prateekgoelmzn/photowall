import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Photo(props){
    const post = props.post;
    return <figure className="figure">
              <Link to={`/comment/${post.id}`}><img className="photo" src={post.imagelink} alt={post.description} /></Link>
              <figcaption><p>{post.description}</p></figcaption>
              <div className="button-container">
                <button className="remove-button" onClick={()=>{
                  props.startRemovingPosts(props.index,post.id)
                  props.history.push('/')
                }}>Remove</button>
                <Link className="remove-button" to={`/comment/${post.id}`}>
                  <div className="comment-count"> 
                    {props.comments[post.id]?props.comments[post.id].length:0}
                  </div>
                </Link>
              </div>
           </figure>
}

Photo.propTypes = {
  post: PropTypes.object.isRequired
}

/*
class Photo extends Component{
    render(){
        const post = this.props.post;
        return <figure className="figure">
                  <img className="photo" src={post.imagelink} alt={post.description} />
                  <figcaption><p>{post.description}</p></figcaption>
                  <div className="button-container">
                    <button className="remove-button">Remove</button>
                  </div>
               </figure>
    }
}
*/
export default Photo;
