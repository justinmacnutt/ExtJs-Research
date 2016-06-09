/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('App1.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'App1.view.main.MainController',
        'App1.view.main.MainModel',
        'App1.view.main.List',
        'App1.view.main.CommunityList',
        'App1.view.main.ProductList'
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',
    layout: 'fit',
    scrollable: true,
    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }],
        scrollable: true
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        items: [{
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            xtype: 'communitylist'
        }],
        bodyCls: 'content-panel-body',
        scrollable: true
    }, {
        title: 'Groups',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    },  {
        title: 'Forms',
        iconCls: 'fa-leaf',
        xtype: 'justinform'
    }, {
        title: 'Community List 2',
        iconCls: 'fa-meh-o',
        scrollable: true,
        items: [{
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            xtype: 'communitylist'
        }]
    }, {
            title: 'Product List',
            iconCls: 'fa-meh-o',
            scrollable: true,
            items: [{
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                xtype: 'productList'
            }]
        }]
});
