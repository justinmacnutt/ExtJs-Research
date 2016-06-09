/**
 * Created by justinmacnutt on 16-04-28.
 */
Ext.define('App1.store.Community', {
    extend: 'Ext.data.Store',
    alias: 'store.community',
    model: 'App1.model.Community',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'http://windows.moloko.com/ProdCatServices.asmx/GetCommunities',
        //cors: true,
        useDefaultXhrHeader: false,
        reader: {
            type: 'json',
            rootProperty: '',
            idProperty: 'id'
        }
    }
    /*
    Uncomment to use a specific model class
    model: 'User',
    */

    /*
    Fields can also be declared without a model class:
    fields: [
        {name: 'firstName', type: 'string'},
        {name: 'lastName',  type: 'string'},
        {name: 'age',       type: 'int'},
        {name: 'eyeColor',  type: 'string'}
    ]
    */

    /*
    Uncomment to specify data inline
    data : [
        {firstName: 'Ed',    lastName: 'Spencer'},
        {firstName: 'Tommy', lastName: 'Maintz'},
        {firstName: 'Aaron', lastName: 'Conran'}
    ]
    */
});