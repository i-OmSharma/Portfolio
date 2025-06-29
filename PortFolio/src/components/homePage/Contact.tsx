import Footer from "../ui/Footer";
import Heading from "../ui/Heading";
import { FaGithub, FaLinkedin, FaXTwitter  } from "react-icons/fa6";
import { BsFillThreadsFill } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function Contact({
  headingRef,
}: {
  headingRef: React.RefObject<HTMLHeadingElement>;
}) {

    const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

    useEffect(()=> {
      const interval = setInterval(()=>{
        setTime(new Date().toLocaleTimeString())
      }, 1000)

      return ()=> clearInterval(interval)
    }, []);


  return (
    <section id="contact" aria-label="contact">
      <div>
        <h3 ref={headingRef} aria-label="contact">
          Have an awsome idea? Lest&apos; bring it to life.
        </h3>

        <form
          name="contact"
          action="/contact"
          autoComplete="off"
          className="mt-10 font-grotesk"
          method="POST"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
            <div className="relative z-0">
              <input
                required
                type="text"
                id="name"
                name="name"
                className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
              >
                Your name
              </label>
            </div>
            <div className="relative z-0">
              <input
                required
                type="text"
                name="email"
                id="email"
                className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
              >
                Your email
              </label>
            </div>
            <div className="relative z-0 sm:col-span-2">
              <textarea
                required
                id="message"
                name="message"
                rows={5}
                className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
              >
                Your message
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="button group mt-10 border duration-200 hover:border-accent-400 hover:bg-transparent"
          >
            <span className="relative">
              <span className="absolute bottom-2 h-1 w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
              <span className="group-hover:text-accent-400">Send Message</span>
            </span>
          </button>
        </form>
      </div>

      <div className="mt-10">
        <div>
          <h3>
            <a href="mailto:sharmaom2k4@gmail.com?subject=Hello&body=I wanted to connect with you.">
              <span>sharmaom2k4@gmail.com</span>
            </a>
          </h3>
        </div>
      </div>

      <div id="digital Space">
        <h2>My Digital Space</h2>
        <div>
          <a href="https://github.com/i-OmSharma"> 
            <div>
              <div id="gitHub icon">
                 <FaGithub />
              </div>
              <span>Github</span>
            </div>
          </a>
        </div>

        <div>
          <a href="https://www.linkedin.com/in/om-sharma-020b9a249/"> 
            <div>
              <div id="LinkedIn">
                 <FaLinkedin />
              </div>
              <span>LinkedIn</span>
            </div>
          </a>
        </div>

        <div>
          <a href="https://www.threads.com/@9ooofff"> 
            <div>
              <div id="Threads">
                <BsFillThreadsFill />
              </div>
              <span>Threads</span>
            </div>
          </a>
        </div>

        <div>
          <a href="https://x.com/OmsOpnion"> 
            <div>
              <div id="X">
                <FaXTwitter />
              </div>
              <span>X</span>
            </div>
          </a>
        </div>
      </div>

      <div>
        <h3>Location</h3>
        <div>
          <p>
            Chittaranjan, India 
            <br />
            <br />
            {time}
          </p>
        </div>
      </div>
      <div>
        <Heading title="Contact" />
        <Footer />
      </div>
    </section>
  );
}
