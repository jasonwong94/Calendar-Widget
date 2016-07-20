var moment = require('moment')
var monthTitleBinding = element(by.binding('main.selectDate.month'))
var yearTitleBinding = element(by.binding('main.selectDate.year'))

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
})

