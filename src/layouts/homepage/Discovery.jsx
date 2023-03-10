import capa from "../../assets/Discovery/Capa.png";
import validate from "../../assets/Discovery/puce.svg";

function Discovery(){
    return(
        <div className="discovery">
            <img src={capa} alt="personnage motivé"/>
            <div className="discovery__textblock">
                <h3>
                    The easiest way to find high quality contract opportunities
                </h3>
                <div className="discovery__textblock__list">
                    <div className="discovery__textblock__list__item">
                        <img src={validate}/>
                        <p className="discovery__textblock__list__item__text">Relevant roles delivered directly to your inbox</p>
                    </div>
                    <div className="discovery__textblock__list__item">
                        <img src={validate}/>
                        <p className="discovery__textblock__list__item__text">Powerful search functionality</p>
                    </div>
                    <div className="discovery__textblock__list__item">
                        <img src={validate}/>
                        <p className="discovery__textblock__list__item__text">Hundreds of opportunities added daily</p>
                    </div>
                    <div className="discovery__textblock__list__item">
                        <img src={validate}/>
                        <p className="discovery__textblock__list__item__text">Easily review rate</p>
                    </div>
                    <div className="discovery__textblock__list__item">
                        <img src={validate}/>
                        <p className="discovery__textblock__list__item__text">IR35 and remote working status</p>
                    </div>
                </div>
                <button className="discovery__textblock__button">Discover More!</button>
            </div>
        </div>
    )
};

export default Discovery;