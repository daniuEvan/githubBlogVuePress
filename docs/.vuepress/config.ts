/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/daniuEvan/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import {resolve} from 'path'
import {defineConfig4CustomTheme, UserPlugins} from 'vuepress/config'
import {VdoingThemeConfig} from 'vuepress-theme-vdoing/types'
import { readFileList, readTotalFileWords, readEachFileWords } from './webSiteInfo/readFile';
// @ts-ignore
import dayjs from 'dayjs'
import baiduCode from './config/baiduCode' // 百度统计hm码
import htmlModules from './config/htmlModules' // 自定义插入的html块

export default defineConfig4CustomTheme<VdoingThemeConfig>({
    theme: 'vdoing', // 使用npm主题包
    // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题包

    locales: {
        '/': {
            lang: 'zh-CN',
            title: "刘沙河",
            description: '',
        }
    },
    // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

    // 主题配置
    themeConfig: {
        // 导航配置
        nav: [
            {text: '首页', link: '/'},
            {
                text: 'Go语言',
                link: '/go/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
                items: [
                    // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
                    {
                        text: 'Go语言基础',
                        items: [
                            {text: '数据类型', link: '/pages/dfa8c5/'},
                            {text: '反射', link: '/pages/5f1127/'},
                            {text: 'Go指针', link: '/pages/c49433/'},
                        ],
                    },
                    {
                        text: 'Go语言进阶',
                        items: [
                            {text: 'Go协程调度原理及GPM模型', link: '/pages/6bedb1/'},
                            {text: 'Go内存管理', link: '/pages/0a62de/'},
                            {text: 'Go垃圾回收机制', link: '/pages/241eea/'},
                            {text: 'Go语言内存对齐', link: '/pages/034686/'},
                        ],
                    },
                    {
                        text: 'Go语言实现原理',
                        items: [
                            {text: 'channel 实现原理', link: '/pages/1068be/'},
                            {text: 'slice 实现原理', link: '/pages/99be2b/'},
                            {text: 'map 实现原理', link: '/pages/d185ed/'},
                            {text: 'sync.Mutex 实现原理', link: '/pages/9ab782/'},
                            {text: '乐观锁CAS 实现原理', link: '/pages/f2d80d/'},
                            {text: 'singlefight 实现原理', link: '/pages/4f0a6e/'},
                        ],
                    },
                    {
                        text: 'gin框架',
                        items: [
                            {text: 'gin中间件原理', link: '/pages/39fbb0/'},
                            {text: 'gin路由原理', link: '/pages/7e7998/'},
                        ],
                    },
                    {
                        text: 'gorm',
                        items: [
                            {text: 'GORM介绍和使用', link: '/pages/b1bd04/'},
                            {text: 'GORM_CURD操作指南', link: '/pages/0f644f/'},
                        ],
                    },
                    {
                        text: 'go测试',
                        items: [
                            {text: 'benchmark基准测试', link: '/pages/147dd1/'},
                            {text: 'pprof 性能分析', link: '/pages/d45236/'},
                        ],
                    },
                ],
            },
            {
                text: 'Python',
                link: '/python/',
                items: [
                    {
                        text: 'python基础',
                        items: [
                            {text: '数据类型小结', link: '/pages/0b5cee/'},
                            {text: '迭代器生成器', link: '/pages/feb633/'},
                            {text: '面向对象', link: '/pages/4199f7/'},
                        ],
                    },
                    {
                        text: 'python进阶',
                        items: [
                            {text: 'Numpy&Pandas', link: '/pages/3b62b2/'},
                            {text: 'celery分布式任务队列', link: '/pages/cffbfd/'},
                        ],
                    },

                    {
                        text: 'python并发编程',
                        items: [
                            {text: '进程', link: '/pages/50bbd2/'},
                            {text: '线程', link: '/pages/a970da/'},
                            {text: '协程', link: '/pages/09c83a/'},
                        ],
                    },
                    {
                        text: 'Django',
                        items: [
                            {text: 'Django 常见命令', link: '/pages/3c6d02/'},
                            {text: 'middleware中间件', link: '/pages/ac3065/'},
                            {text: 'Django缓存系统', link: '/pages/f4f9ce/'},
                            {text: 'Django信号系统', link: '/pages/96c912/'},
                            {text: 'Django REST Framework', link: '/pages/a0cd2a/'},
                        ],
                    },
                    {
                        text: 'Flask',
                        items: [
                            {text: 'Flask基础知识总结', link: '/pages/cbe9ba/'},
                            {text: 'Flask-SQLAlchemy', link: '/pages/184ee5/'},
                        ],
                    },

                    {
                        text: '爬虫',
                        items: [
                            {text: 'aiohttp', link: '/pages/5ef8dd/'},
                            {text: 'scrapy框架', link: '/pages/e669a5/'},
                        ],
                    },
                ],
            },
            {
                text: '数据库',
                link: '/database/',
                items: [
                    {
                        text: 'Mysql',
                        items: [
                            {text: 'Mysql存储引擎和索引', link: '/pages/508485/'},
                            {text: 'MySQL主从复制', link: '/pages/a65b61/'},
                            {text: 'Mysql读写分离', link: '/pages/10af64/'},
                            {text: '数据库分库分表', link: '/pages/64593f/'},
                            {text: 'Mysql锁', link: '/pages/bfd481/'},
                            {text: 'Mysql事务和MVCC原理', link: '/pages/00c19f/'},
                            {text: '分库分表带来的读扩散问题', link: '/pages/af218c/'},
                        ],
                    },
                    {
                        text: 'Redis',
                        items: [
                            {text: 'redis基础和数据类型', link: '/pages/5665df/'},
                            {text: 'redis主从架构', link: '/pages/d17810/'},
                            {text: 'redis哨兵架构', link: '/pages/c1b6e9/'},
                            {text: 'redis集群模式', link: '/pages/b05ef8/'},
                            {text: '如何保证缓存和数据库双写一致', link: '/pages/74ad69/'},
                            {text: 'redis 底层数据结构', link: '/pages/b931f8/'},
                            {text: 'redis分布式锁', link: '/pages/154654/'},
                        ],
                    },
                    {
                        text: 'Elasticsearch',
                        items: [
                            {text: 'es基本概念', link: '/pages/0fbad4/'},
                            {text: 'es基础语法', link: '/pages/e67888/'},
                            {text: 'es倒排索引', link: '/pages/3cb85c/'},
                        ],
                    },
                    {
                        text: 'etcd',
                        items: [
                            {text: 'Go操作etcd', link: '/pages/a376b5/'},
                            {text: 'Raft原理', link: '/pages/2f5a88/'},
                            {text: 'etcd分布式锁', link: '/pages/59288f/'},
                        ],
                    },
                ],
            },
            {
                text: 'MQ',
                link: '/mq/',
                items: [
                    {
                        text: 'kafka',
                        items: [
                            {text: '消息队列MQ总结', link: '/pages/5a722c/'},
                            {text: 'kafka 概述及原理', link: '/pages/dbfcdf/'},
                            {text: 'kafka 消费问题记录', link: '/pages/6868ce/'},
                            {text: '零拷贝技术', link: '/pages/a531a8/'},
                            {text: 'kafka分区规范', link: '/pages/362fa0/'},
                        ],
                    },
                    {
                        text: 'RabbitMQ',
                        items: [
                            {text: 'rabbitMQ基础', link: '/pages/d10ce0/'},
                            {text: 'Go操作rabbitmq', link: '/pages/6510fb/'},
                        ],
                    },
                    {
                        text: 'RocketMQ',
                        items: [
                            {text: '可靠消息队列 rocketMQ', link: '/pages/ea2fe2/'},
                        ],
                    }
                ],
            },
            {
                text: '网络通信',
                link: '/network/',
                items: [
                    {
                        text: 'Http&Https',
                        items: [
                            {text: 'http&https', link: '/pages/a55b80/'},
                            {text: 'TCP和UDP', link: '/pages/c87956/'},
                            {text: 'Ping 原理', link: '/pages/336ace/'},
                        ],
                    },
                    {
                        text: 'RPC',
                        items: [
                            {text: 'RPC初识', link: '/pages/d78ab1/'},
                            {text: 'grpc初识和实现', link: '/pages/39b3f2/'},
                            {text: 'grpc进阶', link: '/pages/0a8c6e/'},
                            {text: 'protobuf进阶', link: '/pages/8deba5/'},
                        ],
                    },
                ],
            },
            {
                text: 'Docker+k8s',
                link: '/container/',
                items: [
                    {
                        text: 'Docker',
                        items: [
                            {text: 'Docker基础', link: '/pages/beebaf/'},
                            {text: 'Docker常用命令', link: '/pages/878e1e/'},
                            {text: 'Dockerfile', link: '/pages/4a7961/'},
                            {text: 'Docker-Compose', link: '/pages/f2fd44/'},
                            {text: 'Docker多阶段构建', link: '/pages/4790f4/'},
                            {text: 'Docker实现原理', link: '/pages/d3dd3e/'},
                        ],
                    },
                    {
                        text: 'k8s',
                        items: [
                            {text: 'k8s 基础概念', link: '/pages/a01570/'},
                            {text: 'k8s 负载', link: '/pages/cf3d18/'},
                            {text: 'k8s 集群架构', link: '/pages/ac1ceb/'},
                            {text: 'Pod 网络', link: '/pages/fffa5b/'},
                            {text: 'Service 网络', link: '/pages/f55da9/'},
                            {text: '外部接入网络', link: '/pages/7f5625/'},
                            {text: 'Helm', link: '/pages/b63ddc/'},
                            {text: 'mac快速启动k8s', link: '/pages/a244f0/'},
                        ],
                    },
                ],
            },
            // {
            //   text: '更多',
            //   link: '/more/',
            //   items: [
            //   ],
            // },
            {text: '关于', link: '/about/'},
            // {
            //   text: '收藏',
            //   link: '/pages/beb6c0bd8a66cea6/',
            //   // items: [
            //   //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
            //   //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
            //   //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
            //   // ],
            // },
            // {
            //   text: '索引',
            //   link: '/archives/',
            //   items: [
            //     { text: '分类', link: '/categories/' },
            //     { text: '标签', link: '/tags/' },
            //     { text: '归档', link: '/archives/' },
            //   ],
            // },
        ],
        sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
        logo: '/img/logo.png', // 导航栏logo
        repo: 'daniuEvan', // 导航栏右侧生成Github链接
        searchMaxSuggestions: 10, // 搜索结果显示最大数
        lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
        docsDir: 'docs', // 编辑的文件夹
        // docsBranch: 'master', // 编辑的文件所在分支，默认master。 注意：如果你的分支是main则修改为main
        editLinks: false, // 启用编辑
        editLinkText: '',

        //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

        // category: false, // 是否打开分类功能，默认true
        // tag: false, // 是否打开标签功能，默认true
        // archive: false, // 是否打开归档功能，默认true
        // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

        // pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

        // bodyBgImg: [
        //   'https://fastly.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
        //   'https://fastly.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
        //   'https://fastly.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
        // ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时隔bodyBgImgInterval切换一张。
        // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0.1~1.0, 默认0.5
        // bodyBgImgInterval: 15, // body多张背景图时的切换间隔, 默认15，单位s
        // titleBadge: false, // 文章标题前的图标是否显示，默认true
        // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
        //   '图标地址1',
        //   '图标地址2'
        // ],
        contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

        // updateBar: { // 最近更新栏
        //   showToArticle: false, // 显示到文章页底部，默认true
        //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
        // },
        // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
        // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
        // pageButton: false, // 是否显示快捷翻页按钮，默认true

        // 默认外观模式（用户未在页面手动修改过模式时才生效，否则以用户设置的模式为准），可选：'auto' | 'light' | 'dark' | 'read'，默认'auto'。
        // defaultMode: 'auto',

        // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
        sidebar: 'structuring',


        // 站点配置（首页 & 文章页）
        blogInfo: {
          blogCreate: '2022-01-01', // 博客创建时间
          indexView: true,  // 开启首页的访问量和排名统计，默认 true（开启）
          pageView: true,  // 开启文章页的浏览量统计，默认 true（开启）
          readingTime: true,  // 开启文章页的预计阅读时间，条件：开启 eachFileWords，默认 true（开启）。可在 eachFileWords 的 readEachFileWords 的第二个和第三个参数自定义，默认 1 分钟 300 中文、160 英文
          eachFileWords: readEachFileWords([''], 300, 160),  // 开启每个文章页的字数。readEachFileWords(['xx']) 关闭 xx 目录（可多个，可不传参数）下的文章页字数和阅读时长，后面两个参数分别是 1 分钟里能阅读的中文字数和英文字数。无默认值。readEachFileWords() 方法默认排除了 article 为 false 的文章
          mdFileCountType: 'archives',  // 开启文档数。1. archives 获取归档的文档数（默认）。2. 数组 readFileList(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文档数。提示：readFileList() 获取 docs 下所有的 md 文档（除了 `.vuepress` 和 `@pages` 目录下的文档）
          totalWords: 'archives',  // 开启本站文档总字数。1. archives 获取归档的文档数（使用 archives 条件：传入 eachFileWords，否则报错）。2. readTotalFileWords(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文章字数。无默认值
          moutedEvent: '.tags-wrapper',   // 首页的站点模块挂载在某个元素后面（支持多种选择器），指的是挂载在哪个兄弟元素的后面，默认是热门标签 '.tags-wrapper' 下面，提示：'.categories-wrapper' 会挂载在文章分类下面。'.blogger-wrapper' 会挂载在博客头像模块下面
          // 下面两个选项：第一次获取访问量失败后的迭代时间
          indexIteration: 2500,   // 如果首页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
          pageIteration: 2500,    // 如果文章页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
          // 说明：成功获取一次访问量，访问量 + 1，所以第一次获取失败后，设置的每个隔段重新获取时间，将会影响访问量的次数。如 100 可能每次获取访问量 + 3
        },



        // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
        author: {
            name: 'bigox', // 必需
            link: 'https://bigox.top', // 可选的
        },

        // 博主信息 (显示在首页侧边栏)
        blogger: {
            avatar: '/img/dengxia.gif',
            name: '刘沙河',
            slogan: '好想成为技术大佬',
        },

        // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
        social: {
            iconfontCssFile: 'https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
            icons: [
                {
                    iconClass: 'icon-youjian',
                    title: '发邮件',
                    link: 'mailto:big_ox@163.com',
                },
                {
                    iconClass: 'icon-github',
                    title: 'GitHub',
                    link: 'https://github.com/daniuEvan',
                },
                {
                    iconClass: 'icon-erji',
                    title: '听音乐',
                    link: 'https://music.163.com/#/playlist?id=755597173',
                },
            ],
        },

        // 页脚信息
        footer: {
            createYear: 2022, // 博客创建年份
            copyrightInfo:
                'bigox | <a href="https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/LICENSE" target="_blank">MIT License</a>', // 博客版权信息，支持a标签或换行标签</br>
        },

        // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
        extendFrontmatter: {
            author: {
                name: 'bigox',
                link: 'https://bigox.top'
            }
        },

        // 自定义hmtl(广告)模块
        htmlModules
    },

    // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    head: [
        // 不算子开始
        ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],

        ['link', { rel: 'stylesheet', href: '/iconfont/font_3077305_pt8umhrn4k9.css' }], // 阿里图标


        ['link', {rel: 'icon', href: '/img/favicon.ico'}], //favicons，资源放在public文件夹
        [
            'meta',
            {
                name: 'keywords',
                content: 'go语言博客,个人技术博客,后端,后端开发,go框架,后端面试题,技术文档,学习,面试,Go,go,Golang,golang,python,Python,git,github,markdown',
            },
        ],
        ['meta', {name: 'baidu-site-verification', content: '7F55weZDDc'}], // 百度统计的站长验证（你可以去掉）
        ['meta', {name: 'theme-color', content: '#11a8cd'}], // 移动浏览器主题颜色
        // [
        //   'script',
        //   {
        //     'data-ad-client': 'ca-pub-7828333725993554',
        //     async: 'async',
        //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        //   },
        // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
    ],


    // 插件配置
    plugins: <UserPlugins>[

        'vuepress-plugin-baidu-autopush', // 百度自动推送

        [
            'vuepress-plugin-baidu-tongji', // 百度统计
            {
                hm: baiduCode,
            },
        ],
        [
            {
                name: 'custom-plugins',
                globalUIComponents: ["PageInfo"] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
            }
        ],

        // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search）
        // 'fulltext-search',

        // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
        [
            'thirdparty-search',
            {
                thirdparty: [
                    {
                        title: '在Bing中搜索',
                        frontUrl: 'https://cn.bing.com/search?q=',
                    },
                    {
                        title: '通过google搜索',
                        frontUrl: 'https://www.google.com.hk/search?q=',
                    },
                ],
            }
        ],

        [
            'one-click-copy', // 代码块复制按钮
            {
                copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
                copyMessage: '你偷偷复制了代码', // default is 'Copy successfully and then paste it for use.'
                duration: 1000, // prompt message display time.
                showInMobile: false, // whether to display on the mobile side, default: false.
            },
        ],

        [
            'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
            {
                settings: {
                    // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
                    // cssLib: ['http://xxx'], // 在线示例中的css依赖
                    // vue: 'https://fastly.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
                    jsfiddle: false, // 是否显示 jsfiddle 链接
                    codepen: true, // 是否显示 codepen 链接
                    horizontal: false, // 是否展示为横向样式
                },
            },
        ],
        [
            'vuepress-plugin-zooming', // 放大图片
            {
                selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
                options: {
                    bgColor: 'rgba(0,0,0,0.6)',
                },
            },
        ],
        [
            'vuepress-plugin-comment', // 评论
            {
                choosen: 'gitalk',
                options: {
                    clientID: '2d2b106b6bba4650eeb6',
                    clientSecret: '6df1770262dd87cefc879bdccc46001139ebc4ca',
                    repo: 'blog-gitalk-comment', // GitHub 仓库
                    owner: 'daniuEvan', // GitHub仓库所有者
                    admin: ['daniuEvan'], // 对仓库有写权限的人
                    // distractionFreeMode: true,
                    pagerDirection: 'last', // 'first'正序 | 'last'倒序
                    id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
                    title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
                    labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
                    body:
                        '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
                },
            },
        ],
        [
            '@vuepress/last-updated', // "上次更新"时间格式
            {
                transformer: (timestamp, lang) => {
                    return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
                },
            },
        ],
    ],

    markdown: {
        lineNumbers: true,
        extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
    },

    // 监听文件变化并重新构建
    extraWatchFiles: [
        '.vuepress/config.ts',
        '.vuepress/config/htmlModules.ts',
    ]
})
