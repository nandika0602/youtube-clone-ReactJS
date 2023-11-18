import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
    const explore = [
        "Trending",
        "Shopping",
        "Music",
        "Movies",
        "Live",
        "Gaming",
        "News",
        "Sports",
        "Learning",
        "Fashion and Beauty",
        "Podcasts"
    ]

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    return !isMenuOpen ? "" : (
        <div className="w-48 shadow-lg px-2 m-3">
            <div className="">
                <ul>
                    <li key={"1"}>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li key={"2"}>Shorts</li>
                    <li key={"3"}>Subscriptions</li>
                </ul>
            </div>
            <hr />
            <div className="mt-3">
                <h1 className="font-bold">Explore</h1>
                <ul>
                    {explore.map((item) => {
                        return <li key={item}>{item}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SideBar;