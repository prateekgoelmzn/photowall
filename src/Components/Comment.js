import React,{Component} from 'react'
import Photo from './photo'
import Comments from './Comments'

class Comment extends Component{
 render(){
     //console.log('-----------');
     //console.log(this.props);
     //console.log('-----------');
     const {match,posts} = this.props;
     const id = Number (match.params.id);
     //console.log(typeof id);
     //console.log(typeof posts[0].id);
     const post = posts.find((post)=>post.id === id)
     const comments = this.props.comments[id] || []
     const index = this.props.posts.findIndex((post)=>post.id===id)
     //console.log(post);
     return <div>
              <Photo post={post} {...this.props} index={index}/>
              <Comments startAddingComment={this.props.startAddingComment} comments={comments} id={id}/>
     </div>
 }
}

export default Comment;