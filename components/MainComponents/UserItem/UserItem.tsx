import { UserItemProps } from './UserItem.props';
import styles from './UserItem.module.css';
import Link from 'next/link';
import { Htag } from '../../Common/Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import { isWebPlatform } from '../../../helpers/platform.helper';
import LocationIcon from './location.svg';
import StackIcon from './stack.svg';
import LogoIcon from './logo.svg';
import Image from 'next/image';
import cn from 'classnames';


export const UserItem = ({ user }: UserItemProps): JSX.Element => {
    const { webApp } = useSetup();

    return (
        <Link href={`/user/${user.id}`} className={cn(styles.userItem, {
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
                    user.stack && <div className={cn(styles.userInfoText, styles.userInfoContainer)}>
                        <StackIcon />
                        <Htag tag='xs' className={styles.rolesContainer}>
                            {user.stack.map(r => (
                                <span key={r} style={{ background: `var(--${r.toLowerCase().replace(' ', '_')}Color)` }}>
                                    {r}
                                </span>
                            ))}
                        </Htag>
                    </div>
                }
                <Htag tag='xs' className={styles.userInfoText}>
                    <LocationIcon />
                    {'Москва'}
                </Htag>
            </div>
            <div className={styles.expBlock}>
                <LogoIcon />
                <Htag tag='xxs'>
                    {user.exp || 0}
                </Htag>
            </div>
        </Link>
    );
};
