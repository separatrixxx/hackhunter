import { ProfilePage } from "../../page_components/ProfilePage/ProfilePage";
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useSetup } from "../../hooks/useSetup";
import { getUser } from "../../helpers/user.helper";
import { useEffect } from "react";


function Profile(): JSX.Element {
  const { router, dispatch, webApp, tgUser, user } = useSetup();

  console.log(user)

  useEffect(() => {
    if (tgUser) {
      getUser({
        router: router,
        webApp: webApp,
        dispatch: dispatch,
        tgUser: tgUser,
      });
    }
  }, [router, tgUser, webApp, dispatch]);

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).hackhunter + ' | ' + setLocale(router.locale).profile}</title>
        <meta name='description' content={setLocale(router.locale).hackhunter + ' | ' + setLocale(router.locale).profile} />
        <meta property='og:title' content={setLocale(router.locale).hackhunter + ' | ' + setLocale(router.locale).profile} />
        <meta name='og:description' content={setLocale(router.locale).hackhunter + ' | ' + setLocale(router.locale).profile} />
        <meta charSet="utf-8" />
      </Head>
      <ProfilePage />
    </>
  );
}

export default Profile;
