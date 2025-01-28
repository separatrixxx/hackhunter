import styles from './CreateTeamBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { Input } from '../../Common/Input/Input';
import { EditItems } from '../../EditComponents/EditItems/EditItems';
import { handleInputChange, handleKeyDown } from '../../../helpers/add_input.helper';
import { Button } from '../../Buttons/Button/Button';
import { Toggle } from '../../Common/Toggle/Toggle';
import { checkCreateTeam } from '../../../helpers/create_team.helper';
import { useHelpStates } from '../../../hooks/useHelpStates';


export const CreateTeamBlock = (): JSX.Element => {
    const { router, dispatch, webApp, tgUser, user, token } = useSetup();
    const { name, description, roles, rolesInput, descriptionHunt, hunt, errorName, errorDescription,
        isLoading, setName, setDescription, setRoles, setRolesInput, setDescriptionHunt, setHunt,
        setErrorName, setErrorDesccription, setIsLoading } = useHelpStates();

    return (
        <div className={styles.createTeamBlock}>
            <Htag tag='l' className={styles.createTeamTitle}>
                {setLocale(tgUser?.language_code).create_team}
            </Htag>
            <Input placeholder={setLocale(tgUser?.language_code).name}
                value={name} name='name' ariaLabel='name'
                isError={errorName} handleChange={(e) => setName(e.target.value)} />
            <Input placeholder={setLocale(tgUser?.language_code).description}
                value={description} name='description' ariaLabel='description' isArea={true}
                isError={errorDescription} handleChange={(e) => setDescription(e.target.value)} />
            {
                roles.length > 0 &&
                <EditItems items={roles} setItems={setRoles} />
            }
            <Input placeholder={setLocale(tgUser?.language_code).roles}
                value={rolesInput} type='text' name='roles' ariaLabel='roles'
                handleChange={(e) => handleInputChange(e, roles, setRolesInput, setRoles)}
                handleKeyPress={(e) => handleKeyDown(e, rolesInput, roles, setRolesInput, setRoles)} />
            <Input placeholder={setLocale(tgUser?.language_code).job_description}
                value={descriptionHunt} name='job description' ariaLabel='job description' isArea={true}
                handleChange={(e) => setDescriptionHunt(e.target.value)} />
            <Toggle text={setLocale(tgUser?.language_code).looking_for_teammates} checked={hunt}
                toggleChecked={() => setHunt(!hunt)} />
            <Button className={styles.createTeamButton} text={setLocale(tgUser?.language_code).create}
                type='primary' isLoading={isLoading} onClick={() => checkCreateTeam({
                    router: router,
                    dispatch: dispatch,
                    webApp: webApp,
                    tgUser: tgUser,
                    token: token,
                    name: name.trim(),
                    description: description.trim(),
                    roles: roles,
                    descriptionHunt: descriptionHunt.trim(),
                    hunt: hunt,
                    setErrorName: setErrorName,
                    setErrorDesccription: setErrorDesccription,
                    setIsLoading: setIsLoading,
                })} />
        </div>
    );
};
