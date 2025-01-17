import { InfoButtonProps } from './InfoButton.props';
import styles from './InfoButton.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { isWebPlatform } from '../../../helpers/platform.helper';
import cn from 'classnames';


export const InfoButton = ({ onClick }: InfoButtonProps): JSX.Element => {
    const { webApp } = useSetup();

    return (
        <div className={cn(styles.infoButton, {
            [styles.weba]: isWebPlatform(webApp?.platform),
        })} onClick={onClick}>
            <Htag tag='xxs'>
                {'?'}
            </Htag>
        </div>
    );
};
