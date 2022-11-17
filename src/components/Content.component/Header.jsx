
import notificaction from "../../../src/images/new.svg"
import userimg from "../../../src/images/userimg.png"

export let Header = () => {

    return (
        <div className="header">
            <h2 className="header__title"> Overview</h2>
            <div className="header__content">
                <form className="header__form">
                    <input className="header__content__input" type="text" name="" id="" />
                </form>
                <button className="notification"><img src={notificaction} alt="notification icon" width={16} height={16} /></button>
                <span className="line"></span>
                <span className="header__name"> Jones Ferdinand</span>
                <img className="header__img" src={userimg} alt="user img" width={40} height={40} />
            </div>
        </div>
    )

} 