import React, { useState, useEffect } from "react";
import { useComments, useTags } from "../functions/Exports";
import Comments from "../components/Comments";
import axios from "axios";
import { v4 as uuidv4 } from "uuid"; // Import uuid for unique ID generation

export default function Preview(props) {
    const { burst } = props;
    const [comments, setComments] = useState([]);
    const tags = useTags(`taggable_id = ${parseInt(burst.BurstID)}`);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        const fetchAllComments = async () => {
            if (burst) {
                try {
                    const res = await axios.get("http://localhost:8800/comments", {
                        params: {
                            filter: `comment_focus_id=${parseInt(burst.BurstID)}`,
                            sort: "",
                        },
                    });
                    setComments(res.data);
                } catch (err) {
                    console.error("Failed to fetch comments:", err);
                }
            }
        };

        fetchAllComments();
    }, [burst]);

    const handleCommentSubmit = async () => {
        if (!newComment.trim()) return; // Prevent submission if the comment is empty

        const newCommentData = {
            comment_id: uuidv4(), // Use uuid for a unique comment ID
            comment_body: newComment,
            comment_focus_id: burst.BurstID,
            comment_user_id: "456", // Replace with actual user ID
            comment_user_login: "user123", // Replace with actual user login
            comment_created_at: new Date().toISOString(),
            votes: 0,
        };

        // Optimistically update the comments state
        setComments((prevComments) => [...prevComments, newCommentData]);
        setNewComment(""); // Clear the textarea

        try {
            const response = await axios.post("http://localhost:8800/comments", newCommentData);
            console.log("Comment posted successfully:", response.data);
        } catch (error) {
            console.error("Error posting comment:", error.response ? error.response.data : error.message);
            // Optionally revert optimistic update if needed
            setComments((prevComments) => prevComments.filter(comment => comment.comment_id !== newCommentData.comment_id));
            alert("Failed to post comment. Please try again."); // Notify user of the error
        }
    };

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
        </div>
    );
}
