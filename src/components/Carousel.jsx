import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import photo1 from "../assets/carousel/1515135672-shutterstock_284581649.png";
import photo2 from "../assets/carousel/file.png";
import photo3 from "../assets/carousel/istockphoto-1307615661-170667a.png";
import photo4 from "../assets/carousel/pedroquintela-1500x844.png";

function Carousel (){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2.75,
        slidesToScroll: 1,
        swipeToSlide: true,
        swipe: true,
    };
    return (
        <Slider {...settings}>
            <div>
                <div className="slide">
                    <div className="slide__photo">
                        <img src={photo1} alt=""/>
                    </div>
                    <div>
                        <h5>Blog Post Title</h5>
                        <p>Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium dolorer emque laudantium, totam rem aperiam, eaque ipsaquae abillo inventore veritatiq s et quasi architecto beataevitae dictasunt explicabo. Nemo enim ipsam vouptatr em quia voluptas sit aspernaturm quia voluptas sit aspernat. </p>
                    </div>
                </div>
            </div>
            <div >
                <div className="slide">
                    <div className="slide__photo">
                        <img src={photo2} alt=""/>
                    </div>
                    <div>
                        <h5>Blog Post Title</h5>
                        <p>Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium dolorer emque laudantium, totam rem aperiam, eaque ipsaquae abillo inventore veritatiq s et quasi architecto beataevitae dictasunt explicabo. Nemo enim ipsam vouptatr em quia voluptas sit aspernaturm quia voluptas sit aspernat. </p>
                    </div>
                </div>
            </div>
            <div >
                <div className="slide">
                    <div className="slide__photo">
                        <img src={photo3} alt=""/>
                    </div>
                    <div>
                        <h5>Blog Post Title</h5>
                        <p>Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium dolorer emque laudantium, totam rem aperiam, eaque ipsaquae abillo inventore veritatiq s et quasi architecto beataevitae dictasunt explicabo. Nemo enim ipsam vouptatr em quia voluptas sit aspernaturm quia voluptas sit aspernat. </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="slide">
                    <div className="slide__photo">
                        <img src={photo4} alt=""/>
                    </div>
                    <div>
                        <h5>Blog Post Title</h5>
                        <p>Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium dolorer emque laudantium, totam rem aperiam, eaque ipsaquae abillo inventore veritatiq s et quasi architecto beataevitae dictasunt explicabo. Nemo enim ipsam vouptatr em quia voluptas sit aspernaturm quia voluptas sit aspernat. </p>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default Carousel;