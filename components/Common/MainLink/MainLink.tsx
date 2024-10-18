import styles from './MainLink.module.css';
import { useRouter } from 'next/router';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../Htag/Htag';
import Link from 'next/link';
import Image from 'next/image';
import { useSetup } from '../../../hooks/useSetup';


export const MainLink = (): JSX.Element => {
    const { router } = useSetup();
    
    return (
        <Link href='' target='_blank' className={styles.link} aria-label='main link'>
            <Image className={styles.logo} draggable='false'
                loader={() => '/logo.svg'}
                src='/logo.svg'
                alt='logo image'
                width={1}
                height={1}
                unoptimized={true}
            />
            <Htag tag='m' className={styles.mainTitle}>
                {setLocale(router.locale).main_title}
            </Htag>
        </Link>
    );
};
