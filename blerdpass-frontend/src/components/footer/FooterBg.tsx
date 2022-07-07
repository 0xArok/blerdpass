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
      <Box sx={{
          height: '10vw',
          overflow: "auto",
          objectFit: 'cover',
          backgroundColor: "#fff",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition:  "50% 50%"
        }}
      />
    )

}

export default Footer
