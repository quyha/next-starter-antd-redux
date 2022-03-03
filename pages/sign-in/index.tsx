import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import SignIn from '@components/sign-in';
import withUnAuthComponent from '@components/auth/with-unauth-component';

const PageSignIn: NextPage = () => {
    return (
        <>
            <NextSeo title="Label NFT marketplace" description="Label NFT marketplace" />
            <SignIn />
        </>
    )
};

export default withUnAuthComponent(PageSignIn);
