import Hero from "../layouts/homepage/Hero";
import Showcase from "../layouts/homepage/Showcase";
import Discovery from "../layouts/homepage/Discovery";
import Discovery2 from "../layouts/homepage/Discovery2";
import Opportunity from "../layouts/homepage/Opportunity";
import Banner from "../layouts/homepage/Banner";
function Homepage(){
    return(
        <div className='homepage'>
            <Hero/>
            <Showcase/>
            <Discovery/>
            <Discovery2/>
            <Opportunity/>
            <Banner/>
        </div>
    )
}

export default Homepage;