import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Profile from '@components/profile';
import withAuthComponent from '@components/auth/with-auth-component';
import LayoutDefault from '@components/layout/default';

const PageProfile: NextPage = () => {
    return (
        <LayoutDefault>
            <NextSeo title="Label NFT marketplace" description="Label NFT marketplace" />
            <Profile />
        </LayoutDefault>
    )
};

export default withAuthComponent(PageProfile);
