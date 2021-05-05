import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css'

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div className="mb-5">
        <nav className="navbar navbar-dark bg-dark">
            <ul className="nav">
                <Link href="/">
                    <li className="nav-item">
                        <a className="nav-link text-white font-weight-bold" href="">Home</a>
                    </li>
                </Link>
                <Link href="/movie">
                    <li className="nav-item">
                        <a className="nav-link text-white font-weight-bold" href="">Movie</a>
                    </li>
                </Link>
            </ul>
        </nav>
    </div>
);

export default Header;