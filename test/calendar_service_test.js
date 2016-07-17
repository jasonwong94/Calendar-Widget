describe('calendar service', function(){

	var calendarServiceMock;

	beforeEach(module('calendarWidget'));

	beforeEach(inject(function( calendarService){
		calendarServiceMock = calendarService ;
	}))

	it('should generate an object containing the days of a week', function(){

	})

	it('shold generate an object containing the weeks of a month', function(){

	})

	it('should return true if 2 dates share the same month and year', function(){

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