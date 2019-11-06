import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesheet.css';
import {BrowserRouter} from 'react-router-dom'; // used for routing
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './redux/reducer';
import {Provider} from 'react-redux';
import App from './Components/App';
import thunk from 'redux-thunk';
import {database} from './database/config'
//const tasks = ['take out the trash','shover the drive way','walk the dog'];

/* const element = 
<div>
    <h1>Task List</h1>
    <ol>
    {tasks.map((task,index)=><li key = {index} >{task}</li>)}
    </ol>
</div>
*/
const store = createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById('root'));


