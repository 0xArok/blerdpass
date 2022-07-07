import {NextPage} from "next";
import {Grid, Hidden, Stack, Typography} from "@mui/material";
import Image from "next/image";
import vlogo from "../../../public/vader_rounded.png";
import {Box} from "@mui/system";
import {Custom} from "../../styles/Theme";
import MintRoot from "../mint/MintRoot";
import {useWeb3Context} from "../../web3/web3-context";
import ConnectButton from "../header/ConnectButton";
import Typist from 'react-typist';

function AboutSection() {
    const {connected} = useWeb3Context();

    return (
      <Box sx={{
          overflow: "auto",
          objectFit: 'cover',
          backgroundImage: "url('/batcave.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition:  "50% 50%"
        }}
      >
        <Grid container padding={6} alignItems="center" id="Mint">
          <Grid item sm={6}>
          <Typography
            color={"white"}
            paddingBottom={6}
          >
            As the landscape of Earth is changing, every year thousands of bats become prey to the hands of humanity as their habitats are
            destroyed. Dead and unmourned, they wander across different realms to find a place or another being to accompany their path
            to restore the balance of nature. Their bodies mutate; disintegrating and reintegrating themselves countless times to adjust with
            the constantly changing elements that compose their surroundings. These mutations, BatPocong, gains a shroud as a token of their
            persistence to fight for their living kin in the other realm.
          </Typography>
          {connected ?
            <Stack paddingBottom={12}>
                <Typography textAlign={"center"} variant={"h1"}
                  color="primary" paddingBottom={4}
                  sx={{textShadow: '3px 3px 3px #26a4fe'}}
                >
                  MINT
                </Typography>
                <MintRoot/>
            </Stack>
            :
            <Stack paddingBottom={12} spacing={2} alignItems={"center"}>
              <ConnectButton/>
            </Stack>
          }
          </Grid>
        </Grid>
      </Box>
    )

}

export default AboutSection
