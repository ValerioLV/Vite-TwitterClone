import { useState } from "react";
import "./index.css";

const TweetModal = ({tweetData, setTweetEditModal}) => {
    const [editValue, setEditValue] = useState('')

    const onHandleEdit = () => {
        tweetData.body = editValue
    }

    return(
        <div className={`TweetModal `}>
            <div className={`TModal__Overlay `} onClick={() => setTweetEditModal(null)}></div>
                <div className="TweetModal__Content">
                    <h3 className="TweetModal__Title">Edit your tweet</h3>
                    <input type="text" onChange={(e) => {setEditValue(e.target.value)} } className="Tweet__Body"></input>
                    <input className="TweetModal__Submit" type="submit" onClick={() => {
                        onHandleEdit()
                        setTweetEditModal(null)
                    }} />
                </div>              
        </div>
    )
}

export default TweetModal