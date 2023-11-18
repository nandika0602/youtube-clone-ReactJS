import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const WatchPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    },[])

    const [searchParams] = useSearchParams();
    console.log(searchParams,'search');
    const id = searchParams.get("v")
    console.log(id);
    return (
        <div className="col-span-12 ml-5">
            <iframe className="rounded-lg" width="900" height="500" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
        </div>
        // <h1>Watch....{ele.get("v")}</h1>
    )
}

export default WatchPage;