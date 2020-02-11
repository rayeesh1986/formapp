import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';


class Counter extends Component{

    
    handleCount = () => {
        if(this.props.counter.value  === 0){
            return "Zero";
        }else{
            return this.props.counter.value;    
        }
    }

    handleDisable(){
        if(this.props.counter.value  === 0){
            return "btn btn-secondary mr-2 disableEvent";
        }else{
            return "btn btn-secondary mr-2";
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        /* console.log(this.props.counter.value);
        console.log(prevProps.counter.value) */

       // console.log("componentDidUpdate", prevProps);
    }

    componentWillUnmount(newProps, newState){
        console.log(newState)
        console.log("componentWillUnmount props");
        console.log("componentWillUnmount state");
    }

    

    render(){
        //console.log("Counter Render")
        let classes = "badge badge-pill p-2 mr-2 ";
        classes += (this.props.counter.value === 0) ? "badge-warning":"badge-primary";
        return(
            <React.Fragment>
                <div className="col-12 mb-2 mt-2">
                    <div className="row">
                        <div className="col-1 text-center"><span className={classes}>{this.handleCount()}</span></div>
                        <button type="button" onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-dark mr-2">Increment</button>
                        <button type="button" onClick={()=>this.props.onDecrement(this.props.counter)} className={this.handleDisable()}>Decrement</button>
                        <button type="button" onClick={()=>this.props.onDelete(this.props.counter)} className="btn btn-danger mr-2">Delete</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
    

}

export default Counter;