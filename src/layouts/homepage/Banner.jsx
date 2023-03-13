import useIntersectionObserver from "../../components/useIntersectionObserver";

import diamond from "../../assets/banner/diamond.png";
import scroll from "../../assets/banner/scroll.png";
import target from "../../assets/banner/target.png";

function Banner(){
    const [isVisible, targetRef] = useIntersectionObserver();
    return(
        <div className="banner" >
            <div className="banner__section" ref={targetRef}>
                <div className={`banner__section__scrolling ${isVisible ? 'visible' : ''}`}>
                <img src={diamond} alt=""/>
                <div>
                    <h4>No Endless Scrolling</h4>
                    <p>Tell us what you’re looking for and we’ll only show you the most relevent job opportunities that fits</p>
                </div>
                </div>
                <div className={`banner__section__quality ${isVisible ? 'visible' : ''}`}>
                    <img src={scroll}alt=""/>
                    <div>
                        <h4>High Quality</h4>
                        <p>All opportunities are individually curated to ensure only the highest quality are uploaded to the platform</p>
                    </div>
                </div>
                <div className={`banner__section__description ${isVisible ? 'visible' : ''}`}>
                    <img src={target} alt="" />
                    <div>
                        <h4>Fluff-Free Job Descriptions</h4>
                        <p>All roles clearly outline the rate, IR35 status and possibility of remote working without any unnecessary details</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Banner;