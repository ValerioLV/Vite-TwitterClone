import "./index.css";

const Header = () => {
    return(
        <div className="Header">
            <img
            className="Header--profile"
            src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
            alt="profile"
            // onClick={}
            />
            <img
            className="Header--logo"
            src="https://img.icons8.com/color/256/twitter--v1.png"
            alt="twitter logo"
            />
        </div>
    )
};

export default Header;