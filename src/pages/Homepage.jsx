import Hero from "../layouts/homepage/Hero";
import Showcase from "../layouts/homepage/Showcase";
import Discovery from "../layouts/homepage/Discovery";
import Discovery2 from "../layouts/homepage/Discovery2";
import Opportunity from "../layouts/homepage/Opportunity";
import Banner from "../layouts/homepage/Banner";
import EasyFast from "../layouts/homepage/EasyFast";
import Newletter from "../layouts/homepage/Newletter";
import Blog from "../layouts/homepage/Blog";
function Homepage(){
    return(
        <div className='homepage'>
            <Hero/>
            <Showcase/>
            <Discovery/>
            <Discovery2/>
            <Opportunity/>
            <Banner/>
            <EasyFast/>
            <Newletter/>
            <Blog/>
        </div>
    )
}

export default Homepage;