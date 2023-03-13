import Carousel from "../../components/Carousel";

function Blog(){
    return(
        <div className="blog">
                <span>
                    Blog Feed
                </span>
                <h3>
                    Our Recent Articles
                </h3>
                <Carousel/>
                <button className="blog__button">Show All Blog Posts</button>
        </div>
    )
}

export default Blog;