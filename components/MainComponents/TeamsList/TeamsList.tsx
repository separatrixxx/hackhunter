import styles from './TeamsList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { TeamItem } from '../TeamsItem/TeamsItem';
import { Spinner } from '../../Common/Spinner/Spinner';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';


export const TeamsList = (): JSX.Element => {
    const { tgUser, teams } = useSetup();

    if (teams.status !== 'ok') {
        return <Spinner />
    } else if (teams.teams.length === 0) {
        return (
            <Htag tag='s' className={styles.noFound}>
                {setLocale(tgUser?.language_code).no_teams_found}
            </Htag>
        );
    }

    return (
        <div className={styles.teamsList}>
            {teams.teams.map(t => (
                <TeamItem key={t.id} team={t} />
            ))}
        </div>
    );
};
