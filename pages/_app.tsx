import type { AppProps } from 'next/app';
// import App from 'next/app';
import { DefaultSeo } from 'next-seo';
import SEO from '@constants/seo';
import { PersistGate } from 'redux-persist/integration/react';
import { appWithTranslation } from 'next-i18next';
import '@styles/global.scss';
// import serviceUser from '@services/user';
// import { setAuthorization } from '@services/axios';
import TopProgressBar from '@components/top-progress-bar';
// import { isClientSide } from '@utils/request';
import wrapper, { persistor } from '@stores/index';

interface IProps extends AppProps {}

function MyApp({ Component, pageProps }: IProps) {
    return (
        <PersistGate loading={ null } persistor={ persistor }>
            <DefaultSeo { ...SEO } />
            <TopProgressBar />
            <Component { ...pageProps } />
        </PersistGate>
    )
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
//     const appProps = await App.getInitialProps(appContext);
//     const user = serviceUser.getUserFromStorage(true, appContext.ctx);
//     // let initialUserInfo = null;
//     // let initialAuthenticated = false;
   
//     if (user) {
//         const { accessToken } = user;
//         // initialUserInfo = restUser;
//         // initialAuthenticated = !!accessToken && !!restUser;
//         if (!isClientSide()) {
//             setAuthorization(`Bearer ${ accessToken }`);
//         }
//     }

//     return { ...appProps };
// }

export default appWithTranslation(wrapper.withRedux(MyApp));
