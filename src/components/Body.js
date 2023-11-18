import SideBar from "./SideBar";
// import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
    return (
        <div className="flex">
        {/* <div className="grid grid-flow-col m-2"> */}
            <SideBar/>
            {/* <MainContainer/> */}
            <Outlet/>
        </div>
    )
}

export default Body;