import { RolesProps } from './Roles.props';
import styles from './Roles.module.css';
import { Htag } from '../../Common/Htag/Htag';


export const Roles = ({ roles }: RolesProps): JSX.Element => {
    return (
        <Htag tag='xs' className={styles.roles}>
            {roles.map(r => (
                <span key={r} style={{ background: `var(--${r.toLowerCase().replace(' ', '_')}Color)` }}>
                    {r}
                </span>
            ))}
        </Htag>
    );
};
