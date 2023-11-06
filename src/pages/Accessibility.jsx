import { a11yData } from "../data/a11yData"
import './Accessibility.css';

export default function Accessibility() {  
    return (
        <div className="accessibility">
            <h1>{a11yData.title}</h1>
            <div className="accessibility--image-div">
                <img alt={a11yData.imageAlt} src={a11yData.imageSrc}/>
            </div>
            {a11yData.description.map((line, index) => (
                <div className="a11y-intro" key={index}>
                    <p>{line}</p>
                </div>
            ))}
        </div>
    )
}
