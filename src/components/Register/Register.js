import React from "react";

const Register = ({onChangeRoute}) => {
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <div>
                <h1 className="center">Registration Form</h1>
                <form  style={{width : '500px'}} className="border border-success border-3 rounded-4 p-2">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Email address</label>
                        <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Your Name" />
                        <div id="textHelp" className="form-text">Please enter your name.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email address" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Your password" />
                    </div>
                    {/* <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="button" onClick={() => onChangeRoute('signin')} className="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register