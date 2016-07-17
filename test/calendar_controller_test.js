describe('calender controller', function(){

	var calendarServiceMock, calendarControllerMock
	//mock calendar service
	beforeEach( module('calendarWidget') );

	module(function($provide){
		$provide.service('calendarService', function(){
			this.generateCalendarObject = function(){

			}
		})
	})

	beforeEach( inject(function($rootScope, $controller, _calendarService_){
		scope = $rootScope.$new();
		calendarControllerMock = $controller('calendarController', {
			$scope:scope,
			calendarService: _calendarService_
		})
	}) )

	it('should set the previous month exactly one month from now', function(){

	})

	it('should set the next month exactly one month from now', function(){

	})

	it('should reset the date to today\'s date if the user changes', function(){
	})

	it('should store the passed in date into the correct objects and format', function(){
		var today = moment()
		calendarControllerMock.UpdateSelectDate(today)

		expect( calendarControllerMock.selectDate['year'] ).toEqual( today.format('YYYY') )
		expect( calendarControllerMock.selectDate['month'] ).toEqual( today.format('MMMM') )
		expect( calendarControllerMock.selectDate['date'] ).toEqual( today.format('DD') )
	})
})