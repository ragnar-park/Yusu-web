import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import AppHeader from "@/components/AppHeader";

export default function App({Component, pageProps}: AppProps) {
    return (
        <div>
            <AppHeader/>
            <Component {...pageProps} />
        </div>
    )
}
