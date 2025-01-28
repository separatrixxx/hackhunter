import { InputProps } from './Input.props';
import styles from './Input.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { isWebPlatform } from '../../../helpers/platform.helper';
import cn from 'classnames';


export const Input = ({ placeholder, value, type, name, ariaLabel, isArea,
    minValue, maxValue, isError, handleChange, handleKeyPress, className }: InputProps): JSX.Element => {
    const { webApp } = useSetup();
    
    if (!isArea) {
        return (
            <input className={cn(styles.input, className, {
                [styles.weba]: isWebPlatform(webApp?.platform),
                [styles.error]: isError,
            })}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                type={type}
                name={name}
                aria-label={ariaLabel}
                min={minValue}
                max={maxValue}
                maxLength={20}
            />
        );
    } else {
        return (
            <textarea className={cn(styles.input, styles.textArea, className, {
                [styles.weba]: isWebPlatform(webApp?.platform),
                [styles.error]: isError,
            })}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                name={name}
                aria-label={ariaLabel}
                maxLength={150}
            />
        );
    }
};
