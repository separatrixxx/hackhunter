import { TeamsListProps } from './TeamsList.props';
import styles from './TeamsList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { TeamItem } from '../TeamItem/TeamsItem';
import { Spinner } from '../../Common/Spinner/Spinner';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { transliterate } from '../../../helpers/transliteration.helper';
import { useScrollPosition } from '../../../hooks/useScrollPosition';


export const TeamsList = ({ search }: TeamsListProps): JSX.Element => {
    const { tgUser, teams } = useSetup();

    const filteredTeams = teams.status === 'ok'
        ? teams.teams.filter(team => {
            const searchText = search.trim().toLowerCase();

            if (!searchText) return true;

            const searchVariants = [
                searchText,
                transliterate(searchText, 'en-to-ru'),
                transliterate(searchText, 'ru-to-en'),
            ];

            const matches = (text: string) => searchVariants.some(variant => text.toLowerCase().includes(variant));

            return (
                matches(team.name) ||
                team.roles_hunt.some(role => matches(role))
            );
        })
        : [];

    const { elementRef, scrollPosition, handleScroll } = useScrollPosition({
        dependencies: [teams.status, filteredTeams.length]
    });

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
        <div ref={elementRef} className={styles.teamsList} onScroll={handleScroll}>
            {filteredTeams.reverse().map(team => (
                <TeamItem key={team.id} team={team} search={search}
                    scrollPosition={scrollPosition} />
            ))}
        </div>
    );
};
