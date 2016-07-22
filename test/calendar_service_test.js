describe('calendar service', function(){

	var calendarServiceMock;

	beforeEach(module('calendarWidget'));

	beforeEach(inject(function( calendarService){
		calendarServiceMock = calendarService ;
	}))

	it('should generate an object containing the days of a week', function(){
		var result;

		var year = 2016;
		var month = 4;
		var day = 23;

		result = calendarServiceMock.generateWeek( year, month, day)

	})

	it('should generate an object containing the weeks of a month', function(){
	})

	it('should return true if 2 dates share the same month and year, otherwise false', function(){
		var result;

		var month = 6;
		var year = 2015;
		var monthSelected = moment([year, month, 1]);
		var randomDate = moment([year, month, 22]);

		//same month but different days
		result = calendarServiceMock.dateIsSameMonthAndYear(randomDate, monthSelected) 
		expect( result ).toBe(true)

		//exactly one year ago
		var oneYearAgo = moment(randomDate).subtract(1, 'year')
		result = calendarServiceMock.dateIsSameMonthAndYear(oneYearAgo, monthSelected) 
		expect( result ).toBe(false)

		//one month ago
		var oneMonthAgo = moment(randomDate).subtract(1, 'month')
		result = calendarServiceMock.dateIsSameMonthAndYear(oneYearAgo, monthSelected) 
		expect( result ).toBe(false)

		//a year and a month ago
		var oneMonthOneYearAgo = moment(oneYearAgo).subtract(1, 'year')
		result = calendarServiceMock.dateIsSameMonthAndYear(oneYearAgo, monthSelected) 
		expect( result ).toBe(false)
	})

	it('should return true if the date is today', function(){
		var result, date;
		date = moment()

		//today
		var today = date.format(calendarServiceMock.DATE_KEY_FORMAT)
		result = calendarServiceMock.dateIsToday( today );
		expect( result ).toBe(true)

		//yesterday
		var yesterday = date.subtract(1, "days").format(calendarServiceMock.DATE_KEY_FORMAT)
		result = calendarServiceMock.dateIsToday( yesterday );
		expect( result ).toBe(false)
	})
})
