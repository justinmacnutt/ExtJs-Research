/**
 * This view is an example list of people.
 */
Ext.define('App1.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    scrollable: true,

    requires: [
        'App1.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name', flex: 0 },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        { text: 'Age', dataIndex: 'age', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
