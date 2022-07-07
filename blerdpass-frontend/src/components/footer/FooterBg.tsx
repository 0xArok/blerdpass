import {NextPage} from "next";
import {Stack, Typography, Box} from "@mui/material";
import Image from 'next/image'
import twitter from '../../../public/twitter.png';
import discord from '../../../public/discord.png';
import telegram from '../../../public/telegram.png';
import odyssey from '../../../public/logo_odyssey.png'
import eth from '../../../public/eth.png';
import {Custom} from "../../styles/Theme";

function Footer() {

    return (
        <Stack direction="column" justifyContent="center" height="100%"
               alignItems="center" paddingY={3} spacing={3} sx={{background: '#0a070a'}} width={"100vw"} zIndex={10}>


            <Stack direction={"row"} alignItems="center" justifyContent="center" spacing={3} paddingY={5}>
                <a href={"https://twitter.com/kumaversenft"} target="_blank" rel="noreferrer">
                    <Image src={twitter} alt="twitter" width={72} height={72}/>
                </a>
                <a href={"https://discord.gg/kumaverse"} target="_blank" rel="noreferrer">
                    <Image src={discord} alt="discord" width={72} height={72}/>
                </a>

            </Stack>


            <Typography textAlign={"center"} variant={"caption"} color={"white"}>

                Copyright 2022 SAINT ROCK MEDIA<br/>
            </Typography>

        </Stack>
    )

}

export default Footer
