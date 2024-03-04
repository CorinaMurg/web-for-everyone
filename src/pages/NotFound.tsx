
import React from "react"
import useDocTitle from "../hooks/useDocTitle"
import { Link } from "react-router-dom"
import styles from './Home.module.css'
import "../global.css"

export default function NotFound() {
    useDocTitle("Not Found | Web for Everyone");

    return (
        <div className={styles['not-found-container']}>
            <h1>Sorry, the page you were looking for was not found.</h1>
            <Link to="/" className="link-button">Return to Home</Link>
        </div>
    )
}
