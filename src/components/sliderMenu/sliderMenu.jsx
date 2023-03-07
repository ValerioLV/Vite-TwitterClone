import "./index.css";
import SliderContent from "../sliderMContent";


const SliderMenu = ({visible}) => {
    return (
        <div className={`slider__menu ${visible ? "show" : ""}`}>
            <SliderContent />
        </div>
    )
};

export default SliderMenu