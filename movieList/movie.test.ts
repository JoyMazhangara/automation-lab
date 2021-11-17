// Lines 2 through 6 are our boilerplate lines of code, we need them for our tests to work
import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// First we're going to navigate to our movie page
beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

// And after our test has completed, we want to close our browser
afterAll(async () => {
    await driver.quit()
})

// This test will add a movie to the page
test('I can add movie', async () => {
    let addMovieBar = await (await driver).findElement(By.xpath("//form/input"))
    await addMovieBar.sendKeys('The Lion King\n')
    await driver.sleep(2000) 

})

   