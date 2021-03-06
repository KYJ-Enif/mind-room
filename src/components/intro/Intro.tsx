import React, { useState, useRef, useEffect } from 'react';
import Lottie from 'lottie-react';
import './intro.scss';
import data from '../../bodymovin/data.json';
import letterOpenSound from '../../assets/sounds/letterOpen.mp3';
import usePage from '../../hooks/usePage';
import useBackground from '../../hooks/useBackground';
import IntroLoading from './IntroLoading';
import useBgm from '../../hooks/useBgm';
import useLanguage from '../../hooks/useLanguage';

function Intro() {

  const { goNextPage } = usePage();
  const [isLetterOpened, setIsLetterOpened] = useState(false);
  const [isMsgOn, setIsMsgOn] = useState(false);
  const [isLottiePlay, setIsLottiePlay] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isHideLoading, setIsHideLoading] = useState(false);
  const { isEnglish } = useLanguage();

  const { playBgm } = useBgm();
  const audioRef = useRef<HTMLAudioElement>(null)
  const { setBackgroundColor } = useBackground();

  useEffect(() => {
    setBackgroundColor("#95948a");
    setTimeout(() => {
      setIsImageLoaded(true)
    }, 4000)

  }, [])

  // useEffect(() => {
  //   setTimeout(() => {
  //     isImageLoaded && setIsHideLoading(true);
  //   }, 1000)
  // }, [isImageLoaded])


  const onAnimationEnd = () => {
    setIsMsgOn(true)
  }

  const onClickLetter = () => {
    // if (audioRef.current && !isLetterOpened) {
    //   audioRef.current.play();
    // }
    if (isHideLoading && !isMsgOn) {
      setIsLottiePlay(true);
      setIsLetterOpened(true);
      playBgm();
      if (audioRef.current) {
        audioRef.current.play();
      }
    }
  }

  // const onDataReady = (e: any) => {
  //   console.log("onDataReady");
  //   console.log(e)
  // }

  const onLoadedImages = () => {
    setTimeout(() => {
      setIsImageLoaded(true)
    }, 1000)
  }

  const hideLoading = () => {
    setIsHideLoading(true)
  }

  return (
    <div className="intro-wrp" onClick={onClickLetter}>
      {
        !isHideLoading &&
        <IntroLoading isImageLoaded={isImageLoaded} hide={hideLoading} />
      }
      <Lottie
        className="lottie-wrp"
        // onDataReady={onDataReady}
        onLoadedImages={onLoadedImages}
        autoplay={isLottiePlay}
        animationData={data}
        loop={false}
        onComplete={onAnimationEnd} />
      <div className={`intro-msg${isLetterOpened ? " hidden" : ""}`}>
        {isHideLoading &&
          <>
            <p>{isEnglish ? "New message!" : "편지가 도착했습니다!"}</p>
            <p className="intro-msg-click">{
              isEnglish ? "Click the envelope" : "봉투를 클릭하세요"}
            </p>
          </>}
      </div>
      <div className={`intro-msg${isMsgOn ? "" : " hidden"}`}>
        <h5>{isEnglish ? "Welcome to the Mind-room" : "마음의 방으로 초대합니다"}</h5>
        {
          isEnglish
            ?
            <p className="text-english">
              Hello, I am an artist, Syeon.<br />
              I am working on ways to empathize with<br />
              people’s emotional difficulties<br />
              and help them through art.<br />
              <br />
              This test analyzes your current psychological<br />
              status and shows you a room that could<br /> 
              comfort you based on colour psychology.<br />
              <br />
              Take your time to explore this test<br />
              and feel free to make the space you like.<br />
              <br />
              I look forward to your participation.<br />
              <br />
              Thank you.<br />
              Syeon
            </p>
            :
            <p>안녕하세요, 아티스트 <span className="smaller">Syeon</span>입니다.<br />
              저는 예술을 통해 사람들의 정서적 아픔에 공감하고,<br />
              이를 치유할 수 있는 방법을 연구하고 있습니다.<br />
              <br />
              이 테스트는 당신의 현재 심리를 알아보고,<br />
              색채심리학을 기반으로<br />
              당신에게 위안이 될 수 있는 방을 보여드립니다.<br />
              이를 활용하여 당신만의 공간을 꾸며보세요.<br />
              <br />
              많은 참여 부탁드립니다.<br />
              <br />
              감사합니다.<br />
              Syeon
        </p>
        }
        <button className="intro-btn-start" onClick={() => goNextPage()}>{isEnglish ? "Start" : "시작하기"}</button>
      </div>
      {/* <Footer /> */}
      {
        <audio ref={audioRef} src={letterOpenSound} ></audio>
      }
    </div>
  );
}

export default Intro;
