const Shimmer = () => {
    const empty = new Array(10);
    // console.log(empty);
    return (
        <div className="flex flex-wrap">
            {/* empty => Array(10) */}
            {empty.fill("").map((ele, i) => {
                return (
                <div key={i} className="w-72 h-60 m-3 bg-gray-300"></div>
                )
            })}
        </div>
    )
}

export default Shimmer;