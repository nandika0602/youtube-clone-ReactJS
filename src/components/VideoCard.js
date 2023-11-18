const VideoCard = ({video}) => {
// const VideoCard = ({id, snippet, statistics}) => {
    // console.log(props.vid);
    const {snippet, statistics} = video;
    // console.log(id, snippet, statistics.viewCount);

    // const video = props.video;
    // console.log(video);
    return (
        <div className="mt-1 shadow-lg w-72 h-80 m-2 p-2">
            <img className="rounded-lg" src={snippet.thumbnails.medium.url} alt="video" />
            <h4 className="font-bold py-2">{snippet.localized.title}</h4>
            <p>{snippet.channelTitle}</p>
            <p>{statistics.viewCount} views</p>

             {/* <img src={snippet.thumbnails.medium.url} alt="video" />
                        <h4>{snippet?.localized.title}</h4>
                        <p>{snippet?.channelTitle}</p>
                        <p>{statistics.viewCount}</p> */}
            {/* <ul className="flex flex-wrap">
                {video.map((vid) => {
                    return ( 
                    <li className="shadow-lg p-2 m-3 w-72 rounded-2xl">
                        <img className="" src={vid.snippet.thumbnails.high.url} alt="video" />
                        <h4>{vid.snippet?.localized.title}</h4>
                        <p>{vid.snippet?.channelTitle}</p>
                        <p>{vid.statistics.viewCount} views</p>                        
                    </li>
                    )
                })}
            </ul> */}
        </div>
    )

}

export default VideoCard;