import { EditPage } from "../../page_components/EditPage/EditPage";
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useSetup } from "../../hooks/useSetup";


function Edit(): JSX.Element {
  const { router } = useSetup();

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).hackhunter + ' | ' + setLocale(router.locale).edit_profile}</title>
        <meta name='description' content={setLocale(router.locale).hackhunter + ' | ' + setLocale(router.locale).edit_profile} />
        <meta property='og:title' content={setLocale(router.locale).hackhunter + ' | ' + setLocale(router.locale).edit_profile} />
        <meta name='og:description' content={setLocale(router.locale).hackhunter + ' | ' + setLocale(router.locale).edit_profile} />
        <meta charSet="utf-8" />
      </Head>
      <EditPage />
    </>
  );
}

export default Edit;
