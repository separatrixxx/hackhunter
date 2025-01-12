import { ChangeInfoBlockProps } from './ChangeInfoBlock.props';
import styles from './ChangeInfoBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { isWebPlatform } from '../../../helpers/platform.helper';
import cn from 'classnames';


export const ChangeInfoBlock = ({ type, info1, info2, count1, count2,
    infoType1, infoType2, setType, setSearch}: ChangeInfoBlockProps): JSX.Element => {
    const { webApp } = useSetup();

    return (
        <div className={cn(styles.changeInfoBlock, {
            [styles.weba]: isWebPlatform(webApp?.platform),
        })}>
            <Htag tag='m' className={cn({
                [styles.active]: type === infoType1,
                [styles.countText]: count1,
            })} onClick={() => {
                if (type !== infoType1) {
                    setType(infoType1);
                    setSearch && setSearch('');
                }
            }}>
                {info1}
                {
                    count1 &&
                        <Htag tag='s' className={styles.countBlock}>
                            {count1}
                        </Htag>
                }
            </Htag>
            <Htag tag='m' className={cn({
                [styles.active]: type === infoType2,
                [styles.countText]: count2,
            })} onClick={() => {
                if (type !== infoType2) {
                    setType(infoType2);
                    setSearch && setSearch('');
                }
            }}>
                {info2}
                {
                    count2 &&
                        <Htag tag='s' className={styles.countBlock}>
                            {count2}
                        </Htag>
                }
            </Htag>
        </div>
    );
};
