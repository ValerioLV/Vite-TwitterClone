import "./index.css";
import { useState , useEffect } from "react";
import TweetItem from "../tweetItem";
 

const TweetList = ({headerInputValue}) => {
    const [msgList, setTweetList] = useState([]);
    
    const ListFilter = msgList.filter((msg) => msg.body.includes(headerInputValue));
    

    useEffect(() => {
        fetch('https://dummyjson.com/posts?limit=20')
            .then((res) => res.json())
            .then((data) => setTweetList(data.posts));
        }, []);
        
    return(
        <div className="TweetList">
            {ListFilter.map((tweet) => (
                <TweetItem tweetData={tweet} key={tweet.id} />
            ))}
        </div>
    );
};

export default TweetList