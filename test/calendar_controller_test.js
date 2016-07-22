describe('calender controller', function(){

	var calendarServiceMock, calendarControllerMock
	//mock calendar service
	beforeEach( module('calendarWidget') );

	module(function($provide){
		$provide.service('calendarService', function(){
			this.generateCalendarObject = function(){
				return true;
			}

			this.generateWeek = function(){
				return true;
			}

			this.dateIsSameMonthAndYear = function(){
				return true;
			}

			this.dateIsToday = function(){
				return true;
			}
		})
	})

	beforeEach( inject(function($rootScope, $controller, _calendarService_){
		scope = $rootScope.$new();
		calendarServiceMock = _calendarService_;
		calendarControllerMock = $controller('calendarController', {
			$scope:scope,
			calendarService: _calendarService_
		})
	}) )

	it('should set the previous month exactly one month from now', function(){
		var oneMonthAgo = moment().subtract(1, "month");
		calendarControllerMock.PreviousMonth();

		expect( calendarControllerMock.selectDate['year'] ).toEqual( oneMonthAgo.format('YYYY') );
		expect( calendarControllerMock.selectDate['month'] ).toEqual( oneMonthAgo.format('MMMM') );
		expect( calendarControllerMock.selectDate['date'] ).toEqual( oneMonthAgo.format('DD') );
	})

	it('should set the next month exactly one month from now', function(){
		var oneMonthLater = moment().add(1, "month");
		calendarControllerMock.NextMonth();

		expect( calendarControllerMock.selectDate['year'] ).toEqual( oneMonthLater.format('YYYY') );
		expect( calendarControllerMock.selectDate['month'] ).toEqual( oneMonthLater.format('MMMM') );
		expect( calendarControllerMock.selectDate['date'] ).toEqual( oneMonthLater.format('DD') );
	})

	it('should reset the date to today\'s date if the user changes', function(){

		var today = moment();
		var randomDate = moment([1994, 09, 28]);

		calendarControllerMock.UpdateSelectDate( randomDate );
		expect( calendarControllerMock.selectDate['year'] ).toEqual( randomDate.format('YYYY') );
		expect( calendarControllerMock.selectDate['month'] ).toEqual( randomDate.format('MMMM') );
		expect( calendarControllerMock.selectDate['date'] ).toEqual( randomDate.format('DD') );

		calendarControllerMock.SetCalendarToToday();
		expect( calendarControllerMock.selectDate['year'] ).toEqual( today.format('YYYY') );
		expect( calendarControllerMock.selectDate['month'] ).toEqual( today.format('MMMM') );
		expect( calendarControllerMock.selectDate['date'] ).toEqual( today.format('DD') );
	})

	it( 'should format the date in the calendar view correctly', function(){
		var today = moment();
		var result = calendarControllerMock.FormatDate(today);

		expect( calendarControllerMock.selectDate['date'] ).toEqual( today.format('DD') );
	})

	it('should store the passed in date into the correct objects and format', function(){
		var today = moment()
		calendarControllerMock.UpdateSelectDate(today)

		expect( calendarControllerMock.selectDate['year'] ).toEqual( today.format('YYYY') )
		expect( calendarControllerMock.selectDate['month'] ).toEqual( today.format('MMMM') )
		expect( calendarControllerMock.selectDate['date'] ).toEqual( today.format('DD') )
	})
})