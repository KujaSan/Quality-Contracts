import Hero from "../layouts/homepage/Hero";
import Showcase from "../layouts/homepage/Showcase";
import Discovery from "../layouts/homepage/Discovery";
function Homepage(){
    return(
        <div className='homepage'>
            <Hero/>
            <Showcase/>
            <Discovery/>
        </div>
    )
}

export default Homepage;