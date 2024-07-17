import HomeHeader from "../components/HomeHeader";
import Card from "../components/Card";
import Profile from "../components/Profile";
import projects from "../data/projects";
import skills from "../data/skills"
import "./HomePage.css"
import Skill from "../components/Skill";

function HomePage() {
    const projectElement = projects.map((project, index) => {
        return <Card key={index} project={project}/>;
    });

    const skillElement = skills.map((skill, index) => {
        return <Skill key={index} skill={skill}/>;
    });

    return (
        <div className="homepage">
            <HomeHeader/>
            <div className="content-wrapper">
                <div className="app-grid">
                    <div className="home-profile">
                        <Profile/>
                        {skillElement}
                    </div>
                    <div className="home-content">
                        <h2>Projects</h2>
                        {projectElement}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HomePage;