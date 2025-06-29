

export default function Navbar() {
    return (
        <header>
            <a href="#hero" aria-label="logo">logo here</a>
            <nav className="space-x-7 font-grotesk text-body-3"> 
                <a href="#about" >
                    <span>About</span>
                </a>
                <a href="#services" >
                    <span>Service</span>
                </a>
                <a href="#projects" >
                    <span>Projects</span>
                </a>
                <a href="#contact" >
                    <span>Contact</span>
                </a>
            </nav>
        </header>
    )
}

