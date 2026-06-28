import image from "../assets/AboutPageImage.jpg"

export default function About() {
    return(
        <main className="about">
            
            <img src={image} alt="aboutimage" className="aboutimg" />
            <section className="aboutContent">
                <h3 className="heroSmallText colored">ABOUT US</h3>
                <section className="heroMainText">
                    <div className="textservicebig">Built on Regional Authority and Legal Precision</div>
                    <h2 className="heroSubText textservice">
                        Najm Almustaqbil Corporate Service Provider L.L.C is a UAE Mainland limited 
                        liability company providing corporate and business support services to 
                        entrepreneurs and small to medium-sized businesses. 
                        <br />
                        <br />
                        The company assists clients with business setup, licensing, and ongoing 
                        administrative requirements, helping them establish and operate their businesses 
                        in the UAE. 
                        <br />
                        <br />
                        As an owner-managed business, the company focuses on delivering practical, 
                        reliable, and compliant services tailored to client needs.
                    </h2>
                </section>
            </section>
        </main>
    )
}