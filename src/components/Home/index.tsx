import React from 'react';
import { HeaderMenu, useModals } from 'src/components';

export function Home() {

    const save = useModals('SaveItems');
    const loading = useModals('PageLoading');

    const pageLoading = React.useCallback(() => {
        loading.show();
        setTimeout(loading.close, 2500);
    }, [loading]);

    return (
        <div className={'bg-amber-400 min-h-screen flex flex-col items-center'}>
            <HeaderMenu />
            <h1 className={'mt-12 text-3xl text-center'}>
                This React Project Boilerplate focuses on being<br/> <b>Simple</b>, <b>Ergonomic</b> and <b>Fit To Large Team</b>.
            </h1>
            <h1 className={'mt-12 text-2xl text-center'}>
                The major tools are <b>Webpack 5</b>, <b>Tailwind</b>, <b>Redux</b>, <b>Axios</b> and <b>TypeScript</b>. <br/>
                there are some minor tools for optimizations for webpack, notistack for <br/>generating Toasts, dotenv, react-router... <br/>
                Also there is a DockerFile for containerizing the project. <br/>
            </h1>
            <div className={'mt-12 flex-center'}>
                <button onClick={save.show} className={'ui-button'}>Test Simple Modal</button>
                <button onClick={pageLoading}  className={'ui-button'}>Test Page Loading</button>
                <save.MModal />
                <loading.MModal />
            </div>
        </div>
    );
}