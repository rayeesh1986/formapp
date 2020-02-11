import React, {Component} from 'react';
import Input from './common/input';

class Loginform extends Component {

    state = {
        account:{
            username:'',
            passwordData:''
        },
        errors:{

        }
    }

    username = React.createRef();
    passwordData = React.createRef();

    /* componentDidMount(){
        this.username.current.focus();
    } */

    validate = () => {
        return "username is required";
    }

    handleSubmit = e =>{
        e.preventDefault();
        const username = e.currentTarget.value;
        const errors = this.validate();
        this.setState({errors});

        console.log("handle submit", username);
    }

    handleChange = e =>{
        console.log(e);
        const account = {...this.state.account};
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({account})
        //console.log(account.username);
        //account.username
    }
    render(){
    return ( 
        <React.Fragment>
            <div className="row align-items-center justify-content-center p-5">
                <div className="col-6">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            {/* <label htmlFor="username">Username</label>
                            <input
                            value={this.state.account.username}
                            onChange={this.handleChange}
                            autoFocus
                            ref={this.username}
                            type="text" 
                            className="form-control"
                            id="username"
                            name="username"
                            
                            /> */}
                            <Input name="username"  value={this.state.account.username} onChangedata={this.handleChange} label={"Username"} />
                        
                        </div>
                        <div className="form-group">
                          {/*   <label htmlFor="passwordData">Password</label>
                            <input 
                                type="password" 
                                name="passwordData" 
                                autoComplete="off" 
                                className="form-control" 
                                id="passwordData"
                                onChange={this.handleChange}
                            /> */}
                            <Input name="passwordData"  value={this.state.account.passwordData} onChangedata={this.handleChange} label={"Password"} />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
     );
    }
}
 
export default Loginform;