import "@/styles/globals.css";

import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

import { Nunito } from '@next/font/google'
const nunito = Nunito({ subsets: ['latin'] })

const progress = new ProgressBar({
    size: 8,
    color: '#fe595e',
    className:'z-50',
    delay: 100,

})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

export default function App({ Component, pageProps }) {
    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${nunito.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </>
    );
}
