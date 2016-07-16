(function(){
var app = angular.module("calendarWidget")

app.service("calendarService", function() {
	var service = this;

	//date format for the key
	service.DATE_KEY_FORMAT = 'MMMM D YYYY'

	service.generateCalendarObject = function(yearID, monthID){

		//get the first Sunday of the 1st week of the month
		var selectedMonth = moment([yearID, monthID, 1], "YYYY MMM D");
		var firstSunday = moment(selectedMonth.month(monthID)).startOf('month').startOf('week')

		//get the first week (not ISO!)
		var firstWeekID = firstSunday.week()

		//get the last day of the last week of the month
		var lastSaturday = moment(selectedMonth.month(monthID)).endOf('month').endOf('week')
		var lastWeekID = lastSaturday.week()

		//corner case- this happens between December and January
		if(lastWeekID < firstWeekID){
			lastWeekID += selectedMonth.weeksInYear();
		}

		var weeks = _.range(firstWeekID, (lastWeekID+1), 1)
		var month = {}
		service.year = yearID;
		service.month = monthID;
		_.each(weeks, function(index, key){
			month[index] = _.cloneDeep( service.generateWeek(service.year, index) );
		})

		return month;
	}

	// generates an array
	service.generateWeek = function(yearID, weekID, monthID){
		//figure out the first day of each week
		var week = {}

		var sunday = moment().year(yearID).week(weekID).startOf('week')

		//generate week object
		for(day=0; day<7; day++){
			var weekday = moment(sunday).add(day, "days")
			var key = weekday.format(this.DATE_KEY_FORMAT)
			week[key] = {}
		}

		return week; 
	}

	service.dateIsSameMonthAndYear = function(date, month){
		return( 
			date.year() == month.year() &&
			date.month() == month.month() 
		)
	}

	service.dateIsToday = function(date){
		return date == moment().format(this.DATE_KEY_FORMAT) 
	}

})

})();