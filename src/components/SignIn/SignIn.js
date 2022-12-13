import React from "react";

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            signInEmail : '',
            signInPassword : ''
        }
        
    }


    onEmailChange = (event) => {
        this.setState({signInEmail : event.target.value})
    }

    onPassChange = (event) => {
        this.setState({signInPassword : event.target.value})
    }

    onSubmitSignIn = (event) => {
        fetch('http://localhost:3000/signin', {
            method : 'post',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                email : this.state.signInEmail,
                password : this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.id) {
                    this.props.loadUser(data)
                    this.props.onChangeRoute('home')
                    this.setState({signInEmail : "", signInPassword: ""})
                } else {
                    alert('Email or PassWord Wrong - Try again');
                        this.setState({signInEmail : "", signInPassword: ""})
                        event.target.parentElement[0].value = "";
                        event.target.parentElement[1].value = "";
                }
            })
        
    }

    render() {
        const {onChangeRoute} = this.props; 
        return (
            <div className="position-absolute top-50 start-50 translate-middle">
                <div>
                <h1 className="center">Face Recognition App</h1>
                <form  style={{width : '500px'}} className="border border-success border-3 rounded-4 p-2">
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
                    <button type="button" onClick={this.onSubmitSignIn} className="btn btn-primary">Sign in</button>
                    <div className="mb-3 pt-3">
                    <label className="pe-auto" > <p onClick={() => onChangeRoute('register')} className="pe-auto pointer" >Register</p></label>
                    </div>
                </form>
                </div>
            </div>
    )
    }

}

// const SignIn = ({onChangeRoute}) => {
//     return (    
//             <div className="position-absolute top-50 start-50 translate-middle">
//                 <div>
//                 <h1 className="center">Face Recognition App</h1>
//                 <form  style={{width : '500px'}} className="border border-success border-3 rounded-4 p-2">
//                     <div className="mb-3">
//                         <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//                         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email address" />
//                         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//                         <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Your password" />
//                     </div>
//                     {/* <div className="mb-3 form-check">
//                         <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//                         <label className="form-check-label" for="exampleCheck1">Check me out</label>
//                     </div> */}
//                     <button type="button" onClick={() => onChangeRoute('home')} className="btn btn-primary">Sign in</button>
//                     <div className="mb-3 pt-3">
//                     <label className="pe-auto" > <p onClick={() => onChangeRoute('register')} className="pe-auto pointer" >Register</p></label>
//                     </div>
//                 </form>
//                 </div>
//             </div>
//     )
// }

export default SignIn;