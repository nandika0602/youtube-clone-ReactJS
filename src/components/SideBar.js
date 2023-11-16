import { useSelector } from "react-redux";

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
        <div className="col-span-1 shadow-lg p-2">
            <div className="m-3">
                <ul>
                    <li>Home</li>
                    <li>Shorts</li>
                    <li>Subscriptions</li>
                </ul>
            </div>
            <hr />
            <div className="p-3">
                <h1 className="font-bold">Explore</h1>
                <ul>
                    {explore.map((item) => {
                        return <li id={item}>{item}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SideBar;