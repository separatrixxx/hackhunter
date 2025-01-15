import styles from './FiltersBar.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { useState } from 'react';
import FiltersIcon from './filters.svg';
import { isWebPlatform } from '../../../helpers/platform.helper';
import { FiltersList } from '../FiltersList/FiltersList';
import cn from 'classnames';
import { Htag } from '../../Common/Htag/Htag';


export const FiltersBar = (): JSX.Element => {
    const { webApp, filters } = useSetup();

    const [active, setActive] = useState<boolean>(false);

    const rolesCounter = filters.roles.length > 0 ? 1 : 0;
    const stackCounter = filters.stack.length > 0 ? 1 : 0;
    const expCounter = (filters.exp.from > 0 || filters.exp.to < 100) ? 1 : 0;
    const filtersCounter = rolesCounter + stackCounter + expCounter;
    
    return (
        <>
            <div className={styles.filtersBar}>
                <div className={cn(styles.filterButton, {
                    [styles.weba]: isWebPlatform(webApp?.platform),
                })} onClick={() => setActive(true)}>
                    <FiltersIcon />
                    {
                        filtersCounter > 0 &&
                            <Htag tag='xxs' className={styles.filtersCounter}>
                                {filtersCounter}
                            </Htag>
                    }
                </div>
            </div>
            <FiltersList active={active} setActive={setActive} />
        </>
    );
};
