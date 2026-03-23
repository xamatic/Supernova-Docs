import { defineConfig } from 'vitepress'
import guide from "./sidebar/guide.mts";

export default defineConfig({
  title: "ApexPathing Docs",
  description: 'ApexPathing Docs',
  base: '/i-wanna-help/',
  themeConfig: {
    nav: [
      { text: 'About', link: '/about' },
      { text: 'Guide', link: '/guide/installation'}
    ],

    search: {
      provider: 'local'
    }, 
    
    
    //sidebar stuff
     sidebar: {
        '/guide/': guide
     }
  }

})
