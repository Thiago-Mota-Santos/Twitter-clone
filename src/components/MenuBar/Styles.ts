import styled, { css } from 'styled-components';


import {
    Home,
    Notifications,
    Email,
    FavoriteBorder,
    Person,
    ExitToApp,
    Twitter
} from '../../styles/Icons'

export const Container = styled.div`
  display:none;

  @media screen and (min-width:500px){
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    position:sticky;
    top: 0;
    left: 0;
    padding: 9px 19px 20px;
    max-height: 100vh;
  }
`;

export const MenuButton = styled.button`
  display:flex;
  align-items:center;
  flex-shrink: 0;
  margin: -30px;
  > span {
    display:none;
  }

  @media screen and (min-width:1280px){
    > span {
        display: inline;
        font-size: 19px;
        font-weight: bold;
    }
    padding-right: 15px;
  }

  padding: 8.25px 0;
  outline: 0;

  & + button{
    margin-top: 16.5px;
  }

  & + button:last-child{
    margin-top: 33px;
    width: 40px;
    height: 40px;

    >span{
        display:none;
    }

    @media screen and (min-width: 1280px){
     
        width: 100%;
        height: unset;

        > span {
           display:inline;
        }

    }
  }

  cursor:pointer;
  border-radius: 25px;


  &:hover, &.active{
    span, svg{
        color:var(--twitter);
        fill: var(--twitter);
    }
  }
`;

export const TopSide = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   @media screen and (min-width: 1280px){
    align-items: flex-start; 
   }
`;

const Icon = css`
 display:flex;
 flex-direction: column;
 flex-shrink: 0;
 margin : 20px;
 height : 30px;
 color: var(--white);
`

export const Logo = styled(Twitter)`
 width: 30px;
 height: 30px;
 margin-bottom: 23px;

 >svg {
    fill: var(--white);
 }
 

`;
export const EmailIcon = styled(Email)` 
  ${Icon};
`;
export const HomeIcon = styled(Home)`
  ${Icon};
`;
export const BellIcon = styled(Notifications)`
  ${Icon};
`;
export const ProfileIcon = styled(Person)`
  ${Icon};
`;

export const FavoriteIcon = styled(FavoriteBorder)`
  ${Icon};
`;



export const ProfileData = styled.div`
  display:none;

  @media screen and (min-width:1280px){
    display:flex;
    flex-direction: column;
    margin-left: 35px;
    font-size: 14px;

    >span {
        color: var(--gray);
    }
  }
`;
export const  BotSide = styled.div`
  margin-top:20px;
  display:flex;
  align-items: center;
`;
export const  Avatar = styled.div`
   width: 40px;
   height: 40px;
   flex-shrink: 0;
   background: var(--gray);
   border-radius: 50%;
`;
export const ExitIcon = styled(ExitToApp)`
  display: none;

  @media screen and (min-width: 1280px){
    display:inline-block;
    width: 25px;
    height: 25px;
    margin-left: 30px;
    cursor: pointer;

    &:hover{
       > path{
        color: var(--like);
       }
       
    }
  }
`;
