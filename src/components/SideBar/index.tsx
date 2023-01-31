import React from 'react';
import StickyBox from 'react-sticky-box';
 import List from '../List';
 import FollowSuggestion from '../FollowSuggestion';
 import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      {/* para melhorar o scroll stickybox */}
      <StickyBox> 
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="Pietro Marcon Fava"
                nickname="@pietromf"
              />, 
              <FollowSuggestion name="Fulano de Tal" nickname="@fulanotal" />,
              <FollowSuggestion
                name="Cristiane Marcon"
                nickname="@crismarcon"
              />,
            ]}
          />
          <List
            title="O que está acontecendo"
            elements={[
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;