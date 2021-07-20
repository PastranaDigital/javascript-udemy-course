let incomingScores = [
	{
		Id: 123451,
		WorkoutOrder: 1,
		WorkoutName: 'Chaos',
		DidRX: true,
		HitGoal: 100, 
	},
	{
		Id: 123452,
		WorkoutOrder: 1,
		WorkoutName: 'Chaos',
		DidRX: true,
		HitGoal: 100, 
	},
	{
		Id: 123453,
		WorkoutOrder: 1,
		WorkoutName: 'Chaos',
		DidRX: false,
		HitGoal: 100, 
	},
	{
		Id: 123454,
		WorkoutOrder: 1,
		WorkoutName: 'Chaos',
		DidRX: true,
		HitGoal: 0, 
	},
	{
		Id: 123455,
		WorkoutOrder: 1,
		WorkoutName: 'Chaos',
		DidRX: true,
		HitGoal: 100, 
	},
	{
		Id: 123456,
		WorkoutOrder: 2,
		WorkoutName: 'Gaia',
		DidRX: false,
		HitGoal: 100, 
	},
	{
		Id: 123457,
		WorkoutOrder: 2,
		WorkoutName: 'Gaia',
		DidRX: true,
		HitGoal: 0, 
	},
	{
		Id: 123458,
		WorkoutOrder: 2,
		WorkoutName: 'Gaia',
		DidRX: false,
		HitGoal: 0, 
	},
];

const data =  [];
const workoutSet =  new Set([]);
let workoutArray = [];
let totalResults = {};

let workout = {
	WorkoutOrder: '',
	WorkoutName: '',
	AllScoreSubmissions: []
};


const siftScores2 = function () {
	//! get unique workouts
	incomingScores.forEach(element => {
		workoutSet.add(element.WorkoutName);
	});
	workoutArray = [...workoutSet];

	//! place the workouts into workout objects
	let workoutOrder = 1;
	workoutArray.forEach(row => {
		let tempWorkout = {
			WorkoutOrder: '',
			WorkoutName: '',
			AllScoreSubmissions: []
		};
		tempWorkout.WorkoutOrder = workoutOrder;
		tempWorkout.WorkoutName = row;
		// data.push(tempWorkout);
		workoutOrder++;
		//! place the incoming scores into the specific workout objects
		incomingScores.forEach(element => {
			if(element.WorkoutName == row) {
				let tempObj = {};
				tempObj.ScoreId = element.Id;
				tempObj.WorkoutName = element.WorkoutName;
				tempObj.DidRX = element.DidRX;
				if(element.HitGoal == 100) {
					let value = 1;
					tempObj.HitGoal = value;
				} else {
					let value = 0;
					tempObj.HitGoal = value;
				}

				tempWorkout.AllScoreSubmissions.push(tempObj);
			}
		});
		data.push(tempWorkout);
	});

	//! go through each workout object and calculate the details
	data.forEach(element => {
		element.TotalSubmissions = element.AllScoreSubmissions.length;
		//! count the RX values
		element.RxCount = 0;
		element.AllScoreSubmissions.forEach(row => {
			element.RxCount = row.DidRX ? element.RxCount += 1 : element.RxCount;
		});
		//! calc the RX Percent
		element.RxPercent = (element.RxCount / element.TotalSubmissions * 100);
		element.RxPercent = element.RxPercent.toFixed(2);
		//! make RxCalced String
		element.RxCalced = ((element.RxPercent * 31.4) / 100) + ' 31.4';


		//! count the Goal values
		element.GoalCount = 0;
		element.AllScoreSubmissions.forEach(row => {
			element.GoalCount += row.HitGoal;
		});
		//! calc the Goal Percent
		element.GoalPercent = (element.GoalCount / element.TotalSubmissions * 100);
		element.GoalPercent = element.GoalPercent.toFixed(2);
		//! make GoalCalced String
		element.GoalCalced = ((element.GoalPercent * 31.4) / 100) + ' 31.4';
	});

	//! get the total values for totalResults
	totalResults.TotalSubmissions = 0;
	totalResults.RxCount = 0;
	totalResults.RxPercent = 0;
	// totalResults.RxCalced = ((45 * 31.4) / 100) + ' 31.4'; 
	totalResults.GoalCount = 0;
	totalResults.GoalPercent = 0;
	// totalResults.GoalCalced = ((70 * 31.4) / 100) + ' 31.4';
	data.forEach(workout => {
		totalResults.TotalSubmissions += workout.TotalSubmissions;
		totalResults.RxCount += workout.RxCount;
		totalResults.GoalCount += workout.GoalCount;

		//! calc the RX Percent
		totalResults.RxPercent = (totalResults.RxCount / totalResults.TotalSubmissions * 100);
		totalResults.RxPercent = totalResults.RxPercent.toFixed(2);
		//! make RxCalced String
		totalResults.RxCalced = ((totalResults.RxPercent * 31.4) / 100) + ' 31.4';
		
		//! calc the Goal Percent
		totalResults.GoalPercent = (totalResults.GoalCount / totalResults.TotalSubmissions * 100);
		totalResults.GoalPercent = totalResults.GoalPercent.toFixed(2);
		//! make GoalCalced String
		totalResults.GoalCalced = ((totalResults.GoalPercent * 31.4) / 100) + ' 31.4';
	});
};


siftScores2();
console.log('workoutSet: ', workoutSet);
console.log('workoutArray: ', workoutArray);
console.log('data: ', data);
console.log('totalResults: ', totalResults);