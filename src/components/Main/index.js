import React from 'react'
import Video from '../../videos/video.mp4'
import { MainContainer, MainBg, VideoBg, MainContent, MainH1, MainP, MainBtnWrap, Button} from './MainElements'

const Main = () => {
    return (
       <MainContainer>
           <MainBg>
               <VideoBg autoplay loop muted src={Video} type='video/mp4'></VideoBg>
           </MainBg>
           <MainContent>
                <MainH1>Voting Made Easy</MainH1>
                <MainP>Join Us and Establish a Government that Serves and Respects people</MainP>
            </MainContent>
            <MainBtnWrap>
                <Button to="signup">
                    Get Started
                </Button>
            </MainBtnWrap>
       </MainContainer>
       
    )
}

export default Main
