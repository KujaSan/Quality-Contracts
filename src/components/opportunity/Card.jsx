function Card(props){
    return(
        <a href=".slideshow__card" className="slideshow__card">
                <img className='slideshow__card__img' src={props.cover} alt={props.alt}></img>
                <div className='slideshow__card__text'>
                <p>{props.title}</p>
                <span>{props.offers}</span>
                </div>
        </a>
    )
}

export default Card;