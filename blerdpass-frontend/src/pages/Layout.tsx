import Head from "next/head";
import {useEffect, useState} from "react";
import {Box, Stack} from "@mui/material";
import {useDispatch} from "react-redux";
import {enableMapSet} from "immer";
import {useAddress, useWeb3Context} from "../web3/web3-context";
import MenuBar from "../components/header/AppBar";
import Footer from "../components/footer/FooterBg";
import {loadApp} from "../store/app-slice";
import {Web3Params} from "../store/utils/params";
import Link from "next/link";

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
    const dispatch = useDispatch();
    const address = useAddress();
    const {connect, provider, hasCachedProvider, chainID, connected, web3Modal} = useWeb3Context();
    const [walletChecked, setWalletChecked] = useState(false);


    useEffect(() => {

        if (web3Modal === undefined) return

        if (hasCachedProvider()) {
            connect().then(() => {
                setWalletChecked(true);
            });
        } else {
            setWalletChecked(true);
        }
    }, [web3Modal]);

    useEffect(() => {
        enableMapSet()

        let p: Web3Params = {
            networkID: chainID, provider: provider, address: address
        }
        if (connected) {
            dispatch(loadApp(p))
        }

    }, [connected])

    return (
        <Box height="100vh" display="flex" flexDirection="column">
            <Head>
                <title>Blerd Pass</title>
                <meta name="" content="BlerdPass"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link rel="stylesheet" href="/fonts/KeepCalm.css"/>
                <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Exo:wght@500&display=swap" rel="stylesheet"/>
                {/*<link href="https://fonts.googleapis.com/css2?family=Macondo+Swash+Caps&display=swap" rel="stylesheet" />*/}
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content="@BlerdPass"/>
                <meta name="twitter:title" content="BlerdPass"/>
                <meta name="twitter:description"
                      content="The year is 3240 and the city is rampant with crime and a notorious gang of
                      ruffians wreak havoc using the subway system. City police don’t know what to do. Word
                      on the street is that there may be more structure to these events than meets the eye.

                            There are rumblings of a small group of citizens who are taking matters into their own hands.
                            BlerdPass is the only way to catch a ride on the train and depending on your pass, it may or may not take
                            you where you intended to go."/>
                <meta name="twitter:image"
                      content=""/>
            </Head>

            <MenuBar/>


            <main>
                {children}
            </main>

            {
            <footer>
              <Footer/>
            </footer>
            }
        </Box>
    )

}

export default Layout
