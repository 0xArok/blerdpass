
import type {NextPage} from 'next'
import {Button, Dialog, DialogContent, Stack, Typography} from "@mui/material";
import HeadSection from "../components/home/HeadSection";
import AboutSection from "../components/home/AboutSection";
import CollectionSection from "../components/home/CollectionSection";
import RoadmapSection from "../components/home/RoadmapSection";
import TeamSection from "../components/home/TeamSection";
import FAQSection from "../components/home/FAQSection";
import {useAppSelector} from "../hooks/hooks";
import {TwitterIcon, TwitterShareButton} from "react-share"
import {useEffect, useState} from "react";


const Home: NextPage = () => {

    const [open, setOpen] = useState(false);




    // @ts-ignore
    return (
        <Stack marginTop={{lg: -20, xs: -10}}>
            <HeadSection/>

        </Stack>


    )
}

export default Home
