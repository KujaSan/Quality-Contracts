import Card from "./Card";

function Slide(props){
    return(
        <div className="slideshow">
            {props.data.card.map((card, index) => (
                <Card
                    key={index}
                    cover={card.cover}
                    alt={card.alt}
                    title={card.title}
                    offers={card.offers}
                />
                ))}
        </div>
    )
}

export default Slide;