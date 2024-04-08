import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from '../Navigation/Navigation.module.css'


const Navigation = () => {

    const getNavLinkClassName = ({ isActive }) =>
    clsx(css.navLink, getNavLinkClassName, {
      [css.active]: isActive,
    });

    return (
        <header className={css.header}>
            <nav className={css.nav}>
                <NavLink to="/" className={getNavLinkClassName}>Home</NavLink>
                <NavLink to="/movies" className={getNavLinkClassName} >movies</NavLink>
            </nav>
        </header>
    )
}

export default Navigation