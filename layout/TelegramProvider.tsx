import Script from "next/script";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ITelegramUser, IWebApp } from "../types/telegram";
import { useSetup } from "../hooks/useSetup";
import { checkAuth } from "../helpers/auth.helper";
import { setToken } from "../features/token/tokenSlice";


export interface ITelegramContext {
  webApp?: IWebApp;
  tgUser?: ITelegramUser;
}

export const TelegramContext = createContext<ITelegramContext>({});

export const TelegramProvider = ({ children }: { children: React.ReactNode }) => {
  const { router, dispatch } = useSetup();

  const [webApp, setWebApp] = useState<IWebApp | null>(null);

  useEffect(() => {
    const app = (window as any).Telegram?.WebApp;

    if (app) {
      app.ready();
      setWebApp(app);
      app.expand();
    }
  }, [router]);

  useEffect(() => {
    const token = router.query.token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjg2MjM4MTY2N30sImV4cCI6MTczNzAzNzk0M30.ZJ9zUy-KsOqU43F-QUFl-yttEifFxDxVXOzsubNYplY';
    console.log(router.query.token);

    if (webApp) {
      if (token && typeof token === 'string') {
        dispatch(setToken(token));

        checkAuth({
          webApp: webApp,
          tgUser: webApp.initDataUnsafe.user,
          token: token,
        });
      } else {
        webApp.close();
      }
    }
  }, [router.query.token, webApp, dispatch, router]);

  const value = useMemo(() => {
    return webApp
      ? {
        webApp,
        unsafeData: webApp.initDataUnsafe,
        tgUser: webApp.initDataUnsafe.user,
      }
      : {};
  }, [webApp]);

  return (
    <TelegramContext.Provider value={value}>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="beforeInteractive"
      />
      {children}
    </TelegramContext.Provider>
  );
};

export const useTelegram = () => useContext(TelegramContext);
