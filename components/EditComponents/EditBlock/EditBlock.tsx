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
import { Toggle } from '../../Common/Toggle/Toggle';


export const EditBlock = (): JSX.Element => {
    const { router, dispatch, webApp, tgUser, user, token } = useSetup();
    const { stackInput, rolesInput, linksInput, isLoading, isChange,
        setStackInput, setRolesInput, setLinksInput, setIsLoading,
        setIsChange } = useHelpStates();

    const [about, setAbout] = useState<string>(user.user.about || '');
    const [country, setCountry] = useState<string>(user.user.location?.country || '');
    const [city, setCity] = useState<string>(user.user.location?.city || '');
    const [stack, setStack] = useState<string[]>(user.user.stack || []);
    const [roles, setRoles] = useState<string[]>(user.user.roles || []);
    const [links, setLinks] = useState<string[]>(user.user.links || []);
    const [whoIs, setWhoIs] = useState<boolean>(user.user.who_is || true);

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
        const isAboutEqual = about === user.user.about;
        const isCountryEqual = user.user.location && (country === user.user.location.country);
        const isCityEqual = user.user.location && (city === user.user.location.city);
        const isStackEqual = JSON.stringify(stack) === JSON.stringify(user.user.stack);
        const isRolesEqual = JSON.stringify(roles) === JSON.stringify(user.user.roles);
        const isLinksEqual = JSON.stringify(links) === JSON.stringify(user.user.links);
        const isWhoIsEqual = whoIs === user.user.who_is;

        setIsChange(!isCountryEqual || !isCityEqual || !isAboutEqual || !isStackEqual
            || !isRolesEqual || !isLinksEqual || !isWhoIsEqual);
    }, [about, country, city, stack, roles, links, whoIs, user.user, setIsChange]);


    return (
        <div className={styles.editBlock}>
            <Htag tag='l' className={styles.editTitle}>
                {setLocale(tgUser?.language_code).edit_profile}
            </Htag>
            <Input placeholder={setLocale(tgUser?.language_code).description}
                value={about} name='description' ariaLabel='description' isArea={true}
                handleChange={(e) => setAbout(e.target.value)} />
            <Input placeholder={setLocale(tgUser?.language_code).country}
                value={country} name='country' ariaLabel='country'
                handleChange={(e) => setCountry(e.target.value)} />
            <Input placeholder={setLocale(tgUser?.language_code).city}
                value={city} name='city' ariaLabel='city'
                handleChange={(e) => setCity(e.target.value)} />
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
            <Toggle text={setLocale(tgUser?.language_code).looking_for_a_team} checked={whoIs}
                toggleChecked={() => setWhoIs(!whoIs)} />
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
                            country: country.trim(),
                            city: city.trim(),
                            whoIs: whoIs,
                            setIsLoading: setIsLoading,
                        })
                    } else {
                        router.push('/profile');
                    }
                }} />
        </div>
    );
};
