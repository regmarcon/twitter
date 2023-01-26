import React from 'react';

import { Container, Banner, Avatar, ProfileData,LocationIcon,CakeIcon,Followage,EditButton } from './styles';
import Feed from '../Feed'

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>
        <ProfileData>
             <EditButton outlined></EditButton> 
            <h1>Regiane marcon</h1>
            <h2>@regmarcon</h2>
            <p>Deveolper
                <a href="#"></a>
            </p>
            <ul>
                <li>
                    <LocationIcon />
                    Dourados, MS
                </li>
                <li>
                    <CakeIcon />
                    Nascida em 21 de julho de 1977
                </li>
            </ul>
            <Followage>
                <span>
                    seguindo <strong>1025</strong>
                </span>
                <span>
                    <strong>12121 </strong>seguidores
                </span>
            </Followage>
        </ProfileData>
        <Feed />

    </Container>
  )
}

export default ProfilePage;