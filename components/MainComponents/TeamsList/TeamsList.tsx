import { TeamsListProps } from './TeamsList.props';
import styles from './TeamsList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { TeamItem } from '../TeamsItem/TeamsItem';
import { Spinner } from '../../Common/Spinner/Spinner';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';


export const TeamsList = ({ search }: TeamsListProps): JSX.Element => {
    const { tgUser, teams } = useSetup();

    const filteredTeams = teams.status === 'ok'
        ? teams.teams.filter((team) => {
            const searchText = search.trim().toLowerCase();
            return (
                !searchText ||
                team.name.toLowerCase().includes(searchText) ||
                team.roles_hunt.some(role => role.toLowerCase().includes(searchText))
            );
        })
        : [];

    if (teams.status !== 'ok') {
        return <Spinner />;
    } else if (filteredTeams.length === 0) {
        return (
            <Htag tag="s" className={styles.noFound}>
                {setLocale(tgUser?.language_code).no_teams_found}
            </Htag>
        );
    }

    return (
        <div className={styles.teamsList}>
            {filteredTeams.map((team) => (
                <TeamItem key={team.id} team={team} />
            ))}
        </div>
    );
};
