import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
    return (
        
        <div className="d-flex justify-content-center">
            <div className="position-absolute">
                <img id="imageData" className="size" alt="" src={imageUrl}></img>
                <div className="faceBox" style={{top: box.top, bottom : box.bottom, left: box.left, right: box.right}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition