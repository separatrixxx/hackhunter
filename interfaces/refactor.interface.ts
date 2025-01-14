import { IWebApp, ITelegramUser } from "../types/telegram";
import { UserInterface } from "./users.interface";


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
    user: UserInterface,
    about: string,
    setIsLoading: (e: boolean) => void,
}
