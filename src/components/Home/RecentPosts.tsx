import React from "react";
import { recentPostsData } from "../../data/homeData/recentPostsData";
import { PostData } from "../../data/homeData/recentPostsData";
import RecentPost from "./RecentPost";
import "./RecentPosts.css";

export default function RecentPosts (){
    return (
        <div className="recent-posts">
            <div className="recent-posts--intro">
            
                <h2 className="recent-posts--intro--heading">
                    {recentPostsData.intro.heading}
                </h2>
                {recentPostsData.intro.paragraphs.map((paragraph, index) => (
                    <div key={index} className="recent-posts--intro--description">
                        <p className="recent-posts--intro--paragraph">
                            {paragraph}
                        </p>
                    </div>
                ))}
                
            </div>
            <div className="recent-posts--container">
                <h3 className="recent-posts--container--heading blue-heading">RECENT POSTS</h3>
                {recentPostsData.posts.slice(0, 4).map((post: PostData) => (    
                    <RecentPost
                        key={post.title}
                        {...post}
                    />
                ))}
            </div>
            
            <a className="site-link" 
                href="https://dev.to/corinamurg" 
                aria-label="Explore my blog"
                target="_blank" 
                rel="noopener noreferrer"
            >
                Explore My Blog
            </a>
            
        </div>
    )
}