import { UserResumeProps } from './UserResume.props';
import styles from './UserResume.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../../Common/Htag/Htag';
import { AddButton } from '../../Buttons/AddButton/AddButton';
import { UserResumeLink } from '../UserResumeLink/UserResumeLink';
import cn from 'classnames';


export const UserResume = ({ stack, links, name, isProfile }: UserResumeProps): JSX.Element => {
    const { tgUser } = useSetup();

    if (!stack && !links) {
        return (
            <>
                <Htag tag='xs' className={cn(styles.resumeTitle, styles.resumeEmpty)}>
                    {setLocale(tgUser?.language_code)[!isProfile
                        ? 'resume_of_user_currently_empty'
                        : 'your_resume_empty']
                        .replace('$$$', name)}
                </Htag>
                {
                    isProfile &&
                        <AddButton text={setLocale(tgUser?.language_code).add_info}
                            onClick={() => {}} />
                }
            </>
        );
    }

    return (
        <div className={styles.userResume}>
            {
                stack && stack.length > 0 &&
                    <>
                        <Htag tag='s' className={styles.resumeTitle}>
                            {setLocale(tgUser?.language_code).stack}
                        </Htag>
                        <Htag tag='xs' className={styles.resumeText}>
                            {stack?.reduce((s, acc) => s + acc + ', ', '').slice(0, -2)}
                        </Htag>
                    </>
            }
            {
                links && links.length > 0 &&
                    <>
                        <Htag tag='s' className={styles.resumeTitle}>
                            {setLocale(tgUser?.language_code).links}
                        </Htag>
                        {links.map((l, i) => (
                            <UserResumeLink key={l + i} className={styles.resumeText}
                                link={l} />
                        ))}
                    </>
            }
        </div>
    );
};
