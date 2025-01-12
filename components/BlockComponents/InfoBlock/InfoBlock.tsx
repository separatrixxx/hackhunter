import { InfoBlockProps } from './InfoBlock.props';
import styles from './InfoBlock.module.css';
import cn from 'classnames';


export const InfoBlock = ({ children, isTop }: InfoBlockProps): JSX.Element => {
    return (
        <div className={cn(styles.infoBlock, {
            [styles.topInfoBlock]: isTop,
        })}>
            {children}
        </div>
    );
};