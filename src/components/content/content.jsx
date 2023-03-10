import { useState } from "react";
import Header from "../header"
import TweetList from "../tweetList";
import TweetModal from "../tweetModal/";
import Footer from "../footer"
import "./index.css";

const Content = () => {
    const [headerInputValue, setHeaderInputValue] = useState('')

    return (
        <div className="Content">
            <Header setHeaderInputValue={setHeaderInputValue}/>
            <TweetList headerInputValue={headerInputValue} />
            <Footer />
        </div>
    )
};

export default Content