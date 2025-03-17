import './styles/ProjectSection.css';
import ExperienceCard from '../cards/ExperienceCard';

const Experiences = () => {
    return (
        <div id="experiences" className="container">
            <h2>Volunteering & Experiences:</h2>
            <div className='card-container'>
                <ExperienceCard
                    title="SF Hacks 2021"
                    image="/portfolio/CardImages/sfhacks.png"
                    description="
                    I participated in SF Hacks 2021, a hackathon hosted by San Francisco State University.
                    I worked on a team of 2 to create a web scraper and web application that display furniture data from Ikea.
                    The web application would display how the furniture would fit in a room given a user's room dimensons. 
                    "
                    timeline="2021"
                    cover={false}
                />
                <ExperienceCard
                    title="Balboa High School Coding Club"
                    image="/portfolio/CardImages/codingclub.jpg"
                    description="
                    I was a founding member of the Balboa High School Coding Club.
                    I helped teach students how to code in Python and Java during lunch to create Games or simple automation scripts.
                    Additionally, I helped students / members with their coding projects for AP Computer Science A or Principles and homework.
                    "
                    timeline="2018-2020"
                    cover={true}
                />

                <ExperienceCard
                    title="PULSE Garden Committee"
                    image="/portfolio/CardImages/garden.png"
                    description="
                    I was part of the PULSE Garden Committee, where I helped maintain the garden.
                    Additionally, I helped with the woodwork and the construction of benches.
                    Performed logistics and planning for the garden.
                    "
                    timeline="2018-2019"
                    cover={true}
                />

                <ExperienceCard
                    title="Balboa High School Army JROTC"
                    image="/portfolio/CardImages/jrotc.jpg"
                    description="
                    I was part of the Balboa High School Army JROTC program.
                    I was a Squad Leader and Staff Sergenant.
                    I was responsible for the training and discipline of my squad.
                    Additionally, I was responsible for student uniform logistics and other various items.
                    During Fall Competition, I was responsible for leading audience members to their seats and was the scorerunner.
                    "
                    timeline="2016-2018"
                    cover={true}
                />

                <ExperienceCard
                    title="San Francisco Marin Food Bank"
                    image="/portfolio/CardImages/foodbank.jpg"
                    description="
                    I volunteered at the San Francisco Marin Food Bank over the weekends during Middle School and High School.
                    Tasks included sorting food, packing food, and distributing food.
                    "
                    timeline="2015-2016 | 2018-2019"
                    cover={true}
                />
            </div>
        </div>
    );
};


export default Experiences;