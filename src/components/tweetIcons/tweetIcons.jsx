import { useState ,useRef } from "react";
import "./index.css"

const TweetIcons = ({tweetData ,setTweetEditModal}) => {
    const [isLike, setIsLike] = useState(false)
    const [countNum, setCountNum] = useState(0)
    const countRef = useRef(0);

    const onLikeBtn = () => setIsLike((prev) => !prev)
    

    const onCountIncrease = () => {
        countRef.current++;
        setCountNum(countRef.current)
    };
    
    const onHandleEdit = () => {
        setTweetEditModal(() => tweetData)
    }
    

    return(
        <div className={"Tweet__icons"}>
            <div className="CommentCount">
                <img
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/256/external-Chat-Bubble-messages-and-chat-those-icons-lineal-those-icons-10.png"
                    alt="chat"
                    onClick={onCountIncrease}
                />
                <span>{countNum}</span>
            </div>
                    
                    <img
                        src="https://img.icons8.com/material-sharp/256/sorting-arrows-horizontal.png"
                        alt="arrow"
                    />
                    <img
                        src={isLike ? "https://em-content.zobj.net/thumbs/120/twitter/322/red-heart_2764-fe0f.png" : "https://img.icons8.com/ios-glyphs/256/hearts.png"}
                        alt="heart"
                        onClick={onLikeBtn}
                    />
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/1827/1827951.png" 
                        alt="edit"
                        onClick={onHandleEdit} />
                    <img 
                        src="https://img.icons8.com/ios-glyphs/256/bar-chart.png" 
                        alt="analytics" 
                    />
                    <img 
                        src="https://img.icons8.com/ios/256/upload.png"
                        alt="upload" 
                    /> 
                </div>
    )
};

export default TweetIcons