import { ExpBlockProps } from './ExpBlock.props';
import styles from './ExpBlock.module.css';
import { Htag } from '../../Common/Htag/Htag';
import LogoIcon from './logo.svg';
import cn from 'classnames';


export const ExpBlock = ({ exp, className }: ExpBlockProps): JSX.Element => {
    return (
        <div className={cn(styles.expBlock, className)}>
            <LogoIcon />
            <Htag tag='xxs'>
                {exp || 0}
            </Htag>
        </div>
    );
};
