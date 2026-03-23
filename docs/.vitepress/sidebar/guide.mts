import {DefaultTheme} from "vitepress";

type SidebarItem = DefaultTheme.SidebarItem;

export default [
    {text: "Installation", link: "/guide/installation"},
    {
        text: "Tuning",
        collapsed: false,
        items: [
            {
                text: 'Velocity Tuner',
                link: '/guide/velocity'
            }
        ]
        
    }
] satisfies SidebarItem[]
