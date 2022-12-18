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
        fetch(`${this.props.backEnd}/signin`, {
            method : 'post',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                email : this.state.signInEmail,
                password : this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(data => {    
                if (data.hasOwnProperty('id') ) {
                    this.props.loadUser(data)
                    this.props.onChangeRoute('home')
                    this.setState({signInEmail : "", signInPassword: ""})
                } else {
                    alert(data.errorMessage);
                        this.setState({signInEmail : "", signInPassword: ""})
                        event.target.parentElement.children[0].children[1].value = ''
                        event.target.parentElement.children[1].children[1].value = ''
                    return
                }
            })
            .catch(err => {
                alert('Sorry 🙏🏻! The server is down')
            })
        
    }

    render() {
        return (
            <div className="center" >
                {/* position-absolute top-50 start-50 translate-middle */}
                <form className="oke">
                    <h1 className="center">Face Recognition App</h1>
                    <div className="border border-success border-3 rounded-4 p-2" >
                        <div >
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
                            {/* <div className=""> */}
                            {/* <label className="pe-auto" > <p onClick={() => onChangeRoute('register')} className="pe-auto pointer" >Register</p></label> */}
                            {/* </div> */}
                            {/* mb-3 pt-3 */}
                            <p className="fs-6">Try login with this: <span className="text-danger">test@gmail.com</span> | <span className="text-danger">pass: 'abc'</span> </p>
                        </div>
                    </div>
                </form>
                {/* <p onClick={() => onChangeRoute('register')} className="pe-auto pointer" >Register</p> */}
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