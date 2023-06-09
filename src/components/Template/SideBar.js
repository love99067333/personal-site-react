import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/photo.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ryan Wu</h2>
        <p><a href="mailto:love99067333@gmail.com">Mail Me</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>關於我</h2>
      <p>
        Laravel, PHP Full stack Developer
      </p>
      <p>
        曾任職於：
      </p>
      <ul>
        <li> <a href="/">IT American</a> </li>
        <li> <a href="https://www.sapido.com.tw/" target="_blank" rel="noreferrer">金智洋科技股份有限公司</a> </li>
        <li> <a href="https://www.itri.org.tw/" target="_blank" rel="noreferrer">工業技術研究院</a> </li>
        <li> <a href="https://www.coolbe.com.tw/" target="_blank" rel="noreferrer">酷必資訊</a> </li>
      </ul>
      <p>
        Skill
      </p>
      <ul>
        <li> PHP, Laravel - 約三年經驗 </li>
        <li> Vue, React - 約三年經驗</li>
        <li> git/ git flow </li>
        <li> others: 第三方API、Linux、Nosql、Docker、資安... 更多請參考以下</li>
      </ul>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Ryan Wu <Link to="/">ryan.wu.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
