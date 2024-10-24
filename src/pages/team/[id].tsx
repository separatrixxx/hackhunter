import { TeamPage } from "../../../page_components/TeamPage/TeamPage";
import Head from "next/head";
import { useSetup } from "../../../hooks/useSetup";
import { setLocale } from "../../../helpers/locale.helper";
import { GetServerSideProps } from "next";
import axios, { AxiosResponse } from "axios";
import { TeamInterface } from "../../../interfaces/teams.interface";


function Team({ team }: TeamProps): JSX.Element {
    const { router } = useSetup();

    return (
        <>
            <Head>
                <title>{setLocale(router.locale).hackhunter + ' | ' + team.name}</title>
                <meta name='description' content={setLocale(router.locale).hackhunter + ' | ' + team.name} />
                <meta property='og:title' content={setLocale(router.locale).hackhunter + ' | ' + team.name} />
                <meta name='og:description' content={setLocale(router.locale).hackhunter + ' | ' + team.name} />
                <meta charSet="utf-8" />
            </Head>
            <TeamPage team={team} />
        </>
    );
}

export const getServerSideProps: GetServerSideProps<TeamProps> = async ({ params }) => {
    if (!params) {
        return {
            notFound: true
        };
    }

    try {
        const { data: team }: AxiosResponse<TeamInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/api/teams/' + params.id);

        return {
            props: {
                team,
            },
        };
    } catch {
        return {
            notFound: true
        };
    }
};

interface TeamProps extends Record<string, unknown> {
    team: TeamInterface,
}

export default Team;
