import React from 'react';

import { Container,Topside,Logo,MenuButton,HomeIcon,BellIcon,EmailIcon,FavoriteIcon,
    ProfileIcon, ProfileData,Botside,Avatar,ExitIcon } from './styles';
import Button from '../Button';

const MenuBar: React.FC = () => {
  return (
    <Container>
        <Topside>
            <Logo />
            <MenuButton>
                <HomeIcon /><span>Página Inicial</span>                
            </MenuButton>    
            <MenuButton>
                <BellIcon /><span>Notificações</span>                
            </MenuButton>   
            <MenuButton>
                <EmailIcon /><span>Mensagens</span>                
            </MenuButton>   
            <MenuButton>
                <FavoriteIcon /><span>Favoritados</span>                
            </MenuButton>   
            <MenuButton>
                <ProfileIcon /><span className='ative'>Perfil</span>                
            </MenuButton>   
            <Button><span>Tweetar</span></Button>    
        </Topside>
        <Botside>
            <Avatar />
        
            <ProfileData>
                <strong>Regiane Marcon</strong>
                <span>@regmarcon</span>
            </ProfileData>
            <ExitIcon />
        </Botside>
    </Container>
  );
}

export default MenuBar;