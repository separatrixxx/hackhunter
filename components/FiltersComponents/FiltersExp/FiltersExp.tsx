import { FiltersExpProps } from './FiltersExp.props';
import styles from './FiltersExp.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { Input } from '../../Common/Input/Input';
import { InfoButton } from '../../Buttons/InfoButton/InfoButton';
import { Modal } from '../../Common/Modal/Modal';
import { useState } from 'react';
import { FiltersModal } from '../FiltersModal/FiltersModal';


export const FiltersExp = ({ from, to, minFrom, maxTo, setFrom, setTo }: FiltersExpProps): JSX.Element => {
    const { tgUser } = useSetup();

    const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Math.max(minFrom, +e.target.value), maxTo);
        setFrom(value);
    };

    const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Math.max(minFrom, +e.target.value), maxTo);
        setTo(value);
    };

    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <>
            <div className={styles.filtersExp}>
                <Htag tag='s' className={styles.filtersExpTitle}>
                    {setLocale(tgUser?.language_code).level}
                    <InfoButton onClick={() => setIsActive(true)} />
                </Htag>
                <div className={styles.imputsDiv}>
                    <Input placeholder={setLocale(tgUser?.language_code).from}
                        value={String(from)} type='number' name='level from' ariaLabel='level from'
                        minValue={minFrom} maxValue={maxTo} handleChange={handleFromChange} />
                    <Input placeholder={setLocale(tgUser?.language_code).to}
                        value={String(to)} type='number' name='level to' ariaLabel='level to'
                        minValue={minFrom} maxValue={maxTo} handleChange={handleToChange} />
                </div>
            </div>
            <Modal isActive={isActive} setIsActive={setIsActive}>
                <FiltersModal />
            </Modal>
        </>
    );
};
