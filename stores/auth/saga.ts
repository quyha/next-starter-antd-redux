import { put, takeLeading, delay } from 'redux-saga/effects';
import apiUser from '../../apis/user';
import RMessage from '../../elements/message';
import { DataResponse } from '../../services/request.type';
import serviceUser from '../../services/user';
import { IAction } from '../type';
import {
    signIn,
    signInFail,
    signInSuccess,
    signOut,
    signOutSuccess,
} from './slice';
import { ISignInAction, IUserInfoPublic } from './type';

function* signInWorker(action: IAction<ISignInAction>) {
    const { email, password } = action.payload;
    const [ response, error ]: DataResponse<IUserInfoPublic> = yield apiUser.signIn({ email, password });
    if (response) {
        const { accessToken = '', ...userInfo } = response;
        serviceUser.storeUser(userInfo);
        serviceUser.storeToken(accessToken);
        yield delay(500);
        yield put({ type: signInSuccess.toString(), payload: response });
        RMessage.error('Sign in successfully!');
        return;
    }
    RMessage.error(error.toString());
    yield put({ type: signInFail.toString() });
};

function* signOutWorker() {
    serviceUser.logoutUser();
    yield put({ type: signOutSuccess.toString() });
};

function* authWatcher() {
    yield takeLeading(signIn.toString(), signInWorker);
    yield takeLeading(signOut.toString(), signOutWorker);
};

export default authWatcher;
