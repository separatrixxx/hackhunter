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
import cn from 'classnames';
import { ExpBlock } from '../../BlockComponents/ExpBlock/ExpBlock';


export const UserMainInfo = ({ user, isProfile }: UserMainInfoProps): JSX.Element => {
    const { webApp, tgUser } = useSetup();

    let Icon = ShareIcon;

    if (isProfile) {
        Icon = EditIcon;
    }

    return (
        <InfoBlock isTop={true}>
            <div className={styles.infoDiv}>
                <div className={styles.userImageDiv}>
                    <Image className={styles.userImage} draggable='false'
                        loader={() => user.photo_url || '/UserImage.webp'}
                        src={user.photo_url || '/UserImage.webp'}
                        alt={`user ${user.first_name} ${user.second_name} image`}
                        width={1}
                        height={1}
                        unoptimized={true}
                    />
                    <ExpBlock className={styles.userExpBlock} exp={user.exp} />
                </div>
                <div className={styles.nameDiv}>
                    <Htag tag='m' className={styles.name}>
                        {user.first_name + ' ' + (user.second_name || '')}
                    </Htag>
                    {
                        user.roles && <Roles roles={user.roles} />
                    }
                    <Htag tag='xs' className={styles.location}>
                        <LocationIcon />
                        {'Москва'}
                    </Htag>
                </div>
                <Icon className={cn(styles.shareIcon, {
                    [styles.weba]: isWebPlatform(webApp?.platform),
                })} onClick={() => { }} />
            </div>
            {
                user.about && <DescriptionBlock description={user.about} />
            }
            {
                !isProfile &&
                <div className={styles.buttonsDiv}>
                    <Button text={setLocale(tgUser?.language_code).invite_to_the_team}
                        type='white' onClick={() => { }} />
                    <Button text={setLocale(tgUser?.language_code).message}
                        type='primary' onClick={() => { }} />
                </div>
            }
        </InfoBlock>
    );
};
