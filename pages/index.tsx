import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Home from '@components/home';
import LayoutDefault from '@components/layout/default';

const PageHome: NextPage = () => {
    return (
        <LayoutDefault>
            <NextSeo title="Label NFT marketplace" description="Label NFT marketplace" />
            <Home />
        </LayoutDefault>
    )
};

export default PageHome;
