import { IWebApp, ITelegramUser } from "../types/telegram";


export interface ErrorArguments {
    webApp: IWebApp | undefined,
}

export interface BaseArguments extends ErrorArguments {
    tgUser: ITelegramUser | undefined,
    dispatch: any,
}

export interface AuthArguments extends Omit<BaseArguments, 'dispatch'> {
    token: string,
}

export interface OpenMessageArguments extends Omit<BaseArguments, 'router' | 'dispatch'> {
    fisrtName: string,
    secondName: string,
    username?: string,
}

export interface EditArguments extends BaseArguments {
    token: string,
    about: string,
    stack: string[],
    roles: string[],
    links: string[],
    country: string,
    city: string,
    whoIs: boolean,
    setIsLoading: (e: boolean) => void,
}
