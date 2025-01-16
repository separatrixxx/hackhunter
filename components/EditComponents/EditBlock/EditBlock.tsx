import styles from './EditBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { useEffect, useState } from 'react';
import { Input } from '../../Common/Input/Input';
import { Button } from '../../Buttons/Button/Button';
import { editAddItem, editUser } from '../../../helpers/edit.helper';
import { EditItems } from '../EditItems/EditItems';
import { useHelpStates } from '../../../hooks/useHelpStates';


export const EditBlock = (): JSX.Element => {
    const { router, dispatch, webApp, tgUser, user, token } = useSetup();
    const { stackInput, rolesInput, linksInput, isLoading, isChange,
        setStackInput, setRolesInput, setLinksInput, setIsLoading,
        setIsChange } = useHelpStates();

    const [about, setAbout] = useState<string>(user.user.about || '');
    const [stack, setStack] = useState<string[]>(user.user.stack || []);
    const [roles, setRoles] = useState<string[]>(user.user.roles || []);
    const [links, setLinks] = useState<string[]>(user.user.links || []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, inputValue: string, items: string[],
        setInputValue: React.Dispatch<React.SetStateAction<string>>, setItems: React.Dispatch<React.SetStateAction<string[]>>) => {
        const value = e.target.value;

        if (value.endsWith(' ') || value.endsWith('\n')) {
            editAddItem(value, items, setItems);
            setInputValue('');
        } else {
            setInputValue(value);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, inputValue: string, items: string[],
        setInputValue: React.Dispatch<React.SetStateAction<string>>, setItems: React.Dispatch<React.SetStateAction<string[]>>) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            editAddItem(inputValue, items, setItems);
            setInputValue('');
        }
    };

    useEffect(() => {
        const isStackEqual = JSON.stringify(stack) === JSON.stringify(user.user.stack);
        const isRolesEqual = JSON.stringify(roles) === JSON.stringify(user.user.roles);
        const isLinksEqual = JSON.stringify(links) === JSON.stringify(user.user.links);
        const isAboutEqual = about === user.user.about;
            
        setIsChange(!isAboutEqual || !isStackEqual || !isRolesEqual || !isLinksEqual);
    }, [about, stack, roles, links, user.user, setIsChange]);


    return (
        <div className={styles.editBlock}>
            <Htag tag='l' className={styles.editTitle}>
                {setLocale(tgUser?.language_code).edit_profile}
            </Htag>
            <Input placeholder={setLocale(tgUser?.language_code).description}
                value={about} name='description' ariaLabel='description' isArea={true}
                handleChange={(e) => setAbout(e.target.value)} />
            {
                stack.length > 0 &&
                    <EditItems items={stack} setItems={setStack} />
            }
            <Input placeholder={setLocale(tgUser?.language_code).stack}
                value={stackInput} type='text' name='stack' ariaLabel='stack'
                handleChange={(e) => handleInputChange(e, stackInput, stack, setStackInput, setStack)}
                handleKeyPress={(e) => handleKeyDown(e, stackInput, stack, setStackInput, setStack)}
            />
            {
                roles.length > 0 &&
                    <EditItems items={roles} setItems={setRoles} />
            }
            <Input placeholder={setLocale(tgUser?.language_code).roles}
                value={rolesInput} type='text' name='roles' ariaLabel='roles'
                handleChange={(e) => handleInputChange(e, rolesInput, roles, setRolesInput, setRoles)}
                handleKeyPress={(e) => handleKeyDown(e, rolesInput, roles, setRolesInput, setRoles)} />
            {
                links.length > 0 &&
                    <EditItems items={links} setItems={setLinks} />
            }
            <Input placeholder={setLocale(tgUser?.language_code).links}
                value={linksInput} type='text' name='links' ariaLabel='links'
                handleChange={(e) => handleInputChange(e, linksInput, links, setLinksInput, setLinks)}
                handleKeyPress={(e) => handleKeyDown(e, linksInput, links, setLinksInput, setLinks)} />
            <Button className={styles.editButton} text={setLocale(tgUser?.language_code)[isChange ? 'save_changes' : 'back']}
                type={isChange ? 'primary' : 'white'} isLoading={isLoading} onClick={() => {
                    if (isChange) {
                        editUser({
                            dispatch: dispatch,
                            webApp: webApp,
                            tgUser: tgUser,
                            token: token,
                            about: about.trim(),
                            stack: stack,
                            roles: roles,
                            links: links,
                            setIsLoading: setIsLoading,
                        })
                    } else {
                        router.push('/profile');
                    }
                }} />
        </div>
    );
};
