/**
 * Created by justinmacnutt on 16-04-27.
 */
Ext.define('App1.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.users',
    model: 'App1.model.User',
    data: [
        {firstName: 'Seth', age: '34'},
        {firstName: 'Scott', age: '72'},
        {firstName: 'Gary', age: '19'},
        {firstName: 'Capybara', age: '208'}
    ]

});