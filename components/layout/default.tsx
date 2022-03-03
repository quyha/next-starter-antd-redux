import { ReactNode } from 'react';
import style from './style.module.scss';
import Header from './header';

interface IProps {
    children: ReactNode,
}

const LayoutDefault = ({ children }: IProps) => {
    return (
        <main className={ style.defaultLayout }>
            <Header />
            { children }
        </main>
    )
};

export default LayoutDefault;
