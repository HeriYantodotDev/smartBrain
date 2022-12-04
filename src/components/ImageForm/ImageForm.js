import React from "react";
import './ImageForm.css';

const ImageForm = () => {
    return (
        <div className="mxauto">
            <p className="text-bg-success p-3">This face App will detect faces in your pictures. It's fun!</p>
            <form className="center">    
                <div className="center form p-3 border border-primary border-5 rounded-pill">
                    <div className="form-floating url">
                        <input type="link" className="form-control" id="floatingInput" placeholder="Image URL" />
                        <label htmlFor="floatingInput">{`Image URL`}</label>
                    </div>
                    <button type="submit" className="btn btn-primary">{`CHECK`}</button>
                </div>
               
            </form>
        </div>
        
    )
}

export default ImageForm;