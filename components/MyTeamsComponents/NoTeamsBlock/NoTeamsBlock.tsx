import styles from './NoTeamsBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { Button } from '../../Buttons/Button/Button';
import Image from 'next/image';


export const NoTeamsBlock = (): JSX.Element => {
    const { router, tgUser } = useSetup();

    return (
        <div className={styles.noTeamsBlock}>
            <Image className={styles.image} draggable='false'
                loader={() => '/HumsterImage.webp'}
                src='/HumsterImage.webp'
                alt='humster image'
                width={1}
                height={1}
                unoptimized={true}
            />
            <Htag tag='m' className={styles.title}>
                {setLocale(tgUser?.language_code).there_are_no_teams_yet}
            </Htag>
            <Htag tag='xs' className={styles.text}>
                {setLocale(tgUser?.language_code).you_can_create_your_own_team}
            </Htag>
            <div className={styles.buttonsDiv}>
                <Button text={setLocale(tgUser?.language_code).find}
                    type='white' onClick={() => router.push('/')} />
                <Button text={setLocale(tgUser?.language_code).create}
                    type='primary' onClick={() => router.push('/create_team')} />
            </div>
        </div>
    );
};
