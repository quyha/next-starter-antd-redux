import { FC, useState } from 'react';
import classNames from 'classnames';
import { Row, Col, Drawer } from 'antd';
import Link from 'next/link';
import style from './style.module.scss';
import useWindowSize from '@hooks/use-window-size';
import { RouteNames } from '@constants/route-names';
import ConnectWallet from './connect-wallet';

const widthToShowHamburgerMenu = 768;

const Header: FC<{}> = () => {

    const windowSize = useWindowSize();
    const windowWidth = windowSize.width ?? 0;
    const isVisibleHamburgerMenu = windowWidth <= widthToShowHamburgerMenu;

    const [ isVisibleDrawer, setVisibleDrawer ] = useState<boolean>(false);

    const handleToggleDrawer = () => {
        setVisibleDrawer(prevVisible => !prevVisible);
    }

    const classHeader = classNames([
        style.headerPage,
        isVisibleHamburgerMenu && style.headerPageMobile,
    ]);
    
    return (
        <header className={ classHeader }>
            <Row align="middle" justify="space-between">
                <Col>Logo</Col>
                <Row align="middle">
                    {
                        !isVisibleHamburgerMenu && (
                            <Link href={ RouteNames.CreateNFT }>
                                Create NFT
                            </Link>
                        )
                    }
                    <ConnectWallet />
                    {
                        isVisibleHamburgerMenu && (
                            <div onClick={ handleToggleDrawer }>
                                <svg height={ 32 } width={ 32 }>
                                    <path d="M4 10h24a2 2 0 0 0 0-4H4a2 2 0 0 0 0 4zm24 4H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zm0 8H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4z" />
                                </svg>
                            </div>
                        )
                    }
                </Row>
            </Row>
            {
                isVisibleHamburgerMenu && (
                    <Drawer
                        placement="right"
                        closable={ false }
                        onClose={ handleToggleDrawer }
                        visible={ isVisibleDrawer }
                        className={ style.drawerMenuMobile }
                    >
                        <Link href={ RouteNames.CreateNFT }>
                            Create NFT
                        </Link>
                    </Drawer>
                )
            }
        </header>
    )
};

export default Header;
