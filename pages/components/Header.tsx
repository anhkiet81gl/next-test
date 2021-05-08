import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

function Header(){
    return(
        <div className="mb-5">
            <nav className="navbar navbar-dark bg-dark">
                <ul className="nav">
                    <Link href="/">
                        <li className="nav-item">
                            <a className="nav-link text-white font-weight-bold" href="">Home</a>
                        </li>
                    </Link>
                    <Link href="/todolist">
                        <li className="nav-item">
                            <a className="nav-link text-white font-weight-bold" href="">Todo</a>
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
};
export default Header;