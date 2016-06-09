/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('App1.Application', {
    extend: 'Ext.app.Application',
    
    name: 'App1',

    stores: [
        // TODO: add global / shared stores here
        'Users'
    ],

    views: [
        'App1.view.login.Login',
        'App1.view.main.Main'
    ],
    
    launch: function () {
        // TODO - Launch the application
        var loggedIn;

        loggedIn = localStorage.getItem('TutorialLoggedIn');

        Ext.create({
            xtype: loggedIn ? 'app-main' : 'login'
        })
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
