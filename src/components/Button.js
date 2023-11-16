const Button = (props) => {
    // const button = props;
    // console.log(props);
    // console.log(Object.values(props));
    return (
        <div>
            {Object.values(props).map(button => {
                return(
                    // https://blog.hubspot.com/website/how-to-get-youtube-api-key
                    // <marquee className="scroll-m-0 right-0">
                        <button className="bg-gray-300 py-1 px-3 m-2 rounded-lg">{button}</button>
                    // </marquee> 
                ) 
            })}
        </div>
    )
}

export default Button;