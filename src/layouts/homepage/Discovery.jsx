import useIntersectionObserver from "../../components/useIntersectionObserver";

import capa from "../../assets/Discovery/Capa.png";
import validate from "../../assets/Discovery/puce.svg";

function Discovery(){
    const [isVisible, targetRef] = useIntersectionObserver();
    const listItems = [
        {
            img: validate,
            text: "Relevant roles delivered directly to your inbox"
        },
        {
            img: validate,
            text: "Powerful search functionality"
        },
        {
            img: validate,
            text: "Hundreds of opportunities added daily"
        },
        {
            img: validate,
            text: "Easily review rate"
        },
        {
            img: validate,
            text: "IR35 and remote working status"
        }
    ];
    return(
        <div className="discovery" ref={targetRef}>
            <img src={capa} alt="personnage motivé" className={`discovery__img ${isVisible ? 'visible' : ''}`}/>
            <div className={`discovery__textblock ${isVisible ? 'visible' : ''}`}>
                <h3>
                    The easiest way to find high quality contract opportunities
                </h3>
                <div className="discovery__textblock__list">
                    {listItems.map((item, index) => (
                        <div
                            key={index}
                            className={`discovery__textblock__list__item ${isVisible ? 'visible' : ''}`}
                        >
                            <img alt='' src={item.img}/>
                            <p className="discovery__textblock__list__item__text">{item.text}</p>
                        </div>
                    ))}
                </div>
                <button className="discovery__textblock__button">Discover More!</button>
            </div>
        </div>
    )
};

export default Discovery;