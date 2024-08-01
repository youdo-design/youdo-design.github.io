import { defineConfig } from 'themekit-js'
import RemoteAssets from 'vite-plugin-remote-assets'
const siteBase="/" 
// https://vitepress.dev/reference/site-config
const ThemeConfigJp={
  nav: [
    { text: '履歴書', link: '/日本語/README' }  
  ]
};
 
const ThemeConfigCn={
  nav: [
    { text: '关于我', link: '/README' },
    { text: '园林景观', link: '/简体中文/园林景观/README' },
    { text: '海绵城市', link: '/简体中文/海绵城市/README' },
  ], 
  sidebar: { 
      '/README': [
      {
        text: '关于我',
        items: [ 
            { text: '园林景观', link: '/简体中文/园林景观/README' }, 
            { text: '海绵城市', link: '/简体中文/海绵城市/README' }
        ]
      } 
       ],
       '/简体中文/园林景观/': [
        {
          text: '园林景观',
          items: [ 
            { text: '故河新脉', link: '/简体中文/园林景观/故河新脉/README.md' }, 
            { text: '象山', link: '/简体中文/园林景观/象山.md' }
          ]
        } 
     ]
  } 
};
 
const ThemeConfigEn ={ 
  nav: [
    { text: 'ABOUT ME', link: '/English/README' }  
  ]
};
 

export default defineConfig({ 
  vite:{ 
    plugins:[ 
       RemoteAssets({ assetsDir:".themekit/dist/assets" })
    ]
  }, 
  title: "有度设计",  
  base:siteBase,
  themeName: "default theme + customization",
  description: "",
  lang:"root",
  locales: {  
    "English": {
      title:'YOUDO DESIGN',
      label: 'English',
      lang: 'English',  
      link: '/English/',
      themeConfig: ThemeConfigEn 
    }, 
    "日本語": {
      title:'YOUDO DESIGN',
      label: '日本語',
      lang: '日本語',  
      link: '/日本語/',
      themeConfig: ThemeConfigJp 
    }, 
    root: {
      label: '简体中文',
      lang: '简体中文',   
      themeConfig:  ThemeConfigCn
    }
  },   
  head: [['link', { rel: 'icon', href: '/Resources/youdo.svg' }]],
  themeConfig: {
    logo:  '/Resources/youdo.svg',  
    footer: {
      message: '<a href=\"'+siteBase+'English/"\>English</a>&nbsp;&nbsp;&nbsp;<a href=\"/"\>简体中文</a>&nbsp;&nbsp;&nbsp;<a href=\"'+siteBase+'日本語/"\>日本語</a>',
      copyright: 'Copyright © 2019-2024 Youdo Design'
    }
  }
})
