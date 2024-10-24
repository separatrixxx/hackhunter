import { ErrorPageProps } from "./ErrorPage.props";
import styles from './ErrorPage.module.css';
import Link from "next/link";
import { setLocale } from "../../helpers/locale.helper";
import { Htag } from "../../components/Common/Htag/Htag";
import { useSetup } from "../../hooks/useSetup";


export const ErrorPage = ({ error }: ErrorPageProps): JSX.Element => {
    const { router, webApp } = useSetup();

    if (webApp) {
        webApp?.BackButton.show();

        webApp?.BackButton.onClick(function () {
            router.push('/');
        });
    }

    let errorText = "";

    if (error === 404) {
        errorText = setLocale(router.locale).error404;
    } else {
        errorText = setLocale(router.locale).error500;
    }

    return (
        <div className={styles.errorPage}>
            <Link href='/'>
                <Htag tag="m" className={styles.errorText}>
                    {errorText}
                </Htag>
            </Link>
        </div>
    );
};