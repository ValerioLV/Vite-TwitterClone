import "./index.css";
import { useState , useEffect } from "react";
import TweetModal from "../tweetModal";
import TweetItem from "../tweetItem";
 

const TweetList = ({headerInputValue}) => {
    const [msgList, setTweetList] = useState([]);
    const [tweetEditModal, setTweetEditModal] = useState(null)
    const [visible, setVisible] = useState(false)

    const ListFilter = msgList.filter((msg) => msg.body.includes(headerInputValue));
    
    useEffect(() => {
        fetch('https://dummyjson.com/posts?limit=20')
            .then((res) => res.json())
            .then((data) => setTweetList(data.posts));
        }, []);
        
    return(
        <div className="TweetList">
            {ListFilter.map((tweet) => (
                <TweetItem setVisible={setVisible} tweetData={tweet} setTweetEditModal={setTweetEditModal} key={tweet.id} />
            ))}
            <TweetModal 
                visible={visible}
                tweetData={tweetEditModal}
                setTweetEditModal={setTweetEditModal}
            />
        </div>
    );
};

export default TweetList