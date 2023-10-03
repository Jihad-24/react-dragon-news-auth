import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>

            {/* Login With */}

            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-2xl font-semibold ">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle className='text-blue-500 text-xl'></FaGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub className='text-blue-500 text-xl'></FaGithub>
                    Login With Github
                </button>
            </div>

            {/* Find Us On */}

            <div className="p-4 mb-6">
                <h2 className="text-2xl font-semibold pb-4">Find Us On</h2>
                <a href="#" className='p-4 flex font-semibold items-center border rounded-t-md'>
                    <FaFacebook className='mr-3 text-xl text-blue-500'></FaFacebook>
                    Facebook
                </a>
                <a href="#" className='p-4 flex font-semibold items-center border-x'>
                    <FaTwitter className='mr-3 text-xl text-[#58A7DE]'></FaTwitter>
                    Twitter
                </a>
                <a href="#" className='p-4 flex font-semibold items-center border rounded-b-md'>
                    <FaInstagram className='mr-3 text-xl text-[#D82D7E]'></FaInstagram>
                    Instagram
                </a>
            </div>

            {/* Q-Zone */}

            <div className="p-4 space-y-5 mb-6 bg-[#F3F3F3] rounded">
                <h2 className="text-2xl font-semibold ">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;