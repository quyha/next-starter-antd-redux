import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { RouteNames } from '@constants/route-names';
import { isClientSide, IServerSidePropsCustom } from '@utils/request';
import { RootState } from '@stores/index';
import { signOut } from '@stores/auth/slice';

function withAuthComponent<Props extends IServerSidePropsCustom>(Component: NextPage<Props>) {
    return (props: Props) => {
        const auth = useSelector((state: RootState) => state.auth);
        const dispatch = useDispatch();
        
        const { isAuthenticated } = auth;
        const router = useRouter();
        const { isExpiredToken = false } = props;

        if (!isAuthenticated || isExpiredToken === true) {
            if (isClientSide()) {
                dispatch(signOut());
                router.push(RouteNames.SignIn);
            }
            return null;
        }
        
        return <Component { ...props }/>
    }
}

export default withAuthComponent;

