import { TeamItemProps } from './TeamsItem.props';
import styles from './TeamItem.module.css';
import Link from 'next/link';
import { Htag } from '../../Common/Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import CalendarIcon from './calendar.svg';
import LocationIcon from './location.svg';
import RolesIcon from './roles.svg';
import LogoIcon from './logo.svg';
import cn from 'classnames';


export const TeamItem = ({ team }: TeamItemProps): JSX.Element => {
    const { webApp } = useSetup();

    return (
        <Link href={`/team/${team.id}`} className={cn(styles.teamItem, {
            [styles.weba]: webApp?.platform === 'weba',
        })} aria-label={`team ${name} link`}>
            <Htag tag='s' className={styles.teamName}>
                {team.name}
            </Htag>
            <Htag tag='xs' className={styles.teamInfoText}>
                <CalendarIcon />
                {'AI Product Hackathon'}
            </Htag>
            <Htag tag='xs' className={styles.teamInfoText}>
                <LocationIcon />
                {'Онлайн 23-25 марта'}
            </Htag>
            <div className={cn(styles.teamInfoText, styles.teamInfoContainer)}>
                <RolesIcon />
                <Htag tag='xs' className={styles.rolesContainer}>
                    {team.roles_hunt.map(r => (
                        <span key={r} style={{ background: `var(--${r.toLowerCase().replace(' ', '_')}Color)` }}>
                            {r}
                        </span>
                    ))}
                </Htag>
            </div>
            <div className={styles.expBlock}>
                <LogoIcon />
                <Htag tag='xxs'>
                        {team.exp}
                </Htag>
            </div>
        </Link>
    );
};
