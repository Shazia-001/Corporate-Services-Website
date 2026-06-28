import { ArrowRight, ChevronDown } from "lucide-react";



export default function Hero() {
    return(
      
      <div className="hero">
        
        
        <div className="gradient-right"></div>
        <div className="gradient-top"></div>

        <div className="content">
          
          <div className="contentbox">
            <h3 className="heroSmallText colored">UAE CORPORATE SERVICES</h3>

            <h1 className="heroMainText">
              Your Business, 
              <span className="colored"> Established </span> 
              in the UAE.
            </h1>

            <h2 className="heroSubText">
              Najm Almustaqbil Corporate Service Provider delivers end-to-end company formation, 
              regulatory compliance, and residency solutions across every UAE 
              jurisdiction — with strong regional expertise in the UAE.
            </h2>

            <div className="quicklinks">
              <button className="setup btn">BEGIN YOUR SETUP <ArrowRight/> </button>
              <button className="servicesbtn btn">OUR SERVICES <ChevronDown/> </button>
            </div>
          
          </div>

        </div>

      </div>
    )
}