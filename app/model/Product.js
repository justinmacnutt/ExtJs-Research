/**
 * Created by justinmacnutt on 16-06-07.
 */
Ext.define('App1.model.Product', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id',      type: 'int' },
        { name: 'productName',     type: 'string' }
        ]
});