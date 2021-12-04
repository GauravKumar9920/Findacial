import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MainContainer = styled.div`
    background: #0c0c0c;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 800px;
    position: relative;
    z-index: 1;
`
export const MainBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`
export const MainContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-directions: column;
    align-items: center;
`
export const MainH1 = styled.h1`
    font-size: 50px;
    text-align: center;
    color: white;
`
export const MainP = styled.p`
    margin-top: 45px;
    color: white;
    font-size: 25px;
    text-align: center;
    max-width: 700px;
`
export const MainBtnWrap = styled.div`
    margin-top: 32px;
    align-items: center;
    display: flex;
    flex-directions: column;
`
export const Button = styled(Link)`
    border-radius: 50px;
    background: orange;
    padding: 15px 50px;
    color: white;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
`
