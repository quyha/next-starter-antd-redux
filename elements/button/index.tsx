import { Button, ButtonProps } from 'antd';
import classNames from 'classnames';
import style from './style.module.scss';

const RButton = (props: ButtonProps) => {
    const { className, ...restProps } = props;
    const classes = classNames(style.rButton, className);
    
    return <Button className={ classes } { ...restProps } />
};

export default RButton;
