import {NextPage} from "next";
import {Grid, Stack, Typography, Container, Box} from "@mui/material";
import Image from 'next/image'
import Bat1 from '../../../public/1.png';
import Bat2 from '../../../public/2.png';
import Bat3 from '../../../public/3.png';
import Bat4 from '../../../public/4.png';
import Bat5 from '../../../public/5.png';
import Bat6 from '../../../public/6.png';
import Bat7 from '../../../public/7.png';
import Bat8 from '../../../public/8.png';
import Bat9 from '../../../public/9.png';
import Bat10 from '../../../public/10.png';
import Bat11 from '../../../public/11.png';
import {Element} from "react-scroll";

function TeamSection() {
    const teams = [
        {
            title: 'artists',
            name: 'crazydoctor107',
            img: Bat1
        },
        {
            name: 'fantompocong',
            img: Bat2
        },
        {
            name: 'jjjuneau',
            img: Bat3
        },
        {
            name: 'koofraaa',
            img: Bat4
        },
        {
            name: 'orang bunian',
            img: Bat5
        },
        {
            name: 'rimrimrimbaud',
            img: Bat6
        },
        {
            title: 'lore author',
            name: 'quietpace',
            img: Bat7
        },
        {
            title: 'project manager',
            name: 'bobby',
            img: Bat8
        },
        {
            title: 'community manager',
            name: 'tossico',
            img: Bat9
        },
        {
            title: 'lead dev',
            name: 'neuromancer',
            img: Bat10
        },
        {
            title: 'frontend',
            name: 'ap',
            img: Bat11

        }
    ]
    return (
        <>
            {/*<Box id="teams" sx={{background: '#14161f'}}>
        <Element name="teams" />
        <Container>
          <Stack spacing={2} alignItems="center" justifyContent="center" mb={10}>
              <Typography variant={"h2"} color="primary">
                  THE TEAM
              </Typography>
                <Grid container alignItems='end' spacing={6}>
                  {
                      teams.map((team) => {
                          return (
                              <Grid key={team.name} item>
                                <Stack spacing={3} direction={"column"} justifyContent="end" alignItems="start">
                                  <Typography variant={"h5"} color="primary" mb={2}>
                                      {team.title && team.title.toUpperCase()}
                                  </Typography>
                                  <Image width={72} height={72} component="img" src={team.img} />
                                  <Typography variant={"h6"} color="primary">
                                      {team.name.toUpperCase()}
                                  </Typography>
                                </Stack>
                              </Grid>
                          )
                      })
                  }
              </Grid>
          </Stack>
        </Container>
      </Box>*/}
        </>

    )

}

export default TeamSection
