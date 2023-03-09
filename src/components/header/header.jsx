import "./index.css";
import SliderMenu from "../sliderMenu/sliderMenu";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const Header = ({setHeaderInputValue}) => {
    const [inputFilterValue, setInputFilterValue] = useState('')
    const [menuShow, setMenuShow] = useState(false)

    const menushow = () => {
        setMenuShow(!menuShow)
    };

    return(
        <div className="Header">
            <div className="Header_up">
                <FiMenu className="slide__sideMenu" onClick={menushow} />
                <SliderMenu visible={menuShow} />
                <img
                    className="Header--logo"
                    src="https://img.icons8.com/color/256/twitter--v1.png"
                    alt="twitter logo"
                />
                <img
                    className="Header--profile"
                    src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
                    alt="profile"
            // onClick={}
                />   
            </div>
            <div className="Header_down">
                <input
                    type="text" 
                    placeholder="What's happening?"
                    onChange={(e) => {setInputFilterValue(e.target.value)}}
                />
                <button onClick={setHeaderInputValue(inputFilterValue)}>Cerca</button>
            </div>
        </div>
    )
};

export default Header;