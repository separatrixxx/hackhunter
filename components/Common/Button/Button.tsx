import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { isWebPlatform } from '../../../helpers/platform.helper';
import { useSetup } from '../../../hooks/useSetup';
import cn from 'classnames';


export const Button = ({ text, type, className, onClick }: ButtonProps): JSX.Element => {
    const { webApp } = useSetup();

    return (
        <button className={cn(styles.button, className, {
            [styles.weba]: isWebPlatform(webApp?.platform),
            [styles.whiteButton]: type === 'white',
        })} onClick={onClick}>
            <Htag tag='s' className={styles.text}>
                {text}
            </Htag>
        </button>
    );
};
