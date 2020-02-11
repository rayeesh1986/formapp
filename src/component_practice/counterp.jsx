import React, {Component} from 'react';
import Counter from './inc_dec';

class CounterProp extends Component {
    

   
    render() {
        //console.log("CounterProp Render")
        return ( 
            <React.Fragment>
                <Counter counter={this.props.counter} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} onDelete={this.props.onDelete} />    
            </React.Fragment>
         );
    }
}
 
export default CounterProp;