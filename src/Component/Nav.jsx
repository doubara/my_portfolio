import { Link } from "react-router-dom"
const Nav = (props) =>{
    return <nav className="flex px-6 py-4">
        <span className="flex-1">Kieri Ayibadoubara</span>
        <ul className="ml-auto font-semibold flex-1 flex justify-end gap-2">
            <li>
                <Link to='#projects'>Projects</Link>
            </li>
            <li>
                <Link to='#tools'>Tools</Link>
            </li>
            <li>
                <Link to='#contact'>Contact</Link>
            </li>
        </ul>
    </nav>
};

export default Nav;