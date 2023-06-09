import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Ryan Wu's personal website. New York based Stanford ICME graduate, "
    + 'co-founder and CTO of Arthena, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">關於此站</Link></h2>
          <p>
            簡單介紹我，帶領你進入我的世界
          </p>
        </div>
      </header>
      <p>歡迎來到我的網站，可以先 <Link to="/about">認識我</Link></p>
      <p>此網站是開源 :<a href="https://github.com/love99067333/personal-site-react">在此</a></p>
    </article>
  </Main>
);

export default Index;
