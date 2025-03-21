import { MainPage } from "../../page_components/MainPage/MainPage";
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useSetup } from "../../hooks/useSetup";
import { useEffect } from "react";
import { getTeams } from "../../helpers/teams.helper";
import { getUsers } from "../../helpers/users.helper";


function Main(): JSX.Element {
  const { router, dispatch, webApp, tgUser } = useSetup();

  useEffect(() => {
    if (tgUser) {
      getTeams({
        webApp: webApp,
        dispatch: dispatch,
        tgUser: tgUser,
      });

      getUsers({
        webApp: webApp,
        dispatch: dispatch,
        tgUser: tgUser,
      });
    }
  }, [router, tgUser, webApp, dispatch]);

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).hackhunter}</title>
        <meta name='description' content={setLocale(router.locale).hackhunter} />
        <meta property='og:title' content={setLocale(router.locale).hackhunter} />
        <meta name='og:description' content={setLocale(router.locale).hackhunter} />
        <meta charSet="utf-8" />
      </Head>
      <MainPage />
    </>
  );
}

export default Main;
