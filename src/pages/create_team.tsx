import { CreateTeamPage } from '../../page_components/CreateTeamPage/CreateTeamPage';
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useSetup } from "../../hooks/useSetup";


function CreateTems(): JSX.Element {
  const { router } = useSetup();

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).hackhunter + ' | ' + setLocale(router.locale).create_team}</title>
        <meta name='description' content={setLocale(router.locale).hackhunter + ' | ' + setLocale(router.locale).create_team} />
        <meta property='og:title' content={setLocale(router.locale).hackhunter + ' | ' + setLocale(router.locale).create_team} />
        <meta name='og:description' content={setLocale(router.locale).hackhunter + ' | ' + setLocale(router.locale).create_team} />
        <meta charSet="utf-8" />
      </Head>
      <CreateTeamPage />
    </>
  );
}

export default CreateTems;
