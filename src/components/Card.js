import { useState } from "react";
import "./Card.css"

function Card(props) {
    const {project} = props;
    const [selectedCard, setSelectedCard] = useState(null);

    function OnProjectCardClicked() {  
        if (!selectedCard) {
            setSelectedCard(project.description);    
        } 
        else {
            setSelectedCard(null);
        }     
    };

    return (
        <div className="card-project" onClick={OnProjectCardClicked}>
            <div className="card-project-header">
                <img className="card-project-image" src={project.image} alt="image"/>
                <h3 className="card-project-name">{project.name}</h3>
            </div>
            <p className="card-project-description">{selectedCard}</p>
        </div>
    )
};
export default Card;