import styles from './Navbar.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { NavbarButton } from '../NavbarButton/NavbarButton';



export const Navbar = (): JSX.Element => {
    const { webApp, tgUser } = useSetup();

    return (
        <nav className={styles.navbar}>
            <NavbarButton type='find' text={setLocale(tgUser?.language_code).find} link='/' />
            <NavbarButton type='teams' text={setLocale(tgUser?.language_code).my_teams} link='/my_teams' />
            <NavbarButton type='profile' text={setLocale(tgUser?.language_code).profile} link='/profile' />
        </nav>
    );
};
