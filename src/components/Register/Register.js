import React from "react";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registerName : '',
            registerEmail : '',
            registerPass : ''
        }
    }

    onNameChange = (event) => {
        this.setState({registerName : event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({registerEmail : event.target.value})
    }

    onPassChange = (event) => {
        this.setState({registerPass : event.target.value})
    }

    onSubmitRegister = (event) => {
        fetch(`${this.props.backEnd}/register`, {
            method : 'post',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                name : this.state.registerName,
                email : this.state.registerEmail,
                password : this.state.registerPass
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.errorCode) {
                    alert(user.errorMessage);
                    this.setState({registerName : "", registerEmail: "", registerPass : ""})
                    event.target.parentElement[0].value = "";
                    event.target.parentElement[1].value = "";
                    event.target.parentElement[2].value = "";
                } else {
                    alert('The registration is success')
                    this.props.loadUser(user);
                    this.props.onChangeRoute('home')
                }
            })
            .catch(err => alert('Sorry 🙏🏻! The server is down'))
    }



    render() {
        return (
            <div className="center">
                <form className="oke">
                    <h1 className="center">Registration Form</h1>
                    <div className="border border-success border-3 rounded-4 p-2">
                        <div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input onChange={this.onNameChange} type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Your Name" />
                                <div id="textHelp" className="form-text">Please enter your name.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input onChange={this.onEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email address" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input onChange={this.onPassChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Your password" />
                            </div>
                            {/* <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div> */}
                            <button  type="button" onClick={this.onSubmitRegister} className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

// const Register = ({onChangeRoute}) => {

// }

export default Register