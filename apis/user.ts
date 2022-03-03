import { ApiResponse } from './../services/request.type';
import { get } from '@services/fetcher';
import { DataResponse } from '@services/request.type';
import { IUserInfoPublic } from '@stores/auth/type';

interface ISignIn {
    email: string,
    password: string,
}

const apiUser = {
    async signIn(payload: ISignIn): Promise<DataResponse<IUserInfoPublic | null>> {
        try {
            const user = { email: payload.email, accessToken: new Date().toString() };
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([ user, null ]);
                }, 2000);
            })   
        } catch (error) {
            return [ null, error ];
        }
    },
    async getProfile(): Promise<DataResponse<ApiResponse<IUserInfoPublic> | null>> {
        try {
            const profile = await get<IUserInfoPublic>('/nft/explore?page=1&size=12');
            // const profile = await get<IUserInfoPublic>('/collection/get-collectionDetail/71573177-1fa1-4d36-b49f-3d9588cc46cf');
            return [ profile, null ];
        } catch (error) {
            return [ null, error ];
        }
    },
};

export default apiUser;
