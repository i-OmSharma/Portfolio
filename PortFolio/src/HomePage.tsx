import About from "./components/homePage/About";
import Contact from "./components/homePage/Contact";
import Hero from "./components/homePage/Hero";
import Service from "./components/homePage/Service";
import Role from "./components/homePage/Role";
import Footer from "./components/ui/Footer";
import Projects from "./components/homePage/Projects";
export default function HomePage() {
  return (
    <div>
      <Hero />
      <Role />
      <Service />
      <About /> 
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}
