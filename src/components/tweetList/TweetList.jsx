import "./index.css";
import { useState , useEffect } from "react";
import TweetItem from "../tweetItem";
 

const TweetList = () => {
    const [msgList, setTweetList] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then((res) => res.json())
            .then((data) => setTweetList(data.posts));
        }, []);
        
    return(
        <div className="TweetList">
            {msgList.map((tweet) => (
                <TweetItem tweetData={tweet} key={tweet.id} />
            ))}
        </div>
    );
};

export default TweetList