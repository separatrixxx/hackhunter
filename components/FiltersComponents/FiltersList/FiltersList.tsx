import { FiltersListProps } from './FiltersList.props';
import styles from './FiltersList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { isWebPlatform } from '../../../helpers/platform.helper';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { Button } from '../../Buttons/Button/Button';
import { FiltersItem } from '../FiltersItem/FiltersItem';
import { setExp, setRoles, setStack } from '../../../features/filters/filtersSlice';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import { FiltersExp } from '../FiltersExp/FiltersExp';


export const FiltersList = ({ active, setActive }: FiltersListProps): JSX.Element => {
    const { dispatch, webApp, tgUser, filters } = useSetup();

    if (webApp) {
        if (active) {
            webApp?.BackButton.show();

            webApp?.BackButton.onClick(function () {
                setActive(false);
            });
        } else {
            webApp?.BackButton.hide();
        }
    }

    const roles = ['analyst', 'android', 'back', 'DS', 'design', 'front',
        'ios', 'sys admin', 'scrum', 'PM', 'tester'];

    const stack = ['HTML5', 'CSS3', 'Webpack', 'SEO', 'Java Script',
        'Angular', 'React', 'Vue', 'Redux', 'tester'];

    const [selectedRoles, setSelectedRoles] = useState<string[]>(filters.roles);
    const [selectedStack, setSelectedStack] = useState<string[]>(filters.stack);
    const [selectedExpFrom, setSelectedExpFrom] = useState<number>(filters.exp.from);
    const [selectedExpTo, setSelectedExpTo] = useState<number>(filters.exp.to);
    const minFrom = 0;
    const maxTo = 100;

    useEffect(() => {
        setSelectedRoles(filters.roles);
        setSelectedStack(filters.stack);
        setSelectedExpFrom(filters.exp.from);
        setSelectedExpTo(filters.exp.to);
    }, [active, filters]);
    
    return (
        <div className={cn(styles.filtersList, {
            [styles.active]: active,
        })}>
            <div className={styles.titleDiv}>
                <div />
                <Htag tag='s' className={styles.filtersListTitle}>
                    {setLocale(tgUser?.language_code).filters}
                </Htag>
                <Htag tag='xs' className={cn(styles.filtersListReset, {
                    [styles.weba]: isWebPlatform(webApp?.platform),
                })} onClick={() => {
                    setSelectedRoles([]);
                    setSelectedStack([]);
                    setSelectedExpFrom(minFrom);
                    setSelectedExpTo(maxTo);
                }}>
                    {setLocale(tgUser?.language_code).reset}
                </Htag>
            </div>
            <FiltersItem title={setLocale(tgUser?.language_code).roles} item={roles}
                selectedItems={selectedRoles} setSelectedItems={setSelectedRoles} />
            <FiltersItem title={setLocale(tgUser?.language_code).stack} item={stack}
                selectedItems={selectedStack} setSelectedItems={setSelectedStack} />
            <FiltersExp from={selectedExpFrom} to={selectedExpTo} minFrom={minFrom}
                maxTo={maxTo} setFrom={setSelectedExpFrom} setTo={setSelectedExpTo} />
            <div className={styles.buttonsDiv}>
                <Button text={setLocale(tgUser?.language_code).back} type='white'
                    onClick={() => setActive(false)} />
                <Button text={setLocale(tgUser?.language_code).apply} type='primary'
                    onClick={() => {
                        dispatch(setRoles(selectedRoles));
                        dispatch(setStack(selectedStack));
                        dispatch(setExp({
                            from: selectedExpFrom,
                            to: selectedExpTo,
                        }))
                        setActive(false);
                    }} />
            </div>
        </div>
    );
};
