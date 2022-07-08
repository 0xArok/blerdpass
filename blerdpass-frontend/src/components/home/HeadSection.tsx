import {NextPage} from "next";
import {Hidden, Stack, Typography} from "@mui/material";
import Image from "next/image";
import {Box} from "@mui/system";
import BP from "../../../public/batpocong-header.gif"
import {useWeb3Context} from "../../web3/web3-context";
import ReactPlayer from "react-player";
import Typist from 'react-typist';
import {Custom} from "../../styles/Theme";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MintRoot from "../mint/MintRoot";
import ConnectButton from "../header/ConnectButton";

function HeadSection() {
  const {connected} = useWeb3Context();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Stack height={matches ? "95vh" : "90vh"} justifyContent={"center"} alignItems={"center"} justifyItems={"center"} sx={{backgroundColor: "#001051"}}>

      {connected ?
          <Stack paddingBottom={12} marginTop={12} paddingTop={6}>

            <Typography textAlign={"center"} variant={"h1"}
                        color={"#fff"} paddingBottom={4}
                        sx={{textShadow: '3px 3px 3px #ed1f24'}}>
              MINT
            </Typography>

            <MintRoot/>
          </Stack>

          :
          <Stack paddingBottom={12} spacing={2} alignItems={"center"}>
            <Typography textAlign={"center"} variant={"h1"}
                        color={"#fff"} paddingBottom={2}
                        sx={{textShadow: '3px 3px 3px #ed1f24'}}>
              MINT
            </Typography>

            <Typography variant={"h3"} paddingBottom={2} color={"white"}>Connect wallet to mint</Typography>
            <ConnectButton/>
          </Stack>
      }
    </Stack>
  )
}

export default HeadSection
