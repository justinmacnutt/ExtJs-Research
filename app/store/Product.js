/**
 * Created by justinmacnutt on 16-06-07.
 */
Ext.define('App1.store.Product', {
    extend: 'Ext.data.Store',
    alias: 'store.product',
    model: 'App1.model.Product',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'http://windows.moloko.com/ProdCatServices.asmx/GetProducts',
        //cors: true,
        useDefaultXhrHeader: false,
        reader: {
            type: 'json',
            rootProperty: '',
            idProperty: 'id'
        }
    }
});