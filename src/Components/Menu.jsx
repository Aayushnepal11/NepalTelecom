import {ReactComponent as Serach} from './img/icons8-search.svg'

const white = '#fff';

export function Menu() {
    return (
        <nav className="menu">
            <ul className="left">
                <li className="nav-item"><a href="" className="nav-link active">Home</a></li>
                <li className="nav-item"><a href="" className="nav-link">Fixed Line</a></li>
                <li className="nav-item"><a href="" className="nav-link">Mobile</a></li>
                <li className="nav-item"><a href="" className="nav-link">Internet</a></li>
                <li className="nav-item"><a href="" className="nav-link">VAS</a></li>
            </ul>
            <div className="serach">
                <Serach fill={white} stroke='none' width='25px' />
            </div>
        </nav>
    );
}