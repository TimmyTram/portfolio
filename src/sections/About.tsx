import Headshot from "../components/Headshot";

const About = () => {
    return (
        <div className="w-full flex flex-col items-center mt-4 bg-royal-blue-solid p-4 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold">About Me</h1>
            <div className="w-full flex flex-col md:flex-row items-center mt-4">
                <div className="flex justify-center w-full md:w-1/3">
                    <Headshot src="/headshot/headshot.jpg" alt="Headshot" width={64} height={64} />
                </div>
                <div className="flex justify-center items-center text-center w-full md:w-2/3 text-lg bg-black py-10">
                    👋 Hello, my name is Timmy Tram.
                    <br />
                    An aspiring full-stack developer from San Francisco, California
                </div>

            </div>
        </div>
    );
}

export default About;