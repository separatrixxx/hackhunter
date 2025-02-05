import { NavbarButtonProps } from './NavbarButton.props';
import styles from './NavbarButton.module.css';
import FindIcon from './find.svg';
import TeamsIcon from './teams.svg';
import ProfileIcon from './profile.svg';
import Link from 'next/link';
import { Htag } from '../../Common/Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import { isWebPlatform } from '../../../helpers/platform.helper';
import cn from 'classnames';


export const NavbarButton = ({ type, text, link }: NavbarButtonProps): JSX.Element => {
    const { router, webApp } = useSetup();

    return (
        <Link href={link} className={cn(styles.navbarButton, {
            [styles.active]: router.pathname === link,
            [styles.weba]: isWebPlatform(webApp?.platform),
        })} aria-label={`navbar ${type} link`}>
            <span className={styles.navbarButtonIcon}>
                {
                    type === 'find' ?
                        <FindIcon />
                    : type === 'teams' ?
                        <TeamsIcon />
                    : <ProfileIcon />
                }
            </span>
            <Htag tag='xxs' className={styles.navbarButtonText}>
                {text}
            </Htag>
        </Link>
    );
};
