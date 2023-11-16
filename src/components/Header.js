import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice"

const Header = () => {
    const dispatch = useDispatch();
    const toggleMenu1 = () => {
        dispatch(toggleMenu())
    }
    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img className="h-8 mt-2 cursor-pointer" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" onClick={() => toggleMenu1()} alt="icon" />
                <img className="h-12" src="https://t3.ftcdn.net/jpg/04/03/98/64/360_F_403986499_hB7zfgOXezReA0sKkxl34RoT9TbNkbpH.jpg" alt="icon" />
            </div>
            <div className="col-span-10 text-center">
                <input className="p-2 w-1/2 border border-gray-500 rounded-l-full" type="text" />
                <button className="p-2 border border-gray-500 rounded-r-full bg-gray-200">Search</button>
            </div>
            <div className="col-span-1">
                <img className="h-12" src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg" alt="icon" />
            </div>
        </div>
    )
}

export default Header;