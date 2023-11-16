import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"

const MainContainer = () => {
    return (
        <div className="col-span-11 shadow-lg p-2">
            <ButtonList/>
            <VideoContainer/>
        </div>
    )
}

export default MainContainer;