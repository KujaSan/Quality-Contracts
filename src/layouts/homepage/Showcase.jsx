import { useRef, useEffect,useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import targa from "../../assets/showcase/911targa.png";
import chatapps from "../../assets/showcase/chatapps.png";
import creativeminds from "../../assets/showcase/creativeminds.png";
import responsive from "../../assets/showcase/responsive.png";
import welove from "../../assets/showcase/welove.png";

function Showcase(){
    // Création des états pour les compteurs
    const [jobsCount, setJobsCount] = useState(0);
    const [ir35Count, setIr35Count] = useState(0);
    const [remoteCount, setRemoteCount] = useState(0);
    // Création de l'état isInView initialisé à false
    const [isInView, setIsInView] = useState(false);
    // Référence à l'élément <div> qui contient le composant Showcase
    const showcaseRef = useRef(null);
     // Utilisation de useEffect pour observer l'élément <div> avec IntersectionObserver
    useEffect(() => {
        // Création d'un nouvel observateur
        const observer = new IntersectionObserver(
            ([entry]) => {
                // La propriété isIntersecting indique si l'élément est en vue ou non
                setIsInView(entry.isIntersecting);
            },
            // Le seuil à atteindre pour déclencher la fonction de callback est de 0.5
            { threshold: 0.5 }
        );
        // On observe l'élément <div> qui contient le composant Showcase
        observer.observe(showcaseRef.current);
        // Retour de la fonction de nettoyage, qui est appelée lorsque le composant est démonté
        return () => {
            observer.unobserve(showcaseRef.current);
        };
    }, []);
    // Utilisation de useEffect pour lancer les compteurs lorsqu'ils sont en vue
    useEffect(() => {
        let jobsInterval = null;
        let ir35Interval = null;
        let remoteInterval = null;
        if (isInView){
             // Si l'élément est en vue, on utilise setInterval pour incrémenter les compteurs toutes les 50 millisecondes
            jobsInterval = setInterval(() => {
                setJobsCount(count => count + 24);
            }, 50);
            ir35Interval = setInterval(() => {
                setIr35Count(count => count + 14);
            }, 50);
            remoteInterval = setInterval(() => {
                setRemoteCount(count => count + 19);
            }, 50);
        }
        // Retour de la fonction de nettoyage, qui est appelée lorsque le composant est démonté ou que isInView change
        return () => {
            clearInterval(jobsInterval);
            clearInterval(ir35Interval);
            clearInterval(remoteInterval);
        };
    }, [isInView]);
    return(
        <div className='showcase'ref={showcaseRef}>
            <div className="showcase__textblock">
                <h2>We Have It All!</h2>
                <div className="showcase__textblock__statrack">
                    <div className="showcase__textblock__statrack__stat">
                        <span className="showcase__textblock__statrack__stat__number">
                            {jobsCount >= 2400 ? 2400 : jobsCount}+
                        </span>
                        <p className="showcase__textblock__statrack__stat__text">
                            Jobs Listed
                        </p>
                        <button className="showcase__textblock__statrack__stat__button">
                            <FontAwesomeIcon icon={faChevronRight} className="showcase__textblock__statrack__stat__button__icon"/>
                        </button>
                    </div>
                    <div className="showcase__textblock__statrack__stat">
                        <span className="showcase__textblock__statrack__stat__number">
                            {ir35Count >= 1450 ? 1450 : ir35Count}+
                        </span>
                        <p className="showcase__textblock__statrack__stat__text">
                            Outside IR35
                        </p>    
                        <button className="showcase__textblock__statrack__stat__button">
                        <FontAwesomeIcon icon={faChevronRight} className="showcase__textblock__statrack__stat__button__icon"/>
                        </button>
                    </div>
                    <div className="showcase__textblock__statrack__stat">
                        <span className="showcase__textblock__statrack__stat__number">
                            {remoteCount >= 1900 ? 1900 : remoteCount}+
                        </span>
                        <p className="showcase__textblock__statrack__stat__text">
                            Remote Working
                        </p>
                        <button className="showcase__textblock__statrack__stat__button">
                            <FontAwesomeIcon icon={faChevronRight} className="showcase__textblock__statrack__stat__button__icon"/>
                        </button>
                    </div>
                </div>
                <p className="showcase__textblock__loremIpsum">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporq incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis estoi nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat fer Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eurostal fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in festi culpa qui officia deserunt mollit anim id est laborum
                </p>
            </div>
            <img src={creativeminds} alt="logo en forme de C" style={{top: '63px',right: '-9px'}} className='showcase__img' />
            <img src={welove} alt="logo en forme de C" style={{top: '446px',right: '303px'}} className='showcase__img' />
            <img src={responsive} alt="logo en forme de C" style={{bottom: '152px',right: '-194px'}} className='showcase__img' />
            <img src={targa} alt="" style={{bottom: '63px',right: '303px'}} className='showcase__img' />
            <img src={chatapps} alt="logo en forme de C" style={{top: '446px',right: '-194px'}} className='showcase__img' />
        </div>
    )
}

export default Showcase;