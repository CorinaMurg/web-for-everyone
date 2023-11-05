import { a11yData } from "../data/a11yData"
export default function Accessibility() {
  
    return (
        <div className="accessibility">
            <h1>I believe in a web where everyone has a place</h1>
            <div>
                <img></img>
            </div>
            {a11yData.description.map((line, index) => (
                <div className="a11y-intro" key={index}>
                    <p>{line}</p>
                </div>
            ))}
        </div>
    )
}
