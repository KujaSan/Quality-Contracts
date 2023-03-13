import useIntersectionObserver from "../../components/useIntersectionObserver";

import redsquare from "../../assets/easyfast/redsquare.png";
import bluesquare from "../../assets/easyfast/bluesquare.png";
import yellowsquare from "../../assets/easyfast/yellowsquare.png";
import rightside from "../../assets/easyfast/inlightwoman.png";
function EasyFast(){
    const [isVisible, targetRef] = useIntersectionObserver();
    return(
        <div className="easyfast" ref={targetRef}>
            <div className={`easyfast__textblock ${isVisible ? 'visible' : ''}`}>
                <span className={`${isVisible ? 'visible' : ''}`}>
                    Easy and fast
                </span>
                <h3 className={`${isVisible ? 'visible' : ''}`}>
                Get Your Next Job In 3 Steps
                </h3>
                <div className={`easyfast__textblock__items ${isVisible ? 'visible' : ''}`}>
                    <div className={`easyfast__textblock__items__item ${isVisible ? 'visible' : ''}`}>
                        <img src={yellowsquare} alt=""/>
                        <div>
                            <h4>
                                Create a Profile
                            </h4>
                            <p>
                            It takes 60 seconds to sign-up and create your free skills profile.
                            </p>
                        </div>
                    </div>
                    <div className={`easyfast__textblock__items__item ${isVisible ? 'visible' : ''}`}>
                        <img src={redsquare} alt=""/>
                        <div>
                            <h4>
                                Instant Results
                            </h4>
                            <p>
                            We match your profile directly to the available opportunities so you don't waste time 
                            </p>
                        </div>
                    </div>
                    <div className={`easyfast__textblock__items__item ${isVisible ? 'visible' : ''}`}>
                        <img src={bluesquare} alt=""/>
                        <div>
                            <h4>
                                Apply Directly
                            </h4>
                            <p>
                            After applying for the job, Your CV will be sent directly to the hiring manager.
                            </p>
                        </div>
                    </div>
                </div>
                <button>Get Started Now!</button>
            </div>
            <img src={rightside} className={`easyfast__img ${isVisible ? 'visible' : ''}`} alt="woman under light"/>
        </div>
    )
};

export default EasyFast;