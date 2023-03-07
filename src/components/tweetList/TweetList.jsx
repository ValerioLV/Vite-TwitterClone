import "./index.css";
import tweetList from "../../mock/tweetsList";
import TweetItem from "../tweetItem/TweetItem";

const TweetList = () => {
    return(
        <div className="TweetList">
            {tweetList.map((tweet) => (<TweetItem tweetData={tweet} key={tweet.id} />
            ))}
        </div>
    )
};

export default TweetList