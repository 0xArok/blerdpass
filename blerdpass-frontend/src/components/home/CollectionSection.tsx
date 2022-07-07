import {NextPage} from "next";
import {Box, Grid, Stack, Typography, Link, Container} from "@mui/material";
import Image from "next/image";
import V1 from "../../../public/florida_bonneted_bat_lava.png";
import V2 from "../../../public/fujian_free_tailed_bat_lava.png";
import V3 from "../../../public/hills_horseshoe_bat_lava.png";
import V4 from "../../../public/jamaican_flower_bat_lava.png";
import V5 from "../../../public/jamaican_greater_funnel_eared_bat_lava.png";
import V6 from "../../../public/v6.webp";
import {Custom} from "../../styles/Theme";
import {Swiper, SwiperSlide} from "swiper/react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {Element} from "react-scroll";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import {FreeMode, Pagination, Navigation} from "swiper";

function CollectionSection() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        {/*} <Stack id="Monsters" alignItems="center" spacing={3} paddingTop={10} paddingBottom={5} paddingX={2}
        sx={{
            overflow: "auto",
            objectFit: 'cover',
            backgroundImage: "url('/collection-bg.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition:  "50% 50%",
            backgroundColor: '#14161f'
          }}    >
          <Element name="collection" />
          <Typography variant={"h2"} color="primary">
              THE BATS
          </Typography>
          <Container>
            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                breakpoints={{
                    390: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                    1600: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                }}
                freeMode={true}
                modules={[Pagination, FreeMode, Navigation]}
                navigation
                className="mySwiper"
            >
                <SwiperSlide>
                    <Stack className="nes-container is-rounded" direction={matches ? "row" : "column"} alignItems="center" spacing={3} paddingTop={6} paddingBottom={6} paddingX={2} backgroundColor="#F8A34B" maxWidth={"50vw"}>
                      <Image src={V1} width={350} height={350}/>
                      <Box {...(matches && { width: '90vw'})} textAlign="left">
                        <Typography variant={"h3"} mb={2} sx={{ fontFamily: 'Macondo Swash Caps'}}>Florida Bonneted Bat</Typography>
                        <Typography paddingBottom={2}>The Florida bonneted bat (Eumops floridanus) flaps their wings only in a few counties in southern Florida. This species was only recognized in 2008. They have been spotted foraging in a wide variety of habitats, including pine rocklands, mangroves, pine flatwoods and wet prairies, as well as residential, suburban and urban areas. They are dubbed as one of the most critically endangered mammal species in North America. Under <Link href="https://www.batcon.org/article/florida-bonneted-bat/" target="_blank" rel="noopener" color="secondary">1000</Link> Florida Bonneted Bat are still alive in the wild.</Typography>
                      </Box>
                    </Stack>
                </SwiperSlide>
                <SwiperSlide>
                  <Stack className="nes-container is-rounded" direction={matches ? "row" : "column"} alignItems="center" spacing={3} paddingTop={6} paddingBottom={6} paddingX={2} backgroundColor="#F8A34B" maxWidth={"50vw"}>
                    <Image src={V2} width={350} height={350}/>
                    <Box {...(matches && { width: '90vw'})} textAlign="left">
                      <Typography variant={"h3"} mb={2} sx={{ fontFamily: 'Macondo Swash Caps'}}>Fijian Free Tailed Bat</Typography>
                      <Typography paddingBottom={2}>The Fijian Free-tailed Bat (Chaerephon Bregullae) resides in the islands of Fiji. In the recent years, they have only been detected on two islands (Vanua Levu and Taveuni) out of hundreds of Fijian islands. But their only known roosting site is within the darkness of Nakanacagi Cave on the island of Vanua Levu. The decline of bats in Fiji are triggered by <Link href="https://www.batcon.org/our-work/endangered-species-interventions/fijian-free-tailed-bat/" target="_blank" rel="noopener noreferrer" color="secondary">many factors</Link> such as tourism, hunting, persecution, and the changing landscape around the caves. This species is classified as Endangered on the IUCN red list. Around <Link href="https://www.iucnredlist.org/species/4309/209550994" target="_blank" rel="noopener" color="secondary">5000 to 7000</Link> Fijian Free-tailed Bat lurks in the wild.
                      </Typography>
                    </Box>
                  </Stack>
                </SwiperSlide>
                <SwiperSlide>
                  <Stack className="nes-container is-rounded" direction={matches ? "row" : "column"} alignItems="center" spacing={3} paddingTop={6} paddingBottom={6} paddingX={2} backgroundColor="#F8A34B" maxWidth={"50vw"}>
                    <Image src={V3} width={350} height={350}/>
                    <Box {...(matches && { width: '90vw'})} textAlign="left">
                      <Typography variant={"h3"} paddingBottom={0} mb={2} sx={{ fontFamily: 'Macondo Swash Caps'}}>Hills Horseshoe Bat</Typography>
                      <Typography paddingBottom={2}>Very little is known about Hills Horseshoe Bat (Hilli Rinopholus), which had only been found in 2019 after going missing for 40 years. Latest findings have recorded only <Link href="https://www.batcon.org/press/conservationists-announce-the-rediscovery-of-an-african-bat-species-lost-for-40-years/" target="_blank" rel="noopener noreferrer" color="secondary">8 locations</Link> where they lurk within Nygunwe National Park, Rwanda. This species is classified as critically endangered in the IUCN red list.
                      </Typography>
                    </Box>
                  </Stack>
                </SwiperSlide>
                <SwiperSlide>
                  <Stack className="nes-container is-rounded" direction={matches ? "row" : "column"} alignItems="center" spacing={3} paddingTop={6} paddingBottom={6} paddingX={2} backgroundColor="#F8A34B" maxWidth={"50vw"}>
                    <Image src={V4} width={350} height={350}/>
                    <Box {...(matches && { width: '90vw'})} textAlign="left">
                      <Typography variant={"h3"} paddingBottom={0} mb={2} sx={{ fontFamily: 'Macondo Swash Caps'}}>Jamaican Flower Bat</Typography>
                      <Typography paddingBottom={2}>The Jamaican flower bat (Phyllonycteris aphylla) had been considered extinct for 20 years until they were rediscovered in 2010. Their white fur and snub nose makes them visible amidst the darkness of Stony Hill Cave, Jamaica. The cave’s surrounding have been changing as roads and neighborhood pops around the land. Under <Link href="https://www.batcon.org/article/back-from-the-brink/" target="_blank" rel="noopener noreferrer" color="secondary">250</Link> Jamaican Flower Bat are living in this cave.</Typography>
                    </Box>
                  </Stack>
                </SwiperSlide>
                <SwiperSlide>
                  <Stack className="nes-container is-rounded" direction={matches ? "row" : "column"} alignItems="center" spacing={3} paddingTop={6} paddingBottom={6} paddingX={2} backgroundColor="#F8A34B" maxWidth={"50vw"}>
                    <Image src={V5} width={350} height={350}/>
                    <Box {...(matches && { width: '90vw'})} textAlign="left">
                      <Typography variant={"h3"} paddingBottom={0} mb={2} sx={{ fontFamily: 'Macondo Swash Caps'}}>Jamaican Greater Funnel Eared Bat</Typography>
                      <Typography paddingBottom={2}>The Jamaican greater funnel-eared bat (Natalus jamaicensis) comes from an ancient family of cave-dwelling bats, mostly hiding in their lair in St. Clair Cave, Jamaica. Lurking down low on the cave walls, their changing surroundings have affected their insectivorous diet and their remaining habitats, while constantly being preyed on by other animals. These conditions makes them highly vulnerable to extinction. Under <Link color="secondary" target="_blank" rel="noopener noreferrer" href="http://www.edgeofexistence.org/species/jamaican-greater-funnel-eared-bat/">100</Link> Jamaican Greater Funnel-eared Bat nests in this cave.</Typography>
                    </Box>
                  </Stack>
                </SwiperSlide>
            </Swiper>
          </Container>
        </Stack>*/}
    )

}

export default CollectionSection
