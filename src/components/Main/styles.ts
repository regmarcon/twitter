import styled,{css} from "styled-components";
import { ArrowLeft, Email, Home, Notifications, Search } from "../../styles/icons";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: min-content(601px,100%); //será feita uma comparação entre os dois valores, e quem estiver mais próximo do tamanho da tela, irá ser o considerado
    @media (min-width: 500px){
        border-left: 1px solid var(--outline);
        border-right: 1px solid var(--outline);
    }
`;
export const Header = styled.div`
   z-index: 2;
   position: sticky;
   top: 0;
   background: var(--primary);

   display: flex;
   align-items: center;

   text-align: left;
   padding: 8px 0 9px 13px;
   border-bottom: 1px solid var(--outline);

   > button{
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;

    &:hover{
        background: var(--twitter-dark-hover);
    }
   }
`;
export const BackIcon = styled(ArrowLeft)`
    width: 24px;
    height: 24px;
    fill: var(--twitter);
    
`;
export const ProfileInfo = styled.div`
    margin-left: 17px;
    display: flex;
    flex-direction: column;
    > strong{
        font-size: 19px;
    }
    > span{
        font-size: 15px;
        color: var(--gray);
    }

   
`;
export const BottomMenu = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
    background: var(--primary);
    width: 100%;
    border-top: 1px solid var(--outline);
    display: flex;
    justify-content: space-between;
    padding:8px min(46px, max(10vw,10px)); //ajustar automaticamente
    @media(min-width: 500px){ //o bottomMenu n vai aparecer quando o layout tiver mais de 500px
        display: none;
    }
`;
export const iconCss = css`
    width: 31px;
    height: 31px;
    cursor: pointer;
    color:var(--gray);
    &:hover,&.active{
        fill: var(--twitter);

    }
`;
export const HomeIcon = styled(Home)`
    ${iconCss}
`;
export const SearchIcon = styled(Search)`
    ${iconCss}
`;
export const EmailIcon = styled(Email)`
    ${iconCss}
`;
export const BellIcon = styled(Notifications) `
    ${iconCss}
`;