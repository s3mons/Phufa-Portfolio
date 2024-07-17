import "./Skill.css"

function Skill({skill}) {
    // const {skill} = props;
    return (
        <div className="skill-container">
            <div className="skill-block">{skill}</div>
        </div>
        

    );
};

export default Skill;