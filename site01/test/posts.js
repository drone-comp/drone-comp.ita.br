describe('Test posts', function() {

    const {Builder, By, Key} = require('selenium-webdriver')
    const safari = require('selenium-webdriver/safari')

    before(() => {
        console.log('BEFORE SUITE')
    })

    after(() => {
        console.log('AFTER SUITE')
    })

    beforeEach(() => {
        console.log('BEFORE UNIT')
    })

    afterEach(() => {
        console.log('AFTER UNIT')
    })

    it('Get post', (done) => {

        // (async function () {
        //     let driver

        //     try {
        //         driver = await new Builder()
        //             .forBrowser('safari')
        //             .build()
                
        //         await driver.get('http://localhost:3001')
        //     }
        //     catch(e) {
        //         console.log(e)
        //     }
        //     finally {
        //         if (driver) {
        //             await driver.quit()
        //         }
        //     }
        // })()

        done()
    })

})