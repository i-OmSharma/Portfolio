export default function Footer() {
    return (
        <div>
            <button onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }}>Back to Top</button>
        </div>
    )
}