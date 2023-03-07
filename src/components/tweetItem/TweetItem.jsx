import "./index.css";

const TweetItem = ({tweetData}) => {
    const { photo, userName, body, email } = tweetData;

    return(
        <div className="TweetItem">
            <img className="Tweet__profile-pic" src={photo} alt={userName} />
            <div className="Tweet__content">
                <span className="UserName">{userName}</span>
                <p className="Tweet__body">{body}</p>
           
            <div className="Tweet__icons">
                <img
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/256/external-Chat-Bubble-messages-and-chat-those-icons-lineal-those-icons-10.png"
                    alt="chat"
                />
                <img
                    src="https://img.icons8.com/material-sharp/256/sorting-arrows-horizontal.png"
                    alt="arrow"
                />
                <img
                    src="https://img.icons8.com/ios-glyphs/256/hearts.png"
                    alt="heart"
                />
                <img 
                    src="https://img.icons8.com/ios-glyphs/256/bar-chart.png" 
                    alt="analytics" 
                />
                <img 
                    src="https://img.icons8.com/ios/256/upload.png"
                    alt="upload" 
                /> 
                </div>  
            </div>
        </div>   
    )
};

export default TweetItem