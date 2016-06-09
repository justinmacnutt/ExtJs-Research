/**
 * Created by justinmacnutt on 16-05-26.
 */
Ext.define('App1.view.main.JustinForm', {
    extend: 'Ext.form.Panel',
    xtype: 'justinform',
    layout: 'column',
    viewModel: {
        type: 'justinform'
    },

    controller: 'justinform',

    //url: 'http://windows.moloko.com/ProdCatServices.asmx/JustinEcho',
    //type: 'ajax',
    //cors: true,
    //useDefaultXhrHeader: false,
    defaults : {
        /*
         * Seek out the first enabled, focusable, empty textfield when the form is focused
         */
        defaultFocus: 'textfield:not([value]):focusable:not([disabled])',

        defaultButton : 'nextbutton'
    },

    items: [
        {
            xtype: 'form',
            defaultType: 'textfield',
            defaults: {
                labelWidth: 90,
                labelAlign: 'top',
                labelSeparator: '',
                submitEmptyText: false,
                anchor: '100%'
            },
            items:[
                {
                    xtype: 'combo',
                    fieldLabel: 'My Combo',
                    reference: 'myCombo',
                    name: 'myCombo',
                    displayField: 'communityName',
                    valueField: 'id',
                    mode: 'local',
                    queryMode: 'local',

                    forceSelection: true,
                    triggerAction: 'all',
                    typeAhead: false,
                    mode: 'local',

                    store: {
                        type: 'community'
                    },
                    listeners:{
                        'select': 'onMyComboSelect'
                    }
                },
                {
                    emptyText : 'Username must be unique.'
                },
                {
                    emptyText : 'ex: me@somewhere.com',
                    vtype: 'email'
                },
                {
                    emptyText : 'Enter a tricky password',
                    inputType: 'password',
                    cls: 'wizard-form-break'
                },
                {
                    emptyText : 'Passwords must match',
                    inputType: 'password'
                },
                {
                    xtype      : 'fieldcontainer',
                    cls: 'wizard-form-break',
                    fieldLabel : 'MemberType',
                    defaultType: 'radiofield',
                    defaults: {
                        flex: 1
                    },
                    layout: 'hbox',
                    items: [
                        {
                            boxLabel  : 'Free',
                            name      : 'MemberType',
                            inputValue: 'Free'
                        }, {
                            boxLabel  : 'Personal',
                            name      : 'MemberType',
                            inputValue: 'Personal'
                        }, {
                            boxLabel  : 'Black',
                            name      : 'MemberType',
                            inputValue: 'Business'
                        }
                    ]
                },
                {
                    xtype      : 'fieldcontainer',
                    cls: 'wizard-form-break',
                    fieldLabel : 'Justin1',
                    defaultType: 'radiofield',
                    defaults: {
                        flex: 1
                    },
                    layout: 'hbox',
                    items: [
                        {
                            boxLabel  : 'Alpha',
                            name      : 'Justin1',
                            inputValue: 'A'
                        }, {
                            boxLabel  : 'Beta',
                            name      : 'Justin1',
                            inputValue: 'B'
                        }, {
                            boxLabel  : 'Theta',
                            name      : 'Justin1',
                            inputValue: 'C'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    fieldLabel: 'Toppings',
                    defaultType: 'checkboxfield',
                    layout: 'hbox',
                    items: [
                        {
                            boxLabel  : 'Anchovies',
                            name      : 'topping',
                            inputValue: '1',
                            id        : 'checkbox1'
                        }, {
                            boxLabel  : 'Artichoke Hearts 3',
                            name      : 'topping',
                            inputValue: '2',
                            checked   : true,
                            id        : 'checkbox2'
                        }, {
                            boxLabel  : 'Bacon',
                            name      : 'topping',
                            inputValue: '3',
                            id        : 'checkbox3'
                        }
                    ]
                },
                {
                    xtype     : 'textareafield',
                    grow      : true,
                    name      : 'mydescription',
                    fieldLabel: 'My Description',
                    anchor    : '100%'
                },
                {
                    xtype: 'timefield',
                    name: 'in',
                    fieldLabel: 'Time In',
                    minValue: '6:00 AM',
                    maxValue: '8:00 PM',
                    increment: 30,
                    anchor: '100%'
                },
                {
                    xtype: 'timefield',
                    name: 'out',
                    fieldLabel: 'Time Out',
                    minValue: '6:00 AM',
                    maxValue: '8:00 PM',
                    increment: 30,
                    anchor: '100%'
                }
            ]
        }
    ],

    // Reset and Submit buttons
    buttons: [
        {
            text: 'Reset',
            handler: function() {
                console.log('reset button clicked again');
            }
        },
        {
            text: 'Submit',
            formBind: true, //only enabled once the form is valid
            disabled: true,
      //      cors: true,
      //      useDefaultXhrHeader: false,
            handler: function() {
                // The getForm() method returns the Ext.form.Basic instance:
                console.log('FUCK THIS 2');
                var form = this.up('form').getForm();
                if (form.isValid()) {
                    // Submit the Ajax request and handle the response
                    var myData = Ext.util.JSON.encode(form.getValues());
                    //var myParamData = {s: myData};
                    //var myParamData = JSON.stringify({'s': form.getValues()});
                    console.log(myData);
                    console.log('and now stringify...');
                    console.log(JSON.stringify(myData));

                    var myParamData = JSON.stringify({'s': JSON.stringify(myData)});
                    var myParamData2 = "{'s':" + JSON.stringify(myData) + "}";

                    console.log(myData);
                    console.log("and in parameters....");
                    console.log(myParamData);

                   // debugger;
                    Ext.Ajax.request({
                        url: 'http://windows.moloko.com/ProdCatServices.asmx/ExtractMyDescription',
                        //url: '/why/app1/webservices/JustinTest.php',
                        //url: 'http://localhost:1841',
                        //url: 'http://windows.moloko.com/ProdCatServices.asmx/GetCommunities',
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        useDefaultXhrHeader: false,
                        params : myParamData2,
                        success: function(conn, response, options, eOpts) {
                            console.log(conn.responseText);
                        },
                        failure: function(conn, response, options, eOpts) {
                        //    // TODO get the 'msg' from the json and display it
                            console.log(conn.responseText);
                        }
                    });

                    /*
                    form.submit({
                        cors: true,
                        useDefaultXhrHeader: false,
                        type: 'ajax',
                        params: Ext.util.JSON.encode(form.getValues()),
                        success: function(form, action) {
                            Ext.Msg.alert('Success', action.result.message);
                        },
                        failure: function(form, action) {
                            Ext.Msg.alert('Failed', action.result ? action.result.message : 'No response');
                        }
                    });
                    */
                }
            }
        }
    ]
});