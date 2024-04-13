import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
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

    <article className="post" id="ithlep">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="https://ithelp.ithome.com.tw/users/20163286/articles">Laravel鐵人賽：我推的Ｌａｒａｖｅｌ</Link></h2>
          <p>2023-10-15</p>
        </div>
      </header>
      <p>
        ２０２３年參加了ＩＴ鐵人競賽，內容為介紹Ｌａｒａｖｅｌ　１０（２０２３年１０為最新釋出版本），成功連續三十天不中斷文章，累積瀏覽量破萬，並有書商洽詢合作出書，書籍撰寫中，敬請期待．．．
      </p>
    </article>
  </Main>
);

export default Index;
