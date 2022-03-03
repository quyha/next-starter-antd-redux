import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@stores/index';
import { useEffect, useState } from 'react';
import apiUser from 'apis/user';
import { IUserInfoPublic } from '@stores/auth/type';

const Profile = () => {
    const { user } = useSelector((state: RootState) => state.auth);
    
    const [ profile, setProfile ] = useState<IUserInfoPublic>();

    useEffect(() => {
        (async () => {
            const [ res ] = await apiUser.getProfile();
            if (res) {
                setProfile(res?.data);
            }
        })()
    }, [])
    
    return (
        <div>
            <p>Profile</p>
            <Link href="/">To Page 1</Link>
            <p>{ user?.email }</p>
            <p>profile: { JSON.stringify(profile) }</p>
        </div>
    )
};

export default Profile;
