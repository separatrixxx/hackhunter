import styles from './EditBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { useState } from 'react';
import { Input } from '../../Common/Input/Input';
import { Button } from '../../Buttons/Button/Button';
import { editUser } from '../../../helpers/edit.helper';


export const EditBlock = (): JSX.Element => {
    const { dispatch, webApp, tgUser, user, token } = useSetup();

    const [about, setAbout] = useState<string>(user.user.about || '');
    const [stack, setStack] = useState<string>('');
    const [roles, setRoles] = useState<string>('');
    const [links, setLinks] = useState<string>('');

    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <div className={styles.editBlock}>
            <Htag tag='l' className={styles.editTitle}>
                {setLocale(tgUser?.language_code).edit_profile}
            </Htag>
            <Input placeholder={setLocale(tgUser?.language_code).description}
                value={about} type='text' name='description' ariaLabel='description'
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setAbout(e.target.value)} />
            <Input placeholder={setLocale(tgUser?.language_code).stack}
                value={stack} type='text' name='stack' ariaLabel='stack'
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setStack(e.target.value)} />
            <Input placeholder={setLocale(tgUser?.language_code).roles}
                value={roles} type='text' name='roles' ariaLabel='roles'
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setRoles(e.target.value)} />
            <Input placeholder={setLocale(tgUser?.language_code).links}
                value={links} type='text' name='links' ariaLabel='links'
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setLinks(e.target.value)} />
            <Button className={styles.editButton} text={setLocale(tgUser?.language_code).save_changes}
                type='primary' isLoading={isLoading} onClick={() => editUser({
                    dispatch: dispatch,
                    webApp: webApp,
                    tgUser: tgUser,
                    token: token,
                    user: user.user,
                    about: about,
                    setIsLoading: setIsLoading,
                })} />
        </div>
    );
};