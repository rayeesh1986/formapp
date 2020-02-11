import React, {Component} from 'react';
import CounterProp from './counterp';
import Navbar from './navbar/navbar'

class Main extends Component{
    state = { 
        counters : [
            {id:1, value:4},
            {id:2, value:4},
            {id:3, value:0},
            {id:4, value:1},
            {id:5, value:0},
            {id:6, value:2},
        ]
    }

    constructor(){
        super();
        console.log("Main Constructor")
    }



    handleIncrement = (c) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(c);
        counters[index] = {...c};
        counters[index].value++;
        this.setState({counters});
    }

    handleDecrement = (c) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(c);
        counters[index] = {...c};
        counters[index].value--;
        this.setState({counters});
    }

    handleDelete = (counterId) =>{
        const counters = this.state.counters.filter(counter  => counter.id !== counterId.id);
        this.setState({counters});
    }

    onReset = () => {
        const counters = this.state.counters.map(c => {
            c.value= 0;
            return c
        })

        this.setState({counters});

    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    static getDerivedStateFromProps(props, state){
        /* console.log("componentDidMount" + state.counters[0].id);*/
        return null; 
    }
    
    render(){
        console.log("Main Render")
        const len = this.state.counters.length;
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Navbar LengthData={len}>
                                {/* <h4>Counter Data {len}</h4> */}
                            </Navbar>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <div className="col-12 mb-2 mt-2"><button type="button" onClick={()=>this.onReset()} className="btn btn-info">Reset</button></div>
                        {this.state.counters.map(counter =>
                            <CounterProp key={counter.id} counter={counter} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} />    
                        )}
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default Main;
