import styled,{css} from "styled-components";
import Button from "../Button";
import {LocationOn,Cake} from '../../styles/icons'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 100%;
    overflow-y: auto;

    scrollbar-width: none; //firefox
    ::-webkit-scrollbar{
        display: none;
    }

`;
export const  Banner = styled.div`
    flex-shrink: 0;
    width: 100%;
    height: min(33vw,199px); //33% do tamanho da tela ou 199px, sendo 199px o valor mínimo que poderá atingir
    background: var(--twitter);
    position: relative;
`;
export const  Avatar = styled.div`
    width: max(45px, min(135px,22vw)); //para deixar a foto do avatar responsiva
    height: max(45px, min(135px,22vw)); //para deixar a foto do avatar responsiva

    border: 3.75px solid var(--primary);
    background: var(--gray);
    border-radius: 50%;
    position: absolute; //position absolute só funciona se o pai for relative
    bottom: max(-60px,-10vw);
    left: 15px;
`; 
export const  ProfileData = styled.div`
    padding: min(calc(10vw+7px),67px) 16px 0;

    display: flex;
    flex-direction: column;
    position: relative;
    > h1{
        font-weight: bold;
        font-size: 19px;
    }
    > h2{
        font-weight: normal;
        font-size: 15px;
        color: var(--gray);
    }
    > p{
        font-size: 15px;
        margin-top: 11px;

        > a{
            text-decoration: none;
            color: var(--twitter);
        }
    }
    > ul{
        list-style: none;
        margin-top: 10px;
        margin-bottom: 10px;

        > li{
            font-size: 15px;
            color: var(--gray);
            > svg{
               fill: var(--gray);
               margin-right: 5px;
            }
        }
    }

`;
export const Followage = styled.div`
    display: flex;

    > span{
        font-size: 15px;
        color: var(--gray);
        & + span{ //depois do primeiro span o próximo vai usar o margin-left definido abaixo
            margin-left: 20px;
        }
    }
`;
const iconCSS = css`
    width: 20px;
    height: 20px;
    color: var(--gray);
`;    

export const LocationIcon = styled(LocationOn)`
    ${iconCSS}
`;
export const CakeIcon = styled(Cake)`
    ${iconCSS}
`;

export const EditButton = styled(Button)`
    position: absolute;
    top: 2vw;
    right:7px;

    padding: 4px 16px;
    font-size: 13px;
    @media (min-width: 320px){
        top:10px;
        padding: 10px 19px;
        font-size: 15px;
    }

`;