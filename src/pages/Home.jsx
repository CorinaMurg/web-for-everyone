
import { Link } from "react-router-dom"
import "./Home.css"

export default function Home() {
    return (
        <div className="home-container">
            <h1>Hello, I'm Corina!</h1>
            
            <p>A former high school math teacher, now a self-taught developer focused on creating accessible web products.</p>
            <p>I thrive on collaboration and appreciate direct and honest feedback.</p>
            <p>Always curious + learning.</p>

            <Link to="blog">Checkout my blog posts</Link>
        </div>
    )
};