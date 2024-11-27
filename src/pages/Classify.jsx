import React, { useState, useEffect } from "react";

import { getBursts } from "../functions/datamanager";

const Classify = () => {
    const bursts = getBursts([null], "", "");
    const [randNum, setRandNum] = useState(Math.floor(Math.random() * bursts.length))
    /*
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    */


    const c = bursts[randNum];



    const handleDrop = async (event, classification) => {
        event.preventDefault();
        console.log(`Classified as: ${classification}`);
        setRandNum(Math.floor(Math.random() * bursts.length));
    };

    const allowDrop = (event) => {
        event.preventDefault();
    };

    const handleCommentSubmit = async () => {

    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // prevent the default behavior of Enter key
            handleCommentSubmit();
        }
    };

    return (
        <div className="classify-page">
            <div className="classify-container">
                <div className="burst-container">
                    {bursts.length > 0 && (
                        <div className="drag-container" draggable>
                            <img
                                src={`/BurstPhotos/${c.Burst_PNG}`}
                                alt="Burst"
                                draggable={false}
                            />
                        </div>
                    )}
                </div>
                <div className="classify-buttons">
                    {['Simple', 'Extended', 'Other', 'Too_Noisy'].map(classification => (
                        <button
                            key={classification}
                            onDrop={(event) => handleDrop(event, classification)}
                            onDragOver={allowDrop}
                            onClick={(event) => handleDrop(event, classification)}
                        >
                            {classification.replace('_', ' ')}
                        </button>
                    ))}
                </div>
            </div>
            {/*
            <div className="comments-container">
                <Comments comments={comments} />
                <div className="comment-box-container">
                    <div className="withpost">
                        <textarea
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Write a comment..."
                        ></textarea>
                        <button onClick={handleCommentSubmit}>Post</button>
                    </div>
                </div>
            </div>
            */}
        </div>
    );
};

export default Classify;
