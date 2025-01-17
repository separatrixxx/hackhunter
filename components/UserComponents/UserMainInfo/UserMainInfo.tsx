import { UserMainInfoProps } from './UserMainInfo.props';
import styles from './UserMainInfo.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { InfoBlock } from '../../BlockComponents/InfoBlock/InfoBlock';
import { DescriptionBlock } from '../../BlockComponents/DescriptionBlock/DescriptionBlock';
import Image from 'next/image';
import { Htag } from '../../Common/Htag/Htag';
import { Roles } from '../../Common/Roles/Roles';
import LocationIcon from './location.svg';
import ShareIcon from './share.svg';
import EditIcon from './edit.svg';
import { isWebPlatform } from '../../../helpers/platform.helper';
import { Button } from '../../Buttons/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';
import { ExpBlock } from '../../BlockComponents/ExpBlock/ExpBlock';
import { openMessage } from '../../../helpers/links.helper';
import { Skeleton } from '../../Common/Skeleton/Skeleton';
import cn from 'classnames';


export const UserMainInfo = ({ user, isProfile }: UserMainInfoProps): JSX.Element => {
    const { router, webApp, tgUser } = useSetup();

    let Icon = ShareIcon;

    if (isProfile) {
        Icon = EditIcon;
    }

    return (
        <InfoBlock isTop={true}>
            <div className={styles.infoDiv}>
                <div className={styles.userImageDiv}>
                    <Skeleton width={60} height={60} isReady={Boolean(user.photo_url)} isRound={true}>
                        <Image className={styles.userImage} draggable='false'
                            loader={() => user.photo_url || '/UserImage.webp'}
                            src={user.photo_url || '/UserImage.webp'}
                            alt={`user ${user.first_name} ${user.second_name} image`}
                            width={1}
                            height={1}
                            unoptimized={true}
                        />
                        <ExpBlock className={styles.userExpBlock} exp={user.exp} />
                    </Skeleton>
                </div>
                <div className={styles.nameDiv}>
                    <Skeleton width={200} height={28} isReady={Boolean(user.first_name)}>
                        <Htag tag='m' className={styles.name}>
                            {user.first_name + ' ' + (user.second_name || '')}
                        </Htag>
                    </Skeleton>
                    <Skeleton width={160} height={28} isReady={Boolean(user.roles)}>
                        {
                            user.roles && user.roles.length > 0 && <Roles roles={user.roles} />
                        }
                    </Skeleton>
                    <Htag tag='xs' className={styles.location}>
                        <LocationIcon />
                        {'Москва'}
                    </Htag>
                </div>
                <Icon className={cn(styles.shareIcon, {
                    [styles.weba]: isWebPlatform(webApp?.platform),
                })} onClick={() => isProfile ? router.push('/edit') : ''} />
            </div>
            <Skeleton width={200} height={18.4} isReady={Boolean(user.about)}>
                {
                    user.about && <DescriptionBlock description={user.about} />
                }
            </Skeleton>
            {
                !isProfile &&
                <div className={styles.buttonsDiv}>
                    <Button text={setLocale(tgUser?.language_code).invite_to_the_team}
                        type='white' onClick={() => { }} />
                    <Button text={setLocale(tgUser?.language_code).message}
                        type='primary' onClick={() => openMessage({
                            webApp: webApp,
                            tgUser: tgUser,
                            fisrtName: user.first_name,
                            secondName: user.second_name,
                            username: user.username,
                        })} />
                </div>
            }
        </InfoBlock>
    );
};
