import { AddButtonProps } from './AddButton.props';
import styles from './AddButton.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { isWebPlatform } from '../../../helpers/platform.helper';
import PlusIcon from './plus.svg';
import cn from 'classnames';


export const AddButton = ({ text, onClick }: AddButtonProps): JSX.Element => {
    const { webApp } = useSetup();

    return (
        <Htag tag='s' className={cn(styles.addButton, {
            [styles.weba]: isWebPlatform(webApp?.platform),
        })} onClick={onClick}>
            <PlusIcon />
            {text}
        </Htag>
    );
};
