import { FiltersItemProps } from './FiltersItem.props';
import styles from './FiltersItem.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { isWebPlatform } from '../../../helpers/platform.helper';
import { Htag } from '../../Common/Htag/Htag';
import cn from 'classnames';


export const FiltersItem = ({ title, item, selectedItems, setSelectedItems }: FiltersItemProps): JSX.Element => {
    const { webApp } = useSetup();

    const handleItemClick = (clickedItem: string) => {
        const lowercaseItem = clickedItem.toLowerCase();
        
        if (selectedItems.includes(lowercaseItem)) {
            setSelectedItems(selectedItems.filter(item => item !== lowercaseItem));
        } else {
            setSelectedItems([...selectedItems, lowercaseItem]);
        }
    };

    return (
        <div className={styles.filtersItem}>
            <Htag tag='s' className={styles.filtersItemTitle}>
                {title}
            </Htag>
            <Htag tag='xs' className={styles.item}>
                {item.map(i => (
                    <span key={i} className={cn(styles.itemSpan, {
                        [styles.weba]: isWebPlatform(webApp?.platform),
                        [styles.activeItemSpan]: selectedItems.includes(i.toLowerCase()),
                    })} onClick={() => handleItemClick(i)}>
                        {i}
                    </span>
                ))}
            </Htag>
        </div>
    );
};
