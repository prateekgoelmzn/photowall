import Main from './Main'
import{connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions';
import {withRouter} from 'react-router';

function mapStateToProps(state){
   return {
      //state contains name posts and comments as name define in reducers
       posts:state.posts,
       comments: state.comments
   }
}

function mapDispatchToProps(dispatch){
   return bindActionCreators(actions,dispatch)      //always use 'return'
 }

const App = withRouter(connect(mapStateToProps,mapDispatchToProps)(Main))

export default App;
