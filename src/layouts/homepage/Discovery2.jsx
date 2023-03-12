import { useState, useEffect } from "react";
import useIntersectionObserver from "../../components/useIntersectionObserver";

import load from "../../assets/Discovery2/next.png";
import placeholder from "../../assets/Discovery2/strategy-achievement-analysis-pad-device-data.png";
import horizontaldot from "../../assets/Discovery2/horizontaldot.svg";
import verticaldot from "../../assets/Discovery2/verticaldot.svg";
function Discovery2(){
    const [isVisible, targetRef] = useIntersectionObserver();
    const [opacity, setOpacity] = useState({span: 0, h3: 0, p: 0});
    useEffect(() => {
        if (isVisible){
        const timeout1 = setTimeout(() => setOpacity((prevState) => ({ ...prevState, span: 1 })), 500);
        const timeout2 = setTimeout(() => setOpacity((prevState) => ({ ...prevState, h3: 1 })), 1000);
        const timeout3 = setTimeout(() => setOpacity((prevState) => ({ ...prevState, p: 1 })), 1500);
        
        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
        };}
    }, [isVisible]);
    return(
        <div className="discovery2" ref={targetRef}>
            <div className={`discovery2__textblock ${isVisible ? 'visible' : ''}`}>
                <span style={{opacity: opacity.span, transition: 'opacity 1.5s'}} className="discovery2__textblock__pretitle">
                    We Care About You
                </span>
                <h3 style={{opacity: opacity.h3, transition: 'opacity 1.5s'}}>
                    How Quality Contracts Work for you!
                </h3>
                <p style={{opacity: opacity.p, transition: 'opacity 1.5s'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporq 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis estoi 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat fer
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eurostal
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporq 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis estoi 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat fer
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eurostal
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in festi
                culpa qui officia deserunt mollit anim id est laborum
                </p>
                <button className="discovery2__textblock__button">Discover More!</button>
            </div>
            <div className={`discovery2__placeholder ${isVisible ? 'visible' : ''}`}>
                <img alt="" className="discovery2__placeholder__verticaldot" src={horizontaldot}/>
                <img alt="" className="discovery2__placeholder__horizontaldot" src={verticaldot}/>
                <img className="discovery2__placeholder__source" src={placeholder} alt="placeholder de video"/>
                <button className="discovery2__placeholder__button"><img alt="" src={load}/></button>
            </div>
        </div>
    )
}

export default Discovery2;