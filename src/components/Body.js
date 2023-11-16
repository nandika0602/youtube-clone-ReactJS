import SideBar from "./SideBar";
import MainContainer from "./MainContainer";

const Body = () => {
    return (
        <div className="flex grid grid-flow-col m-2">
            <SideBar/>
            <MainContainer/>
        </div>
    )
}

export default Body;