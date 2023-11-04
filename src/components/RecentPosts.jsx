import { recentPostsData } from "../data/recentPostsData";
import { RecentPost } from "./RecentPost";
import "./RecentPosts.css";

export default function RecentPosts (){
    return (
        <div className="recent-posts">
            <div className="recent-posts--intro">
                <h2 className="recent-posts--title">Explore my blog, join my coding journey</h2>
                <div className="recent-posts--description">
                    <p>Interested in JavaScript or accessibility? I&rsquo;m always diving into new topics on my blog.</p>
                    <p>It&rsquo;s where I break things down and make them easier to understand.</p> 
                    
                </div>
                
            </div>
            <div className="recent-posts--container">
                <h3 className="recent-posts--heading">RECENT POSTS</h3>
                {recentPostsData.slice(0, 3).map((post) => (    
                    <RecentPost
                        key={post.title}
                        title={post.title}
                        blogPostDescription={post.blogPostDescription}
                        hrefToBlogPost={post.hrefToBlogPost}
                        hrefToBlogPostTitle={post.hrefToBlogPostTitle}
                        blogPostImageAlt={post.blogPostImageAlt}
                        blogPostImageSrc={post.blogPostImageSrc}
                        blogPostImagePhotographer={post.blogPostImagePhotographer}
                        blogPostImagePhotographerSrc={post.blogPostImagePhotographerSrc}
                        blogPostImagePhotographerTitle={post.blogPostImagePhotographerTitle}
                        unsplashSrc={post.unsplashSrc}
                        unsplashSrcTitle={post.unsplashSrcTitle}
                    />
                ))}
            </div>
            <div className="recent-posts-links">
                <a className="blog-link" href="https://www.corinamurg.dev/blog" target="_blank" rel="noopener noreferrer">Explore My Blog</a>
            </div>
        </div>
    )
}