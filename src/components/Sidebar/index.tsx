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

const Sidebar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="Matheus" nickname="@matheus" />,
              <FollowSuggestion name="Cyrillo" nickname="@cyrillo" />,
              <FollowSuggestion
                name="Matheus Cyrillo"
                nickname="@cyrillomatheus"
              />,
            ]}
          />

          <List title="News" elements={[<News />, <News />, <News />]} />
          <List title="News" elements={[<News />, <News />, <News />]} />
          <List title="News" elements={[<News />, <News />, <News />]} />
          <List title="News" elements={[<News />, <News />, <News />]} />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default Sidebar;
