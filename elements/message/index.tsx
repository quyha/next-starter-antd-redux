import React from 'react';
import { message } from 'antd';

const RMessage = {
    success: (content: React.ReactNode) => {
        return message.success({ content, className: 'r-message is-success' });
    },
    error: (content: React.ReactNode) => {
        return message.success({ content, className: 'r-message is-error' });
    },
    info: (content: React.ReactNode) => {
        return message.success({ content, className: 'r-message is-info' });
    },
};

export default RMessage;
