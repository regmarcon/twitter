import React from 'react';

 import { Container,Tab,Tweets } from './styles';

 import Tweet from '../Tweet';

const Feed: React.FC = () => {
  return (
    <Container>
        <Tab>Tweets
                <Tweets>
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
            </Tweets>
        </Tab>
    </Container>
  )
}

export default Feed;