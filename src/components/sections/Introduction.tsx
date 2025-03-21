import EducationInfo from "./EducationInfo";
import ContactInfo from "./ContactInfo";

const Introduction = () => {
    return (
        <div id="about" className='container'>
            <div className="flex-row-container">
                <div className="headshot-container">
                    <img className='headshot' src="/portfolio/headshot/headshot.jpg" alt="headshot" />
                </div>

                <div className="flex-col-container">
                    <div className="info-container">
                        <h1>👋 Hello, my name is <span className="name-text-shadow">Timmy Tram</span></h1>
                        <p>I am an aspiring Full Stack Developer and enjoy building web applications from top to bottom.</p>
                        <p>More specifically, I enjoy UI/UX Design and designing RESTful APIs and making database schemas</p>
                    </div>
                    <EducationInfo />
                    <ContactInfo />
                </div>
            </div>
        </div>
    );
}

export default Introduction;