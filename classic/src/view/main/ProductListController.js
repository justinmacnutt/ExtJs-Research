/**
 * Created by justinmacnutt on 16-06-07.
 */
Ext.define('App1.view.main.ProductListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productList',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'That Product? Are you really sure?', 'onConfirm', this);
    },

    /**
     * Called when the view is created
     */
    init: function() {
        console.log("custom ProductList view controller")
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            console.log("user pressed yes");
        }
        else {
            console.log("user pressed no");
        }
    }
});