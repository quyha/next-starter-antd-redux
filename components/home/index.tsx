import Link from 'next/link';
import { RouteNames } from '@constants/route-names';

const Home = () => {
    return (
        <div>
            <p>Home</p>
            <p>This is home page</p>
            <Link href={ RouteNames.Profile }>Go to other page</Link>
        </div>
    )
};

export default Home;
