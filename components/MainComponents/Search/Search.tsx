import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import SearchIcon from './search.svg';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { useState, useEffect } from 'react';
import { Input } from '../../Common/Input/Input';


export const Search = ({ type, search, setSearch }: SearchProps): JSX.Element => {
    const { router, tgUser } = useSetup();
    
    const [localSearch, setLocalSearch] = useState<string>(search);

    useEffect(() => {
        setLocalSearch(search);
    }, [search]);

    useEffect(() => {
        const handler = setTimeout(() => {
            setSearch(localSearch);
        }, 200);

        return () => clearTimeout(handler);
    }, [localSearch, setSearch]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalSearch(e.target.value);
    };

    return (
        <div className={styles.searchWrapper}>
            <SearchIcon className={styles.searchIcon} />
            <Input className={styles.search} placeholder={setLocale(tgUser?.language_code).search[type]}
                value={localSearch} type='text' name='search' ariaLabel='search'
                handleChange={handleInputChange} />
        </div>
    );
};
