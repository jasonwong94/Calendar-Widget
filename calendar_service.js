(function(){
var app = angular.module("calendarWidget")

app.service("calendarService", function() {
	var service = this;

	service.getDay = function(day){
		switch(day){
			case 0:
				return "Sunday";
				break;
			case 1:
				return "Monday";
				break;
			case 2:
				return "Tuesday";
				break;
			case 3:
				return "Wednesday";
				break;
			case 4:
				return "Thursday";
				break;
			case 5:
				return "Friday";
				break;
			case 6:
				return "Saturday";
				break;
		}
	}

	service.getMonth = function(month){
		switch(month){
			case 0:
				return "January";
				break;
			case 1:
				return "February";
				break;
			case 2:
				return "March";
				break;
			case 3:
				return "April";
				break;
			case 4:
				return "May";
				break;
			case 5:
				return "June";
				break;
			case 6:
				return "July";
				break;
			case 7:
				return "August";
				break;
			case 8:
				return "September";
				break;
			case 9:
				return "October";
				break;
			case 10:
				return "November";
				break;
			case 11:
				return "December";
				break;
		}
	}

	service.generateCalendarObject = function(yearID, monthID){

		//get the first Sunday of the 1st week of the month
		var selectedMonth = moment([yearID, monthID, 1]);
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
		service.year = yearID
		_.each(weeks, function(index, key){
			month[index] = _.cloneDeep( service.generateWeek(service.year, index) );
		})

		return month;
	}

	// generates an array
	service.generateWeek = function(yearID, weekID){
		//figure out the first day of each week
		var week = {}

		var sunday = moment().year(yearID).week(weekID).startOf('week')

		//generate week object
		for(day=0; day<7; day++){
			var weekday = moment(sunday).add(day, "days").format('MMMM D YYYY')
			week[weekday] = {}
		}

		return week; 
	}

	service.changeMonth = function(monthID){

	}
})

})();