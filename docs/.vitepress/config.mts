export default {
  title: "ApexPathing Docs",
  description: 'ApexPathing Docs',
  base: '/Supernova-Docs/',
  // This section injects the CSS directly into the page head
  head: [
    ['style', {}, `
      .VPHero .name {
        background: linear-gradient(
          120deg, 
          #ff4500 0%, 
          #7b2ff7 50%, 
          #ff4500 100%
        );
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: shine 4s linear infinite;
      }
      @keyframes shine {
        to {
          background-position: 200% center;
        }
      }
    `]
  ],
  themeConfig: {
    nav: [{ text: 'Home', link: '/test' }]
  }
}
