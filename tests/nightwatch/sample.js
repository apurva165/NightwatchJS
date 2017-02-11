
module.exports = {
    'Demo test Google' : function (client) {
        client
            .url('http://www.google.com')
            .waitForElementVisible('body', 1000)
            .assert.title('Google')
            .assert.visible('input[type=text]')
            .setValue('input[type=text]', 'rembrandt van rijn')
            .waitForElementVisible('button[name=btnG]', 1000)
            .click('button[name=btnG]')
            .pause(1000)
            .end();
    },

    'Page object example': function (client) {
        var google = client.page.sample_pom();

        google.navigate()
            .assert.title('Google')
            .assert.visible('@searchBar')
            .setValue('@searchBar', 'nightwatch')
            .click('@submit');

        client.end();
    }
};