import React, { useState, useEffect } from "react";
import { getBursts, getComments } from "../functions/datamanager";
import Comments from "../components/Comments";
import styles from './Classify.module.css';

const Classify = () => {
    const bursts = getBursts([null], "", "");
    const [randNum, setRandNum] = useState(Math.floor(Math.random() * bursts.length))
    const [newComment, setNewComment] = useState("");
    /*
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    */


    const c = bursts[randNum];

    const comments = getComments(c.BurstID);

    console.log(comments)

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
        <div className={styles.classify_page}>
            <div className={styles.classify_container}>
                <div className={styles.burst_container}>
                    {bursts.length > 0 && (
                        <div className={styles.drag_container} draggable>
                            <img
                                src={`/BurstPhotos/${c.Burst_PNG}`}
                                alt="Burst"
                                draggable={false}
                            />
                        </div>
                    )}
                </div>
                <div className={styles.classify_buttons}>
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

            <div className={styles.comments_container}>
                <Comments comments={comments} />
                <div className={styles.comment_box_container}>
                    <div className={styles.withpost}>
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

        </div>
    );
};

export default Classify;
