import React from "react";
import { recentPostsData } from "../../data/homeData/recentPostsData";
import { PostData } from "../../data/homeData/recentPostsData";
import RecentPost from "./RecentPost";
import "./RecentPosts.css";

export default function RecentPosts (){
    return (
        <div className="recent-posts">
            <div className="recent-posts--intro">
                <h2 className="page-heading update-padding">
                    {recentPostsData.intro.heading}
                </h2>
                <div className="subheading-div update-margin" >
                    {recentPostsData.intro.paragraphs.map((paragraph, index) => (
                        <p key={index}>
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
            <div className="recent-posts--container">
                <h3 className="blue-heading update-padding">RECENT POSTS</h3>
                {recentPostsData.posts.slice(0, 4).map((post: PostData) => (    
                    <RecentPost
                        key={post.title}
                        {...post}
                    />
                ))}
            </div>
            
            <a className="site-link update-margin" 
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