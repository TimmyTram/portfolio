import PlatformIcon from "../Icons/PlatformIcon/PlatformIcon";
import Button from "../UI/Button";

const ContactInfo = () => {
    return (
        <div className="info-container">
            <div className="flex-row-container">
                <PlatformIcon filename="github" link="https://github.com/TimmyTram" size="50px"/>
                <PlatformIcon filename="linkedin" link="https://www.linkedin.com/in/timmytram/" size="50px" />
                <Button href="/portfolio/pdfs/Timmy-Tram-Resume.pdf">
                    View Resume
                </Button>
            </div>
        </div>
    );
};

export default ContactInfo;