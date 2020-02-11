import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


class CounterBox extends Component{

    state = {
        count :0
    }

    /* by the constructor */
    /* constructor(){
        super();
        this.increament = this.increament.bind(this);
    }

    increament(){
        const { count } = this.state; 
        this.setState({count: count+1});
    } */

    /* by the arrow function */
    increament(inc){
        console.log(inc)
        //const { count } = this.state; 
        this.setState({count: inc+1});
    }

    formatCount(){
        const { count } = this.state;
        //ternary operator called
        return (count === 0) ? "zero": count;
       /*  if(count !== 0){
            return "Count value is greater then 0";
        }else{
            return "Count value is lower then 0 or equal"; 
        } */
    }

    classAdditon(){
        const { count } = this.state;
        //ternary operator called
        return (count === 0) ? "btn-primary  m-0 pb-2": "btn-danger";
    }

    styles = {
        fontSize:20,
        color:'#ccc'
    }

    render(){
        let classes = "m-0 pb-2 ";
        classes += (this.state.count === 0)? "btn-danger":"btn-primary" 

        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                           {/*  <h1 style={this.styles} className={this.classAdditon()}>{this.formatCount()}</h1> */}
                            {/* <h1 style={{fontSize:40, color:'#f1f1f1'}} className={this.classAdditon()}>{this.formatCount()}</h1> */}
                            {/* <h1 className={classes}>{this.formatCount()}</h1> */}


                            <h1 className={classes}>{this.formatCount()}</h1>
                            {/* by the constructior function
                             <button onClick={this.increament}  className="btn btn-secondary">Button</button> */}
                            <button onClick={()=>this.increament(this.state.count)}  className="btn btn-secondary">Button</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default CounterBox;