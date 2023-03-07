import "./index.css";

const TrendItem = ({data}) => {
    return (
        <div className="TrendItem">
            <p>Trending in {data.genre}</p>
            <h3>{data.title}</h3>
            <span>{data.numbers} tweets</span>
        </div>
    )
};

export default TrendItem