import { useEffect, useState } from "react";
import logo from "../assets/logo.png"
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return(

        <div className={`nav ${scrolled ? "scrolling" : ""} ${open ? "active" : ""}`}>


            <div className="logo">
                <img className="logoimg" src={logo} alt="logo" />
                <h1 className="logoname">NAJM ALMUSTAQBIL</h1>
            </div>

            <button className="menu-btn " onClick={() => setOpen(!open)}>
                {open ? <X className="menu"/> : <Menu className="menu"/>}
            </button>

            <div className={`navlinks ${open ? "active" : ""}`}>
                <div className="link">SERVICES</div>
                <div className="link">ABOUT</div>
                <div className="link">PROCESS</div>
                <div className="link">INSIGHTS</div>
                <div className="link">CONTACT</div>
                <button className="navbtn">GET STARTED</button>
            </div>
        </div>
    )
}