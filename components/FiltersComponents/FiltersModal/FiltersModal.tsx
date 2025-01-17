import styles from './FiltersModal.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';


export const FiltersModal = (): JSX.Element => {
    const { tgUser } = useSetup();

    return (
        <>
            <Htag tag='m' className={styles.modalTitle}>
                {setLocale(tgUser?.language_code).how_level_formed + '?'}
            </Htag>
            <Htag tag='xs' className={styles.modalText}>
                {setLocale(tgUser?.language_code).filters_modal_text_1}
            </Htag>
            <Htag tag='xs' className={styles.modalText}>
                {setLocale(tgUser?.language_code).filters_modal_text_2}
            </Htag>
        </>
    );
};
