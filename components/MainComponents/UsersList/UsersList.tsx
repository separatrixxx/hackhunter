import { UsersListProps } from './UsersList.props';
import styles from './UsersList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Spinner } from '../../Common/Spinner/Spinner';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { UserItem } from '../UserItem/UserItem';
import { transliterate } from '../../../helpers/transliteration.helper';
import { useScrollPosition } from '../../../hooks/useScrollPosition';


export const UsersList = ({ search }: UsersListProps): JSX.Element => {
    const { tgUser, users } = useSetup();

    const filteredUsers = users.status === 'ok'
        ? users.users.filter(user => {
            const searchText = search.trim().toLowerCase();
            if (!searchText) return true;

            const searchVariants = [
                searchText,
                transliterate(searchText, 'en-to-ru'),
                transliterate(searchText, 'ru-to-en'),
            ];

            const matches = (text: string) => searchVariants.some(variant => text.toLowerCase().includes(variant));

            return (
                matches(user.first_name) ||
                matches(user.second_name) ||
                (user.roles && user.roles.some(role => matches(role)))
            );
        })
        : [];

    const { elementRef, scrollPosition, handleScroll } = useScrollPosition({
        dependencies: [users.status, filteredUsers.length]
    });

    if (users.status !== 'ok') {
        return <Spinner />;
    } else if (filteredUsers.length === 0) {
        return (
            <Htag tag="s" className={styles.noFound}>
                {setLocale(tgUser?.language_code).no_users_found}
            </Htag>
        );
    }

    return (
        <div ref={elementRef} className={styles.usersList} onScroll={handleScroll}>
            {filteredUsers.filter(u => u.id !== tgUser?.id).reverse().map((user, i) => (
                <UserItem key={i} user={user} search={search}
                    scrollPosition={scrollPosition} />
            ))}
        </div>
    );
};
