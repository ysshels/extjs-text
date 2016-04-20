Ext.define('Admin.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',
    root: {
        expanded: true,
        children: [
            {
                text:   '主页/这个叫text',
                view:   'dashboard.Dashboard',//view 里页面的东西，，，
                leaf:   true,//小三角是否隐藏就看不到了
                iconCls: 'right-icon new-icon x-fa fa-desktop', //有个右边的小图标
                routeId: 'dashboard'
            },
            {
                text:   'Emaileeeeeeee',
                view:   'email.Email', //小写的是email 包括他的属性，，，
                iconCls: 'right-icon hot-icon x-fa fa-send ',
                leaf:   true,
                routeId: 'email'

            },
            {
                text:   'Profileaaaaaaa',
                view:   'profile.UserProfile',
                leaf:   true,
                iconCls: 'x-fa fa-user',
                routeId:'profile'
            },
            {
                text:   'Search results',
                view:   'search.Results',
                leaf:   true,
                iconCls: 'x-fa fa-search',
                routeId:'search'
            },
            {
                text: 'FAQ',
                view: 'pages.FAQ',
                leaf: true,
                iconCls: 'x-fa fa-question',
                routeId:'faq'
            },
            {
                text: 'Pages啊',
                expanded: false,
                selectable: false,
                iconCls: 'x-fa fa-leanpub',
                routeId : 'pages-parent',
                id:       'pages-parent',
                children: [
                    {
                        text: 'Blank Page',
                        view: 'pages.BlankPage',
                        leaf: true,
                        iconCls: 'x-fa fa-file-o',
                        routeId:'pages.blank'
                    },

                    {
                        text: '404 Error',
                        view: 'pages.Error404Window',
                        leaf: true,
                        iconCls: 'x-fa fa-exclamation-triangle',
                        routeId:'pages.404'
                    },
                    {
                        text: '500 Error',
                        view: 'pages.Error500Window',
                        leaf: true,
                        iconCls: 'x-fa fa-times-circle',
                        routeId:'pages.500'
                    },
                    {
                        text: 'Lock Screen',
                        view: 'authentication.LockScreen',
                        leaf: true,
                        iconCls: 'x-fa fa-lock',
                        routeId:'authentication.lockscreen'
                    },

                    {
                        text: 'Login',
                        view: 'authentication.Login',
                        leaf: true,
                        iconCls: 'x-fa fa-check',
                        routeId:'authentication.login'
                    },
                    {
                        text: 'Register',
                        view: 'authentication.Register',
                        leaf: true,
                        iconCls: 'x-fa fa-pencil-square-o',
                        routeId:'authentication.register'
                    },
                    {
                        text: 'Password Reset',
                        view: 'authentication.PasswordReset',
                        leaf: true,
                        iconCls: 'x-fa fa-lightbulb-o',
                        routeId:'authentication.passwordreset'
                    }
                ]
            },
            {
                text:   'Widgets',
                view:   'widgets.Widgets',
                leaf:   true,
                iconCls: 'x-fa fa-flask',
                routeId:'widgets'
            },
            {
                text:   'Forms',
                view:   'forms.Wizards',
                leaf:   true,
                iconCls: 'x-fa fa-edit',
                routeId:'forms'
            },
            {
                text: 'Charts',
                view: 'charts.Charts',
                iconCls: 'x-fa fa-pie-chart',
                leaf:   true,
                routeId:'charts'
            }
        ]
    },
    fields: [
        {
            name: 'text'
        }
    ]
});
