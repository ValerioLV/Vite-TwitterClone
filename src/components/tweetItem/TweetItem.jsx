import "./index.css";
import TweetIcons from "../tweetIcons";
import { useState, useEffect } from "react";

const TweetItem = ({tweetData, setTweetEditModal}) => {
    const {  userId, body } = tweetData;
    const [profileData, setProfileData] = useState({});


    useEffect(() => {
        fetch(`https://dummyjson.com/users/${userId}`)
            .then((res) => res.json())
            .then((data) => setProfileData(data));
        }, []);

    return(
        <div className="TweetItem">
            <img className="Tweet__profile-pic" src={profileData.image} alt={profileData.username} />
            <div className="Tweet__content" >
                <span className="UserName">{profileData.username}</span>
                <p className="Tweet__body">{body}</p>
           
                <TweetIcons tweetData={tweetData} setTweetEditModal={setTweetEditModal} />
            </div>
        </div>   
    )
};

export default TweetItem