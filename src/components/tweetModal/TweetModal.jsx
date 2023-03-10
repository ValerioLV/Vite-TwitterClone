import { useState } from "react";
import "./index.css";

const TweetModal = ({tweetData, setTweetEditModal, visible}) => {
    const [editValue, setEditValue] = useState('')

    const onHandleEdit = (e) => {
        e.preventDefault();
        fetch(`https://dummyjson.com/posts/${tweetData.id}`), {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                body: `${editValue}`,
            })
        }
    }

    return(
        <div className={`TweetModal ${visible ? "show" : ""}`}>
            <div className={`TModal__Overlay ${visible ? "show" : ""}`} onClick={() => setTweetEditModal(null)}></div>
            <form onSubmit={onHandleEdit} className="EditModal">
                <h3>Edit your tweet</h3>
                <div className="TweetModal__Content">
                    <input type="text" onChange={(e) => setEditValue (e.target.value)} className="Tweet__Body"></input>
                </div>
                <input type="submit" onClick={() => setTweetEditModal(null)} />
            </form>
            
        </div>
    )
}


export default TweetModal