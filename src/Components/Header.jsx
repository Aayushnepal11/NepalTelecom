import logo from './img/logo.png';
import { Menu } from './Menu';
export function Header() {
    return (
        <div>
            <header className="header">
                <div className="header__logo">
                    <img src={logo} alt="Nepal Telecom" />
                </div>
                <Menu />
            </header>
        </div>
    )
}