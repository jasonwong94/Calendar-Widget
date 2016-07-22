var moment = require('moment')
var today = moment().format('MMMM DD YYYY')

var monthTitleBinding = element(by.binding('main.selectDate.month'))
var yearTitleBinding = element(by.binding('main.selectDate.year'))
var previousMonthButton = element(by.id('previousMonthButton'))
var nextMonthButton = element(by.id('nextMonthButton'))
var todayButton = element(by.id('todayButton'))
var todayDateBox = element(by.id(today))

describe('Calendar Widget Demo App', function(){
    
    beforeEach(function(){
         browser.get('http://localhost:1800')
    })

    it('should load the widget succesfully', function(){
        expect(browser.getTitle()).toEqual("Calendar Widget | YNCN")
    })

    it('should display the current month and the current year in the correct format', function(){
        var month = moment().format('MMMM')
        var year = moment().format('YYYY')

        expect(monthTitleBinding.getText()).toEqual(month)
        expect(yearTitleBinding.getText()).toEqual(year)
    })

    it('should display the previous month, the current month and the next month when the buttons are clicked in the corresponding order', function(){

        var time = moment().subtract(1, 'month')
        var month = time.format('MMMM')
        var year = time.format('YYYY')

        //previous month
        previousMonthButton.click();
        expect(monthTitleBinding.getText()).toEqual(month)
        expect(yearTitleBinding.getText()).toEqual(year)

        time = time.add(1, 'month')
        month = time.format('MMMM')
        year = time.format('YYYY')
        todayButton.click()

        expect(monthTitleBinding.getText()).toEqual(month)
        expect(yearTitleBinding.getText()).toEqual(year)

        time = time.add(1, 'month')
        month = time.format('MMMM')
        year = time.format('YYYY')
        nextMonthButton.click()

        expect(monthTitleBinding.getText()).toEqual(month)
        expect(yearTitleBinding.getText()).toEqual(year)
    })

    it('should change the year accordingly if the user presses either the previous or next month button more than 12 times', function(){

        var time = moment().subtract(12, 'month')
        var year = time.format('YYYY')

        //previous year
        for(i=0; i<12; i++){
             previousMonthButton.click();
        }
        expect(yearTitleBinding.getText()).toEqual(year)

        //back to the present!
        time = time.add(12, 'month')
        year = time.format('YYYY')
        todayButton.click()
        expect(yearTitleBinding.getText()).toEqual(year)

        //...and to the future!
        time = time.add(12, 'month')
        year = time.format('YYYY')
        for(i=0; i<12; i++){
             nextMonthButton.click();
        }
        expect(yearTitleBinding.getText()).toEqual(year)
    })

    xit('should have a green background', function(){
        var hoveredElement = browser.actions().mouseMove(todayDateBox).perform();

        expect(element(by.class('calendar-date'))).toMatch('calendar-sasdfs')
    })
})

