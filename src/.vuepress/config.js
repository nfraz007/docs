module.exports = {
    title: "Nazish Fraz",
    description: "Docs repository",
    themeConfig: {
        nav: [
            { text: 'Portfolio', link: 'https://me.nfraz.co.in' },
        ],
        sidebar: 'auto'
    },
    plugins: [
        '@vuepress/last-updated', 
        '@vuepress/back-to-top', 
        '@vuepress/medium-zoom',
        'vuepress-plugin-smooth-scroll',
        'vuepress-plugin-nprogress'
    ]
}