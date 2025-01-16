import { useState } from "react";


export const useHelpStates = () => {
    const [stackInput, setStackInput] = useState<string>('');
    const [rolesInput, setRolesInput] = useState<string>('');
    const [linksInput, setLinksInput] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isChange, setIsChange] = useState<boolean>(false);

    
    return {
        stackInput,
        rolesInput,
        linksInput,
        isLoading,
        isChange,
        setStackInput,
        setRolesInput,
        setLinksInput,
        setIsLoading,
        setIsChange,
    };
};