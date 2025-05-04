import Layout from "../layout/Layout";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Education from "../sections/Education";
import Projects from "../sections/Projects";
import TechStack from "../sections/TechStack";

const Home = () => {
    return (
        <Layout>
            <About />
            <Contact />
            <Education />
            <Projects />
            <TechStack />
        </Layout>

    );
}

export default Home;