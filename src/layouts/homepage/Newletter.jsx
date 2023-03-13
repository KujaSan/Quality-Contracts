import verticaldot from "../../assets/verticaldot.svg";
import useIntersectionObserver from "../../components/useIntersectionObserver";
function Newletter(){
    const [isVisible, targetRef] = useIntersectionObserver();
    return(
        <div className="newletter" ref={targetRef}>
            <img src={verticaldot} className={`newletter__topprop ${isVisible ? 'visible' : ''}`} alt=""/>
            <div className="newletter__container" >
                <div className="newletter__container__textbox">
                    <span>
                        Subscribe Now
                    </span>
                    <h3>
                        Newsletter For More!
                    </h3>
                    <p>
                    Subscribe to get information, latest news and other interesting offers about Quality Contracts
                    </p>
                    <form>
                        <input className="newletter__container__textbox__textinput" placeholder="Email Address" type="text"/>
                        <input className="newletter__container__textbox__submitinput" value="Signup Now!" type="submit"/>
                    </form>
                </div>
            </div>
            <img src={verticaldot} className={`newletter__bottomprop ${isVisible ? 'visible' : ''}`} alt=""/>
        </div>
    )
}

export default Newletter;