import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import SearchIcon from './search.svg';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { useState, useEffect } from 'react';


export const Search = ({ type, search, setSearch }: SearchProps): JSX.Element => {
    const { router } = useSetup();
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
            <input className={styles.search}
                placeholder={setLocale(router.locale).search[type]}
                value={localSearch}
                onChange={handleInputChange}
                type="text"
                name="search"
                aria-label="search"
                readOnly={true}
                onFocus={(e) => e.target.removeAttribute('readonly')}
                autoComplete="off"
            />
        </div>
    );
};
