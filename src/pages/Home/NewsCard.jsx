/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {

    const { title, details, _id ,image_url} = news;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl mb-16">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {
                        details.length > 200 ? <p className="text-[16px] text-[#706F6F]"> {details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-blue-500 font-semibold "> Read More... </Link> </p>
                            :
                            <p className="text-[16px] text-[#706F6F]">{details}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default NewsCard;