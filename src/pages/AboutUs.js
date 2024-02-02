import About from "../Component/Aboutus/About";
import Designs from "../Component/Designs/Designs";
import Ourteam from "../Component/SerivcesCord/Ourteam";
import Clients from "../Component/clients/Clients";
import Testimonial from "../Component/testimonital/Testimonial";
function AboutUs() {
    return (
        <div>
            <About></About>
            <Designs></Designs>
            {/* <Ourteam></Ourteam> */}
            <Clients ></Clients>
            <Testimonial></Testimonial>

        </div>

    );
}
export default AboutUs;