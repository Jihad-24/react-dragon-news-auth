import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex gap-1 bg-[#F3F3F3] rounded-md py-3 pl-5 pr-8">
           <button className="btn-sm btn-secondary font-semibold rounded-md">BreakingNews</button> 
            <Marquee pauseOnHover={true} speed={60} >
             <Link to={"/"} className="mr-12 text-[18px] font-semibold">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as.....</Link> 
             <Link to={"/"} className="mr-12 text-[18px] font-semibold">I can be a React component, multiple React components, or just some text.....</Link> 
             <Link to={"/"} className="mr-12 text-[18px] font-semibold">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as.....</Link> 
            </Marquee>
        </div>
    );
};

export default BreakingNews;