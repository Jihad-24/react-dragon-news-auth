import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="p-4 space-y-5 rounded">
            <h2 className="text-2xl font-semibold">All Caterogy</h2>
            <h2 className="text-xl w-full bg-[#E7E7E7] font-semibold text-center py-3 rounded-md">National News</h2>
            {
                categories.map(category => <Link
                    to={`/category/${category.id}`}
                    className="block ml-4 text-xl font-semibold text-[#9F9F9F]
                     hover:bg-[#E7E7E7] hover:text-black hover:w-full hover:py-2 hover:rounded-md hover:ml-0 hover:text-center"
                    key={category.id}>
                    {category.name}
                </Link>)
            }
        </div>
    );
};

export default LeftSideNav;