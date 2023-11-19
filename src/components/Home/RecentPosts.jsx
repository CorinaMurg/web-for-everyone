import { recentPostsData } from "../../data/homeData/recentPostsData";
import { RecentPost } from "./RecentPost";
import "./RecentPosts.css";

export default function RecentPosts (){
    return (
        <div className="recent-posts">
            <div className="recent-posts--intro">
                <div>
                    <h2 className="recent-posts--intro--heading">Explore my blog, join my coding journey</h2>
                    <div className="recent-posts--intro--description">
                        <p>Interested in JavaScript or accessibility? I&rsquo;m always diving into new topics on my blog.</p>
                        <p>It&rsquo;s where I break things down and make them easier to understand.</p> 
                    </div>
                </div>
            </div>
            <div className="recent-posts--container">
                <h3 className="recent-posts--container--heading blue-heading">RECENT POSTS</h3>
                {recentPostsData.slice(0, 4).map((post) => (    
                    <RecentPost
                        key={post.title}
                        title={post.title}
                        description={post.description}
                        href={post.href}
                        hrefAriaLabel={post.hrefAriaLabel}
                        imageAlt={post.imageAlt}
                        imageSrc={post.imageSrc}
                        photographer={post.photographer}
                        photographerSrc={post.photographerSrc}
                        photographerSrcAriaLabel={post.photographerSrcAriaLabel}
                    />
                ))}
            </div>
            <div className="recent-posts--link">
                <a className="site-link" 
                    href="https://dev.to/corinamurg" 
                    aria-label="Explore my blog"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Explore My Blog
                </a>
            </div>
        </div>
    )
}