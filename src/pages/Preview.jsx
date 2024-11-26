import React, { useState, useEffect } from "react";


export default function Preview(props) {
    const { burst } = props;


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default behavior of the Enter key
            handleCommentSubmit();
        }
    };

    return (
        <div className="preview">
            <div className="name-class">
                <div className="name">
                    <h1>{burst.Burst_Name}</h1>
                </div>
                <div className="classification">
                    <p>{burst.Verify}</p>
                </div>
            </div>
            <div className="image-container">
                {burst.Burst_PNG && (
                    <img src={`/BurstPhotos/${burst.Burst_PNG}`} alt="Burst Image" />
                )}
            </div>

            <div className="preview-info">
                <div className="questions">
                    <div>Simple: {burst.Simple}</div>
                    <div>Extended: {burst.Extended}</div>
                    <div>Other: {burst.Other}</div>
                    <div>Too Noisy: {burst.Too_Noisy}</div>
                </div>
                <div className="questions">
                    <div>Symmetrical Structure: {burst.Symmetrical}</div>
                    <div>Fast Rise Slow Decay: {burst.FastRiseSlowDecay}</div>
                    <div>Underlying Emission: {burst.UnderlyingEmission}</div>
                    <div>Rapidly Varying Pulses: {burst.RapidlyVarying}</div>
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
            <div className="tags">
                {tags.map((t, index) => (
                    <div className="tag" key={index}>
                        {t.name}
                    </div>
                ))}
            </div>
            */}
        </div>
    );
}
