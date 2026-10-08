import React from 'react';
import { useSelector } from 'react-redux';

const ErrorPage = () => {
    const err = useRouterError();
    console.log("err");
    return <div>{err.message}: Oops, {err.error.mesaage}</div>;
};

export default ErrorPage;