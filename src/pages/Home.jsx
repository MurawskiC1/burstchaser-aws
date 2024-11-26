import React from "react"
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Home(props) {
    const [searchQuery, setSearchQuery] = useState(""); // Current search query

    const handleSearch = (event) => {
        setSearchQuery(event.target.value); // Update search query
    };
    return (
        <div>
            <div className="home">
                <div className="home-search">
                    <div className="home-search-buttons">
                        <div className='search-container'>
                            <input
                                className="SearchBar"
                                type="text"
                                value={searchQuery}
                                onChange={handleSearch}
                                placeholder="Search..."
                            />
                        </div>
                        {/* Pass searchQuery as state in Link */}
                        <div className='search-button'>
                            <Link /* to={{
                                pathname: "/data",
                                search: `?search=${searchQuery}`
                            }}*/>
                                <button>Search</button>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className='post-feed'>
                    <div className='post-container'>{/*
                        {comments.slice(0, 10).map((comment, index) => (
                            <Post key={index} user={comment.comment_user_login} burstID={comment.comment_focus_id} comment={comment.comment_body}
                            />

                        ))}
                            */}
                    </div>
                </div>
            </div>
        </div>
    )
};

