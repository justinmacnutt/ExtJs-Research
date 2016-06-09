Ext.define('App1.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'name', 'email', 'phone'
    ],

    data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", age: "60" },
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", age: "50" },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333", age: "40" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444", age: "20" },
        { name: 'Justin',     email: "justinmacnutt@gmail.com",        phone: "902-406-0264", age: "44" },
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", age: "60" },
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", age: "50" },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333", age: "40" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444", age: "20" },
        { name: 'Justin',     email: "justinmacnutt@gmail.com",        phone: "902-406-0264", age: "44" },
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", age: "60" },
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", age: "50" },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333", age: "40" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444", age: "20" },
        { name: 'Justin',     email: "justinmacnutt@gmail.com",        phone: "902-406-0264", age: "44" },
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", age: "60" },
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", age: "50" },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333", age: "40" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444", age: "20" },
        { name: 'Justin',     email: "justinmacnutt@gmail.com",        phone: "902-406-0264", age: "44" },
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", age: "60" },
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", age: "50" },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333", age: "40" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444", age: "20" },
        { name: 'Justin',     email: "justinmacnutt@gmail.com",        phone: "902-406-0264", age: "44" },
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", age: "60" },
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", age: "50" },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333", age: "40" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444", age: "20" },
        { name: 'Justin',     email: "justinmacnutt@gmail.com",        phone: "902-406-0264", age: "44" }



    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
