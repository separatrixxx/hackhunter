import { MyTeamsPage } from "../../page_components/MyTeamsPage/MyTeamsPage";
import Head from 'next/head';
import { useRouter } from "next/router";
import { setLocale } from "../../helpers/locale.helper";


function MyTeams(): JSX.Element {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).hackhunter + ' | ' + setLocale(router.locale).my_teams}</title>
        <meta name='description' content={setLocale(router.locale).hackhunter + ' | ' + setLocale(router.locale).my_teams} />
        <meta property='og:title' content={setLocale(router.locale).hackhunter + ' | ' + setLocale(router.locale).my_teams} />
        <meta name='og:description' content={setLocale(router.locale).hackhunter + ' | ' + setLocale(router.locale).my_teams} />
        <meta charSet="utf-8" />
      </Head>
      <MyTeamsPage />
    </>
  );
}

export default MyTeams;
