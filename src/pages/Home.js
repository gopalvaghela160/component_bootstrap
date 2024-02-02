import Blog from "../Component/Blog/Blog";
import Designs from "../Component/Designs/Designs";
import Slider from "../Component/Slider/Slider";
import Creative from "../Component/card/Creative";
import Clients from "../Component/clients/Clients";
import Company from "../Component/company/Company";
import Project from "../Component/project/Project";
import SecondCard from "../Component/secondcard/SecondCard";
import Testimonial from "../Component/testimonital/Testimonial";
function Home() {
    return (
        <div>
            <Slider></Slider>
            <Creative></Creative>
            <Designs></Designs>
            <SecondCard></SecondCard>
            <Project></Project>
            <Company></Company>
            <Clients></Clients>
            <Testimonial></Testimonial>
            <Blog></Blog>
        </div>
    );
}
export default Home;