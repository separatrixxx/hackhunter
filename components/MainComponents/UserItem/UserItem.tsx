import { UserItemProps } from './UserItem.props';
import styles from './UserItem.module.css';
import Link from 'next/link';
import { Htag } from '../../Common/Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import { isWebPlatform } from '../../../helpers/platform.helper';
import LocationIcon from './location.svg';
import RolesIcon from './roles.svg';
import Image from 'next/image';
import { Roles } from '../../Common/Roles/Roles';
import { ExpBlock } from '../../BlockComponents/ExpBlock/ExpBlock';
import cn from 'classnames';


export const UserItem = ({ user, search, scrollPosition }: UserItemProps): JSX.Element => {
    const { webApp } = useSetup();

    return (
        <Link href={{
            pathname: `/user/${user.id}`,
            query: {
                type: 'people',
                search: search,
                scrollPosition: scrollPosition,
            }
        }} className={cn(styles.userItem, {
            [styles.weba]: isWebPlatform(webApp?.platform),
        })} aria-label={`user ${user.first_name} ${user.second_name} link`}>
            <Image className={styles.userImage} draggable='false'
                loader={() => user.photo_url || '/UserImage.webp'}
                src={user.photo_url || '/UserImage.webp'}
                alt={`user ${user.first_name} ${user.second_name} image`}
                width={1}
                height={1}
                unoptimized={true}
            />
            <div className={styles.userInfoDiv}>
                <Htag tag='s'>
                    {user.first_name + ' ' + (user.second_name || '')}
                </Htag>
                {
                    user.roles && <div className={cn(styles.userInfoText, styles.userInfoContainer)}>
                        <RolesIcon />
                        <Roles roles={user.roles} />
                    </div>
                }
                <Htag tag='xs' className={styles.userInfoText}>
                    <LocationIcon />
                    {'Москва'}
                </Htag>
            </div>
            <ExpBlock className={styles.userExpBlock} exp={user.exp} />
        </Link>
    );
};
