import { recentBlogPostsData } from "../data/recentBlogPostsData";
import { RecentPost } from "./RecentPost";
import "./RecentPostsContainer.css";

export function RecentPostsContainer (){
    return (
        <div className="recent-posts">
            <div>
                <h2 className="recent-posts--title">Explore my blog, join my coding journey</h2>
                <div className="recent-posts--description">
                    <p>I&rsquo;m always diving into new topics on my blog.</p>
                    <p>It&rsquo;s where I break things down and make them easier to understand.</p> 
                    <p>Interested in JavaScript or accessibility? </p>
                </div>
            </div>
            <div className="recent-posts-links">
                <a className="blog-link" href="https://www.corinamurg.dev/blog" target="_blank" rel="noopener noreferrer">Explore My Blog</a>
            </div>
            
            {recentBlogPostsData.slice(0, 3).map((post) => (    
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
        
    )

}