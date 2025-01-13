import { TeamItemProps } from './TeamsItem.props';
import styles from './TeamItem.module.css';
import Link from 'next/link';
import { Htag } from '../../Common/Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import CalendarIcon from './calendar.svg';
import LocationIcon from './location.svg';
import RolesIcon from './roles.svg';
import { isWebPlatform } from '../../../helpers/platform.helper';
import { Roles } from '../../Common/Roles/Roles';
import { ExpBlock } from '../../BlockComponents/ExpBlock/ExpBlock';
import cn from 'classnames';


export const TeamItem = ({ team, search, scrollPosition }: TeamItemProps): JSX.Element => {
    const { webApp } = useSetup();

    return (
        <Link href={{
            pathname: `/team/${team.id}`,
            query: {
                type: 'teams',
                search: search,
                scrollPosition: scrollPosition,
            }
        }} className={cn(styles.teamItem, {
            [styles.weba]: isWebPlatform(webApp?.platform),
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
                <Roles roles={team.roles_hunt} />
            </div>
            <ExpBlock className={styles.teamExpBlock} exp={team.exp} />
        </Link>
    );
};
