import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import wrapper from '@stores/index';

type TQueryDefault = Record<string, any>;

export interface IServerSidePropsCustom extends Record<string, any> {
    isExpiredToken?: boolean,
}

function isClientSide(): boolean {
    return typeof window !== 'undefined';
}

function withAuthServerSideProps<Props extends IServerSidePropsCustom, Query extends TQueryDefault = {}>(
    getServerSidePropsFunc?: (ctx: GetServerSidePropsContext<Query>) => Promise<GetServerSidePropsResult<Props>>
): (ctx: GetServerSidePropsContext<Query>) => Promise<GetServerSidePropsResult<Props>> {
    return wrapper.getServerSideProps((store): any => {
        return async function getMergedServerSideProps(context: GetServerSidePropsContext<Query>): Promise<GetServerSidePropsResult<Props>> {
            if (getServerSidePropsFunc) {
                try {
                    const props = await getServerSidePropsFunc(context);
                    return props;
                } catch (error: any) {
                    const props = {} as Props;
                    if (error.response?.status === 401) {
                        props.isExpiredToken = true;
                    }
                    return { props };
                }
            }
            return {
                props: {} as Props,
            }
        }
    })
}

export { isClientSide, withAuthServerSideProps };
