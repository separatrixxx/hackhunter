import { UsersListProps } from './UsersList.props';
import styles from './UsersList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Spinner } from '../../Common/Spinner/Spinner';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { UserItem } from '../UserItem/UserItem';


export const UsersList = ({ search }: UsersListProps): JSX.Element => {
    const { tgUser, users } = useSetup();

    const filteredUsers = users.status === 'ok'
        ? users.users.filter(user => {
            const searchText = search.trim().toLowerCase();
            return (
                !searchText ||
                user.first_name.toLowerCase().includes(searchText) ||
                user.second_name.toLowerCase().includes(searchText) ||
                user.roles.some(role => role.toLowerCase().includes(searchText))
            );
        })
        : [];

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
        <div className={styles.usersList}>
            {filteredUsers.map(user => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    );
};
