import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;
export const Tab = styled.div`
    margin-top: 10px;
    padding: 11px 0 15px;
    font-weight: bold;
    font-size: 15px;
    outline: 0;
    cursor: pointer;
    color: var(--twitter);
    border-bottom: 2px solid var(--twitter);
    &:hover{
        background: var(--twitter-dark-hover);
    }

`;
export const Tweets = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0; // proporção com que um item deve encolher caso seja necessário
`;