import Button from "./Button"

const ButtonList = () => {
    const buttons =["All", "Music", "Web Development", "Computer Science", "News", "Mantras", "English Grammar", "Cricket", "Tamil Cinema", "Mantras", "Comedy", "Recently upload", "New to you"]
    return (
        <div>
            <Button {...buttons} />
            {/* <Button j = {...buttons} /> */}
            {/* <Button a = {buttons} k = "gg"/> */}
            {/* <Button ab = {buttons[6]} /> */}


        </div>
    )
}

export default ButtonList;