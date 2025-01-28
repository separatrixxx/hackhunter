import { useState } from "react";


export const useHelpStates = () => {
    const [stackInput, setStackInput] = useState<string>('');
    const [rolesInput, setRolesInput] = useState<string>('');
    const [linksInput, setLinksInput] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isChange, setIsChange] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [roles, setRoles] = useState<string[]>([]);
    const [descriptionHunt, setDescriptionHunt] = useState<string>('');
    const [hunt, setHunt] = useState<boolean>(true);
    const [errorName, setErrorName] = useState<boolean>(false);
    const [errorDescription, setErrorDesccription] = useState<boolean>(false);
    
    return {
        stackInput,
        rolesInput,
        linksInput,
        isLoading,
        isChange,
        name,
        description,
        roles,
        descriptionHunt,
        hunt,
        errorName,
        errorDescription,
        setStackInput,
        setRolesInput,
        setLinksInput,
        setIsLoading,
        setIsChange,
        setName,
        setDescription,
        setRoles,
        setDescriptionHunt,
        setHunt,
        setErrorName,
        setErrorDesccription,
    };
};