import { InputProps } from './Input.props';
import styles from './Input.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { isWebPlatform } from '../../../helpers/platform.helper';
import cn from 'classnames';


export const Input = ({ placeholder, value, type, name, ariaLabel, isArea,
    minValue, maxValue, handleChange, className }: InputProps): JSX.Element => {
    const { webApp } = useSetup();
    
    return (
        <input className={cn(styles.input, className, {
            [styles.weba]: isWebPlatform(webApp?.platform),
        })}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            type={type}
            name={name}
            aria-label={ariaLabel}
            min={minValue}
            max={maxValue}
        />
    );
};
