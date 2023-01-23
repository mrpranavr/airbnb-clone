import "@/styles/globals.css";

import { Nunito } from '@next/font/google'
const nunito = Nunito({ subsets: ['latin'] })

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
