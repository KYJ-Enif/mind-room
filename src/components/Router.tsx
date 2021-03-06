import React, { useRef, useEffect } from 'react';
import Intro from './intro/Intro';
import usePage from '../hooks/usePage';
import Question from './Question';
import Result from './result/Result';
import styled from 'styled-components';
import useBackground from '../hooks/useBackground';
import Footer from './Footer';
import bgm from '../assets/sounds/bgm.mp3';
import useSound from '../hooks/useSound';
import useBgm from '../hooks/useBgm';
import Axios from 'axios';

const SERVER_URL = process.env.REACT_APP_API_SERVER_URL;

const StyledDiv = styled.div<{
    backgroundColor?: string
} >`
    background-color: ${props => props.backgroundColor};
 `

function Router() {

    const { pageIdx } = usePage();
    const { backgroundColor } = useBackground();
    const { isSoundOn } = useSound();
    const { isBgmPlay } = useBgm();
    const bgmRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        access();
    }, [])

    const access = function () {
        Axios.get(`${SERVER_URL}/access`)
            .then(() => {
                console.log('access')
            })
            .catch((err) => {
                console.error(err)
            })
    }

    const makePage = (idx: number) => {
        if (!idx) {
            return <Intro />
        }
        else if (idx < 10) {
            // return <Result />
            return <Question />
        }
        else {
            return <Result />
        }
    }

    useEffect(() => {
        if (bgmRef.current)
            if (isBgmPlay) {
                bgmRef.current.volume = 0.3;
                bgmRef.current.play();
            }
            else {
                bgmRef.current.pause();
            }

    }, [isBgmPlay])

    return (
        <StyledDiv className="app-wrapper" backgroundColor={backgroundColor}>
            <div className="app-inner">
                {makePage(pageIdx)}
                <audio ref={bgmRef} muted={!isSoundOn} src={bgm} loop />
            </div>
            <Footer />
        </StyledDiv>
    )
}

export default Router;
