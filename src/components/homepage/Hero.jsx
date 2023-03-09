import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

import logoTextBloc from "../../assets/logo_textblock.png";
import logoTextBloc2 from "../../assets/logo_textblock2.png";

import cube from "../../assets/hero_logos/3d-cube.png";
import analysis from "../../assets/hero_logos/analysis.png";
import bigData from "../../assets/hero_logos/big-data.png";
import cloud from "../../assets/hero_logos/cloud.png";
import programming from "../../assets/hero_logos/programming.png";
import screw from "../../assets/hero_logos/screw.png";
import shield from "../../assets/hero_logos/shield.png";
import social from "../../assets/hero_logos/social-media.png";

function Hero(){
    const title = "The best way to find high quality contract opportunities";
    const upperCaseTitle = title.toUpperCase();
    return(
        <div className='homepage__hero'>
            <div className="homepage__hero__textblock">
            <img src={logoTextBloc} alt="logo en forme de C" style={{top: '20%',right: '-40%'}} className="homepage__hero__textblock__img" />
            <img src={logoTextBloc2} alt="logo en forme de double C" style={{top: '20%',right: '-40%'}} className="homepage__hero__textblock__img" />
                <h1>
                    {upperCaseTitle}
                </h1>
                <p className="homepage__hero__textblock__loremIpsum">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <form className="homepage__hero__textblock__form">
                    <input type="text" placeholder="Search For Job Title" className="homepage__hero__textblock__form__text"/>
                    <input type="submit" value="Search Now" className="homepage__hero__textblock__form__submit"/>
                </form>
                <div className="homepage__hero__textblock__buttonbar">
                    <button className="homepage__hero__textblock__buttonbar__button">Sr. UI Designer</button>
                    <button className="homepage__hero__textblock__buttonbar__button">Backend Dev</button>
                    <button className="homepage__hero__textblock__buttonbar__button">Frontend Dev</button>
                    <button className="homepage__hero__textblock__buttonbar__button">Sr. Digital Man</button>
                    <div className="homepage__hero__textblock__buttonbar__skipholder">
                        <button className="homepage__hero__textblock__buttonbar__skipholder__skip">
                            <FontAwesomeIcon icon={faAngleDoubleRight} className="homepage__hero__textblock__buttonbar__skipholder__skip__icon"/>
                        </button>
                    </div>
                </div>
            </div>
            <img src={cube} alt="Cube en 3d" style={{top: '20%',right: '-40%',animationDelay: '0s'}} className="homepage__hero__img" />
            <img src={analysis} alt="Analysis" style={{top: '20%',left: '-40%',animationDelay: '0.5s'}} className="homepage__hero__img" />
            <img src={bigData} alt="Big data" style={{top: '70%',left: '-35%',animationDelay: '1s'}} className="homepage__hero__img"/>
            <img src={cloud} alt="Le cloud" style={{top: '70%',right: '-35%',animationDelay: '1.5s'}} className="homepage__hero__img"/>
            <img src={programming} alt="La programmation" style={{top: '45%',right: '-20%',animationDelay: '2s'}} className="homepage__hero__img"/>
            <img src={screw} alt="Tête de vis" style={{top: '-5%',right: '-25%',animationDelay: '2.5s'}} className="homepage__hero__img"/>
            <img src={shield} alt="Un bouclier" style={{top: '45%',left: '-20%',animationDelay: '3s'}} className="homepage__hero__img"/>
            <img src={social} alt="Reseaux sociaux" style={{top: '-5%',left: '-25%',animationDelay: '3.5s'}} className="homepage__hero__img"/>
        </div>
    )
}

export default Hero;