import { EActionStatus } from '../type';

export interface IUserInfoPublic {
    email: string,
    accessToken?: string,
}

export interface IAuthState {
    status: EActionStatus,
    user: IUserInfoPublic | null,
    accessToken: string | null,
    isAuthenticated: boolean,
}

export interface ISignInAction {
    email: string,
    password: string,
}
