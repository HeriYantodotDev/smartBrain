import React from "react";

const SignIn = ({onChangeRoute}) => {
    return (    
            <div className="position-absolute top-50 start-50 translate-middle">
                <div>
                <h1>Face Recognition App</h1>
                <form  style={{width : '500px'}} className="border border-success border-3 rounded-4 p-2">
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
                    <button type="button" onClick={() => onChangeRoute('home')} className="btn btn-primary">Sign in</button>
                    <div className="mb-3 pt-3">
                    <label className="pe-auto" > <a style={{textDecoration: 'none'}} className="pe-auto" href="https://google.com">Register</a></label>
                    </div>
                </form>
                </div>
            </div>
    )
}

export default SignIn;