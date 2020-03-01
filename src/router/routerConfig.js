import HomePage from '../pages/home';
import HundredCounty from '../pages/hundred';

const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    path: '/app',
    component: HundredCounty,
    name: '百县榜',
    exact: true
  },
  {
    path: '/channel',
    component: null,
    name: '郡县号'
  },
  {
    path: '/age2',
    component: null,
    name: '郡县通'
  },
  {
    path: '/age3',
    component: null,
    name: '县域联播',
    foreignSite: {
      path: 'http://xianyu.chinaxiaokang.com/map.html'
    }
  },
  {
    path: '/age4',
    component: null,
    name: '百县工程',
    foreignSite: {
      path: 'http://www.chinaxiaokang.com/xianyu/xiaokangbaixiangongcheng/'
    }
  },
  {
    path: '/age5',
    component: null,
    name: '中国小康指数',
    foreignSite: {
      path: 'http://www.chinaxiaokang.com/zhongguoxiaokangzhishu/'
    }
  },
  {
    path: '/age6',
    component: null,
    name: '中国小康网',
    foreignSite: {
      path: 'http://www.chinaxiaokang.com/'
    }
  },
];

export default routes;
