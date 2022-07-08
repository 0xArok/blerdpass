import {NextPage} from "next";
import {Stack, Typography, Box} from "@mui/material";
import Image from 'next/image'
import twitter from '../../../public/twitterlogo.png';
import discord from '../../../public/discordlogobp.png';
import telegram from '../../../public/telegram.png';
import odyssey from '../../../public/logo_odyssey.png'
import eth from '../../../public/eth.png';
import {Custom} from "../../styles/Theme";

function Footer() {

    return (
        <Stack direction="row"
               justifyContent="space-between"
               height="100%"
               alignItems="center" paddingY={3}
               spacing={3}
               sx={{background: '#0a070a'}}
               width={"100vw"}
               zIndex={10}
               paddingLeft={5} >
            <a href={"https://blerdpass.io/terms-and-conditions/"}>
                <Typography variant={"h4"} color={"#2ea3f2"}>
                    Terms and Conditions
                </Typography>
            </a>


            <Stack direction={"row"} alignItems="center" justifyContent="center" spacing={1} paddingY={3}>
                <a href={"https://twitter.com/blerdconDC"} target="_blank" rel="noreferrer">
                    <Image src={twitter} alt="twitter" width={80} height={52}/>
                </a>
                <a href={"https://discord.gg/kzu7aU2gmH"} target="_blank" rel="noreferrer">
                    <Image src={discord} alt="discord" width={90} height={62}/>
                </a>

            </Stack>




        </Stack>
    )

}

export default Footer
