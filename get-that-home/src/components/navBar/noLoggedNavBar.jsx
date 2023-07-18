import styled from "@emotion/styled";
import { BiSearch } from 'react-icons/bi';
import { TbUserPlus } from 'react-icons/tb';

import { JoinButton, LoginButton } from "../button";
import { MainInput } from "../input";

export const NavContainer = styled.div`
    display: flex;
    width: 100%;
    height: 72px;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.20);
`
export const ImgContainer = styled.div`
    width: 136px;
    height: 40px;
`
export const OptionsContianer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
`
export const Finder = styled.div`
    padding: 8px 16px;
    width: 170px;
    height: 40px;
    display: flex;
    gap: 8px;
    align-items: center;
`


const NoLoggedNavBar = () => {
    return ( 
        <NavContainer>
            <ImgContainer>
                esta es una imagen
            </ImgContainer>
            <OptionsContianer>
                <Finder>
                    <BiSearch fontSize={24} color="#616161"/>
                    <MainInput placeholder="FIND A HOME"/>
                </Finder>
                <JoinButton>
                    <TbUserPlus fontSize={20} color="#616161"/>
                    join
                </JoinButton>
                <LoginButton>
                    <TbUserPlus fontSize={20} color="white"/>
                    login
                </LoginButton>
            </OptionsContianer>
        </NavContainer>
     );
}
 
export default NoLoggedNavBar;