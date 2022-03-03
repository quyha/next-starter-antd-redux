import { Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import RButton from '@elements/button';
import style from './style.module.scss';
import { ISignInForm } from './type';
import { signIn } from '@stores/auth/slice';
import { RootState } from '@stores/index';
import { EActionStatus } from '@stores/type';

const SignIn = () => {
    const auth = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    
    const handleSubmit = async (values: ISignInForm) => {
        if (auth.status === EActionStatus.Pending) return;
        const { email, password } = values;
        dispatch(signIn({ email, password }));
    };
    
    return (
        <div className={ style.formWrapper }>
            <Form
                name="basic"
                autoComplete="off"
                layout="vertical"
                onFinish={ handleSubmit }
            >
                <Form.Item
                    label="Email Address"
                    name="email"
                    rules={ [
                        {
                            max: 256,
                            message: "Max length is 256 characters.",
                        },
                        {
                            pattern:
                                /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i,
                            message:
                                "Email is invalid format. Please check again.",
                        },

                        {
                            required: true,
                            message: "This field cannot be empty.",
                        },
                    ] }
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={ [
                        {
                            required: true,
                            message: "This field cannot be empty.",
                        },
                    ] }
                >
                    <Input.Password />
                </Form.Item>
                <div>
                    <RButton
                        type="primary"
                        htmlType="submit"
                        className={ style.formButton }
                        loading={ auth.status === EActionStatus.Pending }
                    >
                        Sign In
                    </RButton>
                </div>
            </Form>
        </div>
    )
};

export default SignIn;
