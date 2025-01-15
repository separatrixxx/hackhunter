import styles from './EditBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { useState } from 'react';
import { Input } from '../../Common/Input/Input';
import { Button } from '../../Buttons/Button/Button';
import { editUser } from '../../../helpers/edit.helper';
import { EditItems } from '../EditItems/EditItems';


export const EditBlock = (): JSX.Element => {
    const { dispatch, webApp, tgUser, user, token } = useSetup();

    const [about, setAbout] = useState<string>(user.user.about || '');
    const [stack, setStack] = useState<string[]>(user.user.stack || []);
    const [stackInput, setStackInput] = useState<string>('');
    const [roles, setRoles] = useState<string[]>(user.user.roles || []);
    const [rolesInput, setRolesInput] = useState<string>('');
    const [links, setLinks] = useState<string[]>(user.user.links || []);
    const [linksInput, setLinksInput] = useState<string>('');

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, inputValue: string, items: string[],
        setInputValue: React.Dispatch<React.SetStateAction<string>>, setItems: React.Dispatch<React.SetStateAction<string[]>>) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            
            if (inputValue.trim()) {
                setItems([...items, inputValue.trim()]);
                setInputValue('');
            }
        }
    };

    return (
        <div className={styles.editBlock}>
            <Htag tag='l' className={styles.editTitle}>
                {setLocale(tgUser?.language_code).edit_profile}
            </Htag>
            <Input placeholder={setLocale(tgUser?.language_code).description}
                value={about} type='text' name='description' ariaLabel='description'
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setAbout(e.target.value)} />
            {
                stack.length > 0 &&
                    <EditItems items={stack} setItems={setStack} />
            }
            <Input placeholder={setLocale(tgUser?.language_code).stack}
                value={stackInput} type='text' name='stack' ariaLabel='stack'
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setStackInput(e.target.value)}
                handleKeyPress={(e) => handleKeyDown(e, stackInput, stack, setStackInput, setStack)}
            />
            {
                roles.length > 0 &&
                    <EditItems items={roles} setItems={setRoles} />
            }
            <Input placeholder={setLocale(tgUser?.language_code).roles}
                value={rolesInput} type='text' name='roles' ariaLabel='roles'
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setRolesInput(e.target.value)}
                handleKeyPress={(e) => handleKeyDown(e, rolesInput, roles, setRolesInput, setRoles)} />
            {
                links.length > 0 &&
                    <EditItems items={links} setItems={setLinks} />
            }
            <Input placeholder={setLocale(tgUser?.language_code).links}
                value={linksInput} type='text' name='links' ariaLabel='links'
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setLinksInput(e.target.value)}
                handleKeyPress={(e) => handleKeyDown(e, linksInput, links, setLinksInput, setLinks)} />
            <Button className={styles.editButton} text={setLocale(tgUser?.language_code).save_changes}
                type='primary' isLoading={isLoading} onClick={() => editUser({
                    dispatch: dispatch,
                    webApp: webApp,
                    tgUser: tgUser,
                    token: token,
                    about: about,
                    stack: stack,
                    roles: roles,
                    links: links,
                    setIsLoading: setIsLoading,
                })} />
        </div>
    );
};