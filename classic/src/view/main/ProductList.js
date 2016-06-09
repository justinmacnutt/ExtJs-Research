/**
 * Created by justinmacnutt on 16-06-07.
 */
Ext.define('App1.view.main.ProductList', {
    extend: 'Ext.grid.Panel',
    xtype: 'productList',

    requires: [
        'App1.store.Product'
    ],

    title: 'Product List',

    bodyPadding: 50,
    scrollable: 'y',
    controller: 'productList',

    store: {
        type: 'product'
    },

    columns: [
        {
            text: 'id',
            dataIndex: 'id',
            flex: 0,
            sortable: true
        },
        {
            text: 'productName',
            dataIndex: 'productName',
            flex: 1
        }
    ],

    listeners: {
        select: 'onItemSelected'
    }

});