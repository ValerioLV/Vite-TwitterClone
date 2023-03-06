import Header from "../header"
import TweetList from "../tweetList";
import Footer from "../footer"
import "./index.css";

const Content = () => {
    return (
        <div className="Content">
            <Header />
            <TweetList />
            <Footer />
        </div>
    )
};

export default Content