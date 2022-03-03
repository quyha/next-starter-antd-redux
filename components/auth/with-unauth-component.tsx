import { NextComponentType } from 'next';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { RouteNames } from '@constants/route-names';
import { isClientSide } from '@utils/request';
import { RootState } from '@stores/index';

function withUnAuthComponent<Page>(Component: NextComponentType) {
    return (props: Page) => {
        const { isAuthenticated } = useSelector((state: RootState) => state.auth);
        const router = useRouter();

        if (isAuthenticated) {
            if (isClientSide()) {
                router.push(RouteNames.Home);
            }
            return null;
        }
        
        return <Component { ...props }/>
    }
}

export default withUnAuthComponent;

