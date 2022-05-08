import dayjs from 'dayjs';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/love99067333/personal-site-react
 */
const data = [
  {
    label: '星星數(按一下吧)',
    key: 'stargazers_count',
    link: 'https://github.com/love99067333/personal-site-react/stargazers',
  },
  {
    label: '注目數',
    key: 'subscribers_count',
    link: 'https://github.com/love99067333/personal-site-react/stargazers',
  },
  {
    label: 'Fork次數',
    key: 'forks',
    link: 'https://github.com/love99067333/personal-site-react/network',
  },
  // {
  //   label: 'Number of spoons',
  //   value: '0',
  // },
  // {
  //   label: 'Number of linter warnings',
  //   value: '0', // enforced via github workflow
  // },
  {
    label: '事件(issue)',
    key: 'open_issues_count',
    link: 'https://github.com/love99067333/personal-site-react/issues',
  },
  {
    label: '最後更新日',
    key: 'pushed_at',
    link: 'https://github.com/love99067333/personal-site-react/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
  // {
  //   // TODO update this with a pre-commit hook
  //   /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
  //   xargs -I file cat file | wc -l */
  //   label: 'Lines of Javascript powering this website',
  //   value: '2115',
  //   link: 'https://github.com/love99067333/personal-site-react/graphs/contributors',
  // },
];

export default data;
