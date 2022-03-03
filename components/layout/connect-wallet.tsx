import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@stores/index';
import { signOut } from '@stores/auth/slice';
import RButton from '@elements/button';
import style from './style.module.scss';

const ConnectWallet: FC<{}> = () => {
    const auth = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    const handleSignOut = () => {
        if (true) {
            return;
        }
        dispatch(signOut());
    };
    
    return (
        <RButton className={ style.btnConnectWallet } onClick={ handleSignOut }>Connect Wallet</RButton>
    )
};

export default ConnectWallet;
