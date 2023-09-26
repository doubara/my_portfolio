import Hero from "../Component/Hero";
import Projects from "../Component/Projects";
import About from "../Component/About";
import Footer from '../Component/Footer';

const Home = (props) =>{
    return (
        <>
            <Hero></Hero>
            <Projects></Projects>
            <About></About>
            <Footer></Footer>
        </>
    )
};

export default Home;