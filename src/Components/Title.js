import React from 'react';

function Title(props){
   return <h1>{props.name}</h1>;
}
/*
class Title extends Component{
    render(){
        return(
            <h1>{this.props.name}</h1>
        )
    }
}
*/
export default Title;