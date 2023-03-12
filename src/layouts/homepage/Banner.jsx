import diamond from "../../assets/banner/diamond.png";
import scroll from "../../assets/banner/scroll.png";
import target from "../../assets/banner/target.png";

function Banner(){
    return(
        <div className="banner">
            <div className="banner__section">
                <div className="banner__section__scrolling">
                <img src={diamond} alt=""/>
                <div>
                    <h4>No Endless Scrolling</h4>
                    <p>Tell us what you’re looking for and we’ll only show you the most relevent job opportunities that fits</p>
                </div>
                </div>
                <div className="banner__section__quality">
                    <img src={scroll}alt=""/>
                    <div>
                        <h4>High Quality</h4>
                        <p>All opportunities are individually curated to ensure only the highest quality are uploaded to the platform</p>
                    </div>
                </div>
                <div className="banner__section__description">
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