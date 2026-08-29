import React, { useState, useEffect } from "react";
import styles from './Preview.module.css';


export default function Preview(props) {
    const { burst } = props;


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default behavior of the Enter key
            handleCommentSubmit();
        }
    };

    return (
        <div className={styles.preview_background}>
            <div className={styles.preview}>
                <div className={styles.name_class}>
                    <div className={styles.name}>
                        <h1>{burst.Burst_Name}</h1>
                    </div>
                    <div className={styles.classification}>
                        <p>{burst.Verify}</p>
                    </div>
                </div>
                <div className={styles.image_container}>
                    {burst.Burst_PNG && (
                        <img src={`/BurstPhotos/${burst.Burst_PNG}`} alt="Burst Image" />
                    )}
                </div>


                <div className={styles.preview_info}>

                    <div className={styles.boximg_container}>
                        {burst.Burst_PNG && (() => {
                            const [name, ext] = burst.Burst_PNG.split('.');
                            return <img src={`/BurstBoxes/${name}_boxed.${ext}`} alt="Burst Image" />;
                        })()}
                    </div>
                    <div className={styles.q_contain}>
                        <div className={styles.questions}>
                            <div>Symmetrical Structure: {burst.Follow[0]}</div>
                            <div>Fast Rise Slow Decay: {burst.Follow[1]}</div>
                            <div>Underlying Emission: {burst.Follow[2]}</div>
                            <div>Rapidly Varying Pulses: {burst.Follow[3]}</div>
                        </div>
                        <div className={styles.questions}>
                            <div>Simple: {burst.Simple}</div>
                            <div>Extended: {burst.Extended}</div>
                            <div>Other: {burst.Other}</div>
                            <div>Too Noisy: {burst.Too_Noisy}</div>
                        </div>
                    </div>


                </div>

                <div className={styles.verifications}>
                    <div className={styles.vcont}>
                        <div className={styles.type}>
                            <p className={styles.label}>Proportions:</p> {burst.Prop_Verify || "Not Classified"}
                        </div>
                        <div className={styles.type}>
                            <p className={styles.label}>95% Confidence:</p> {burst["95%_Verify"] || "Not Classified"}
                        </div>
                        <div className={styles.type}>
                            <p className={styles.label}>99% Confidence:</p> {burst["99%_Verify"] || "Not Classified"}
                        </div>
                        <div className={styles.type}>
                            <p className={styles.label}>Machine Learning:</p> {burst.ML_Verify || "Not Classified"}

                        </div>
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
        </div >
    );
}
