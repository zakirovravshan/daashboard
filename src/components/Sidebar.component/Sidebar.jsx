import logo from "../../../src/images/logo.svg"
import { Sidebarlist } from "../Sidebar.component/Sidebarlist"

export let Sidebar = () => {
    
    return (
        <div className="sidebar">
            <a className="logo" href="https://www.youtube.com/"> <img className="logo__img" src={logo} alt="" /> <p className="logo__text">Dashboard Kit</p></a>
            <div className="sidebar__top">
            <Sidebarlist/>
            </div>
        </div>
    )

} 