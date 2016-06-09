/**
 * Created by justinmacnutt on 16-04-29.
 */
Ext.define('App1.view.main.CommunityList', {
    extend: 'Ext.grid.Panel',
    xtype: 'communitylist',

    requires: [
        'App1.store.Community'
    ],

    title: 'Community WHY 5',

    bodyPadding: 50,
    scrollable: 'y',

    store: {
        type: 'community'
    },

    columns: [
        {
            text: 'id',
            dataIndex: 'id',
            flex: 0,
            sortable: true
        },
        {
            text: 'communityName',
            dataIndex: 'communityName',
            flex: 1
        }
    ],

    listeners: {
        select: 'onItemSelected'
    }

});

