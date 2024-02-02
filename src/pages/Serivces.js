import Spage from "../Component/Aboutus/Spage";
import SerivcesCord from "../Component/SerivcesCord/SerivcesCord";
import Company from "../Component/company/Company";
// import SecondCard from "../Component/secondcard/SecondCard";
import Testimonial from "../Component/testimonital/Testimonial";

function Serivces() {
    return(
        <div>
            <Spage></Spage>
            {/* <SecondCard></SecondCard> */}
            <SerivcesCord></SerivcesCord>
            <Company></Company>
            <Testimonial></Testimonial>
        </div>
    );
}
export default Serivces;