import React from "react";
import './ImageForm.css';

const ImageForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div className="">
            <p className="text-bg-success p-3 center">This app will detect faces. Try it! It's fun!</p>
            <form className="center">    
                <div className="center form p-3 border border-primary border-5 rounded-pill">
                    <div className="form-floating url">
                        <input onChange={onInputChange} type="link" className="form-control" id="floatingInput" placeholder="Image URL" />
                        <label htmlFor="floatingInput">{`Image URL`}</label>
                    </div>
                    <button type="button" onClick={onButtonSubmit} className="btn btn-warning">{`CHECK`}</button>
                </div>
            </form>
            <p className="center info">Try this link: https://whyy.org/wp-content/uploads/2020/10/pexels-reafon-gates-1498338.jpg</p>

        </div>
        
    )
}

export default ImageForm;