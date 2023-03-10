import "./index.css";
import TrendItem from "../trendItem";
import arrayTrends from "../../mock/arrayTrends.js"

const TrendList = () => {
    return (
        <div className="TrendList">
            {arrayTrends.map((trend, index) => (
                <TrendItem data={trend} key={index}/>
            ))}
        </div>
    )
};

export default TrendList