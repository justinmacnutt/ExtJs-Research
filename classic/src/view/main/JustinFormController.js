/**
 * Created by justinmacnutt on 16-05-26.
 */
Ext.define('App1.view.main.JustinFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.justinform',

    /**
     * Called when the view is created
     */
    init: function() {
        console.log('justin form view controller init');
    },
    onNextClick: function(button) {
        //This is where you can handle any logic prior to moving to the next card
        console.log('next button clicked')
    },
    onPreviousClick: function(button) {
        console.log('previous button clicked')
    },
    onMyComboSelect: function(combo) {
        console.log('something was selected');
        console.log(combo.value);
        console.log(combo);

    }


});