import styled from "styled-components";

interface Props{
    outlined ?:boolean;
}

export default styled.button<Props>`
// se a propriedade outlined for recebida, entao inserir contorno, senao n insere
//o botao pode ser azul ou apenas contornado em azul
    background: ${(props) => (props.outlined ? 'transparent' : 'var(--twitter)')};
    //quando o botao tem cor, o texto é branco, senao o texto é da cor --twitter
    color: ${(props) => (props.outlined ? 'var(--twitter)' : 'var(--white)')};
    border: ${(props) => (props.outlined ? '1px solid var(--twitter)' : 'none')};

    padding: 16px;
    border-radius: 25px;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    outline: 0;
    &:hover{
        background: ${(props) => (props.outlined ? 'var(--twitter-dark-hover)' : 'var(--twitter-light-hover)')};
    }

`;