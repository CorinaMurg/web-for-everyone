import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconMapping } from '../utils/iconMapping.js'
import { introCorina } from "../data/introCorinaData.js"
import { projectsData } from "../data/projectsData.js"
import { recentBlogPostsData } from "../data/recentBlogPostsData"
import { SampleProject } from "../components/SampleProject.jsx"
import { RecentBlogPost } from "../components/RecentBlogPost.jsx"

import { Link } from "react-router-dom"
import "./Home.css"

export default function Home() {
    return (
        <div className="home">
            <div className="home--intro">
                <h1>HELLO, I&rsquo;m CORINA!</h1>
                {introCorina.description.map((item, index) => (
                    <div className="home--intro-Corina-line" key={index}>
                        <div className='home--intro--fontawe-container'>
                            <FontAwesomeIcon icon={iconMapping[item.icon]} color={item.color} />
                        </div>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>

            <div className="home--sample-projects">
                <h2 className="visually-hidden">A sample of my projects</h2>
                {projectsData.slice(0, 3).map((project) => (
                    <SampleProject
                        key={project.title}
                        title={project.title}
                        sampleImageAlt={project.sampleImageAlt}
                        sampleImageSrc={project.sampleImageSrc}
                        sampleProjectDescription={project.sampleProjectDescription}
                    />
                ))}

                <Link className="home--sample-projects--link" to="/projects">My Projects</Link>
            </div>

            <div className="recent-posts">
                <h2 className="recent-posts--title">Explore my blog, join my coding journey</h2>
                <p className="recent-posts--description"></p>
                {recentBlogPostsData.slice(0, 3).map((post) => (    
                    <RecentBlogPost
                        key={post.title}
                        title={post.title}
                        blogPostDescription={post.blogPostDescription}
                        hrefToBlogPost={post.hrefToBlogPost}
                        blogPostImageAlt={post.blogPostImageAlt}
                        blogPostImageSrc={post.blogPostImageSrc}
                    />
                ))}
            </div>

        </div>
    )
}


