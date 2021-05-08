import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = props => (
    <div>
        <Header/>
        <div className="container d-flex">
            {props.children}
        </div>
    </div>
);

export default Layout;