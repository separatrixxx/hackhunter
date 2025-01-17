import { SkeletonProps } from './Skeleton.props';
import styles from './Skeleton.module.css';
import cn from 'classnames';


export const Skeleton = ({ width, height, isReady, isRound, children }: SkeletonProps): JSX.Element => {
    if (!isReady) {
        return (
            <div className={cn(styles.skeleton, {
                [styles.sizeS]: height < 20,
                [styles.skeletonRound]: isRound,
            })} style={{ width: width, height: height}} />
        );
    } else {
        return (
            <>
                {children}
            </>
        );
    }
};
