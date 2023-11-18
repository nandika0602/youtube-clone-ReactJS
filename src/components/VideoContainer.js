import React, { useEffect, useState } from "react";
import {YOUTUBE_VIDEOS_API} from "../utils/constants"
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
    const searchVal = useSelector((store) => {
        // console.log(store.search);
        return store.search.val
    })
    console.log(searchVal, 'search');
    const [videoList, setVideoList] = useState([])
    const [dataList, setDataList] = useState([])

    useEffect(() => {
        getVideos();
    }, [])

    const filterVideos = () => {
        const fil = dataList.filter((video) => video.snippet.localized.title.toLowerCase().includes(searchVal.toLowerCase()));
        // console.log(fil);
        return fil;
    }

    useEffect(() => {
        // console.log('hey');
        const list = filterVideos();
        setVideoList(list);
    }, [searchVal])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        // console.log(json.items[0]);
        setVideoList(json.items);
        setDataList(json.items);
        // console.log(json.items);
    }

    //EARLY RETURN  
    if(videoList.length === 0){
        // console.log('early');
        return <Shimmer/>;
    } 
    // if(!videoList){
    //     console.log('early');
    //     return null;
    // } 

    return (
        // <>
        //     {console.log('hey')}
        //    <VideoCard video={videoList}/>
        // </>
        <div className="flex flex-wrap">
            {videoList.map((video) => {
                return (
                    <React.Fragment key={video.id}>
                    <Link to={`/watch?v=${video.id}?si=${video.snippet.channelId}`}>
                        <VideoCard  video={video}/>
                    </Link>
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default VideoContainer;