(function(){
var app = angular.module("calendarWidget")

app.controller("calendarController", ["$scope", "calendarService", function($scope, calendarService){

	var vm = this;
	var present = new moment();
	
	//today's date
	vm.today = {}
	vm.today['year'] = present.format('YYYY')
	vm.today['month'] = present.format('MMMM')
	vm.today['day'] = present.format('DD');

	//current date selected- by default it is today
	var selectDate = moment(present);
	vm.selectDate = {}
	vm.selectDate['year'] = selectDate.format('YYYY')
	vm.selectDate['month'] = selectDate.format('MMMM')
	vm.selectDate['date'] = selectDate.format('DD')

	//calendarsToBeDisplayed
	vm.calendarList = {
		"Tesla": "#dddddd",
		"YNCN": "#fdad9e",
		"Engineering Society": "#ffffb7",
		"Spark": "#d4ffcf",
		"UTRA": "#ffe6b5"
	}

	vm.monthObjects = calendarService.generateCalendarObject( vm.today['year'], vm.today['month'] );

	vm.PreviousMonth = function(){
		selectDate = selectDate.subtract(1, "month");
		this.UpdateSelectDate(selectDate)
		vm.monthObjects = calendarService.generateCalendarObject( vm.selectDate['year'], vm.selectDate['month'] );
	}

	vm.NextMonth = function(){
		selectDate = selectDate.add(1, "month");
		this.UpdateSelectDate(selectDate)
		vm.monthObjects = calendarService.generateCalendarObject( vm.selectDate['year'], vm.selectDate['month'] );
	}

	vm.SetCalendarToToday = function(){
		selectDate = moment(present);
		this.UpdateSelectDate(selectDate);
		vm.monthObjects = calendarService.generateCalendarObject( vm.selectDate['year'], vm.selectDate['month'] );
	}

	vm.UpdateSelectDate = function(date){
		vm.selectDate['year'] = date.format('YYYY')
		vm.selectDate['month'] = date.format('MMMM')
		vm.selectDate['date'] = date.format('DD')
	}

	vm.FormatDate = function(date){
		return moment(date, calendarService.DATE_KEY_FORMAT).date();
	}

	vm.IsSameMonth = function(date){
		return calendarService.dateIsSameMonthAndYear(
			moment( date, calendarService.DATE_KEY_FORMAT ), 
			moment(
				[vm.selectDate['month'], vm.selectDate['day'], vm.selectDate['year'] ],
				calendarService.DATE_KEY_FORMAT ) 
		);
	}

	vm.IsToday = function(date){
		return calendarService.dateIsToday(date)
	}

}])

})();