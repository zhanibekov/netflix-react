import Search from "../../UI/Search/Search"
import styles from '.Header.module.scss'
const Header = () => {
    return (
        <div className={"styles.header"}>
        <div>
        <a href="/">
            <img src="" alt=" " />
        </a>
        <img src="https://www.freepnglogos.com/uploads/netflix-logo-history-png-33.png" height='200s' width="200" alt="netflix logo history png" 
        />
        <Search/>
        </div>
        <Profile/>
        </div>
    )
}
export default Header