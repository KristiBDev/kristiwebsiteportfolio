import "./hero.css";

const Hero = () => {
    return (
        <div className ="hero">
            <div className="hSection left">
                {/* TITLE */}
                <h1 className="hTitle">
                    Hello There, 
                    <br />
                    <span>I'm Kristi</span>
                </h1>
                {/* AWARDS */}
                <div className="awards">
                    <h2>Recent CS Graduate</h2>
                    <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    <div className="awardsList">
                        <img src="/award1.png" alt="" />
                        <img src="/award2.png" alt="" />
                        <img src="/award3.png" alt="" />
                    </div>
                </div>
            </div>
            {/*SCROLL SVG */}
            <a href="services">
            <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <path
                d="M12 5V8"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                />
            </svg>
            </a>
            <div className="hSection right">
                {/*FOLLOW*/}
                <div className="follow">
                    <a href="/">
                        <img src="/instagram.png" alt="" />
                    </a>
                    <a href="/">
                        <img src="/facebook.png" alt="" />
                    </a>
                    <a href="/">
                        <img src="/youtube.png" alt="" />
                    </a>

                </div>
                {/*BUBBLE TBA<Speech/> */}
                
                {/*certificate*/}
                <div className="certificate">
                    <img src="/certificate.png" alt="" />
                    LMA CERTIFIED
                    <br />
                    PROFESSIONAL
                </div>
                
            </div>
        </div>
    );
};

export default Hero;