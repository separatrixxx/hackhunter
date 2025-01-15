import { EditItemsProps } from './EditItems.props';
import styles from './EditItems.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { isWebPlatform } from '../../../helpers/platform.helper';
import CrossIcon from './cross.svg';
import cn from 'classnames';


export const EditItems = ({ items, setItems }: EditItemsProps): JSX.Element => {
    const { webApp } = useSetup();

    return (
        <Htag tag='xs' className={styles.editItems}>
            {items.map(i => (
                <span key={i} className={cn(styles.itemSpan, {
                    [styles.weba]: isWebPlatform(webApp?.platform),
                })} onClick={() => setItems((prev: string[]) => prev.filter(item => item !== i))}>
                    {i}
                    <CrossIcon />
                </span>
            ))}
        </Htag>
    );
};