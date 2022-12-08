import Navigator from '../../utils/navigator';
Component({
    properties: {
        tabIndex: { // 属性名
            type: Number,
            value: 1
        },
    },
    data: {
        bg: [
            'http://m.jqtianxia.cn/rubbish/tabBar/IndexSelect.png',
            'http://m.jqtianxia.cn/rubbish/tabBar/MallSelect.png',
            'http://m.jqtianxia.cn/rubbish/tabBar/CartSelect.png',
            'http://m.jqtianxia.cn/rubbish/tabBar/MySelect.png',
        ],
        icon: [
            {
                name: "Index",
                path: "/pages/rubbish/rubbish",
                icon: "http://m.jqtianxia.cn/rubbish/tabBar/Index.png",
                text: "环保",
                isAuth:false
            },
            {
                name: "Mall",
                path: "/pages/mall/mall",
                icon: "http://m.jqtianxia.cn/rubbish/tabBar/Mall.png",
                text: "福利",
                isAuth:false
            },
            {
                name: "Cart",
                path: "/pages/cart/cart",
                icon: "http://m.jqtianxia.cn/rubbish/tabBar/Cart.png",
                text: "购物车",
                isAuth:true
            },
            {
                name: "My",
                path: "/pages/my/my",
                icon: "http://m.jqtianxia.cn/rubbish/tabBar/My.png",
                text: "我的",
                isAuth:true
            }
        ]
    },
    methods: {
        switchTabHandle: function (e) {
            const dataset = e.currentTarget.dataset;
            const {path,index} = dataset;
            // 在跳转之前可以做一些事情
            console.log('跳转前做事情',index);
            // 跳转
            Navigator.Tab(path);
            // 修改下tabIndex，实际情况是不需要这段代码的，tabIndex 需要在page中传入
            this.setData({
                tabIndex:index
            })
        
        }
    }
})
