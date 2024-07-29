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
    { text: '景观设计', link: '/简体中文/景观设计/README' },
    { text: '绿色建造', link: '/简体中文/绿色建造/README' },
  ], 
  sidebar: { 
      '/README': [
      {
        text: '',
        items: [ 
          { text: '', link: '/' }
        ]
      } 
       ],
       '/简体中文/景观设计/': [
        {
          text: '景观设计',
          items: [ 
            { text: '故河新脉', link: '/简体中文/景观设计/故河新脉/README.md' }, 
            { text: '象山', link: '/简体中文/景观设计/象山.md' }
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
      title:'YOUDU DESIGN',
      label: 'English',
      lang: 'English',  
      link: '/English/',
      themeConfig: ThemeConfigEn 
    }, 
    "日本語": {
      title:'YOUDU DESIGN',
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
  themeConfig: {
    logo:  '/seedunk.png', 
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],  
    footer: {
      message: '<a href=\"'+siteBase+'English/"\>English</a>&nbsp;&nbsp;&nbsp;<a href=\"/"\>简体中文</a>&nbsp;&nbsp;&nbsp;<a href=\"'+siteBase+'日本語/"\>日本語</a>',
      copyright: 'Copyright © 2019-2024 Seedunk'
    }
  }
})
