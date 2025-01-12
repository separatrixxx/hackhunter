import { UserPage } from "../../../page_components/UserPage/UserPage";
import Head from "next/head";
import { useSetup } from "../../../hooks/useSetup";
import { setLocale } from "../../../helpers/locale.helper";
import { GetServerSideProps } from "next";
import axios, { AxiosResponse } from "axios";
import { UserInterface } from "../../../interfaces/users.interface";


function User({ user }: UserProps): JSX.Element {
    const { router } = useSetup();

    return (
        <>
            <Head>
                <title>{setLocale(router.locale).hackhunter + ' | '
                    + (user.first_name + ' ' + user.second_name)}</title>
                <meta name='description' content={setLocale(router.locale).hackhunter + ' | '
                    + (user.first_name + ' ' + user.second_name)} />
                <meta property='og:title' content={setLocale(router.locale).hackhunter + ' | '
                    + (user.first_name + ' ' + user.second_name)} />
                <meta name='og:description' content={setLocale(router.locale).hackhunter + ' | '
                    + (user.first_name + ' ' + user.second_name)} />
                <meta charSet="utf-8" />
            </Head>
            <UserPage user={user} />
        </>
    );
}

export const getServerSideProps: GetServerSideProps<UserProps> = async ({ params }) => {
    if (!params) {
        return {
            notFound: true
        };
    }

    try {
        const { data: user }: AxiosResponse<UserInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/api/users/' + params.id);

        return {
            props: {
                user,
            },
        };
    } catch {
        return {
            notFound: true
        };
    }
};

interface UserProps extends Record<string, unknown> {
    user: UserInterface,
}

export default User;
