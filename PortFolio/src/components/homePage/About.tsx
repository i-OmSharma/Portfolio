import profileImage from "../../assets/Om_About.jpg"
import Heading from "../ui/Heading"


export default function About({aboutSection}: {aboutSection: React.RefObject<HTMLDivElement>}) {

    return(
        <section ref={aboutSection} aria-label="about me" className="min-h-screen bg-[#13be22]"> 
        <Heading title="About Me" />
            <div className="text-heading-1 font-medium text-secondary-400 leading-[1.25em] md:leading-[1.08em]">
                <div>
                    <img src={profileImage} alt="about me" />
                </div>
                <div>
                    <div>
                        <h3 >
                            A brief intro, who am I?
                        </h3>
                        <p>
                            I'm Om, a software engineer with a passion for building web applications. I'm a quick learner and I'm always looking to improve my skills.
                            <br />
                            <br />
                            I'm a quick learner and I'm always looking to improve my skills.
                        </p>
                        <p>
                            I'm a quick learner and I'm always looking to improve my skills.
                        </p>
                        
                    </div>
                </div>

                <div id="quote">
                    <p>
                        No one is ever truly ready. We don't get to choose our time; whenever we start, it becomes perfect for us.
                    </p>

                </div>
           </div>
        </section>
        
    )
}