/**
 * MainCtrl - controller
 */
function MainCtrl($scope, $state,toaster) {
	$scope.classList =[
			{
                        _id: 0,
                        fullName: 'Rohan Swarnkar',
                        dob: '22-07-1993', 
                        school: 'St Mary school' ,
                        class:'5',
                        divison:'3',
                        status:'active'
            },
            {
                        _id: 1,
                        fullName: 'Arpit Bhatt',
                        dob: '22-05-1997', 
                        school: 'St karen seconary school' ,
                        class:'5',
                        divison:'3',
                        status:'active'
            },
            {
                        _id: 2,
                        fullName: 'Arpit chaturvedi',
                        dob: '22-03-1991', 
                        school: 'St john x111' ,
                        class:'7',
                        divison:'4',
                        status:'inactive'
            }
	]

 //Add class 
 $scope.submitClassInfo = function (addClassFormData) {
         var tmp = {"_id": 0, "fullName": '', "dob": '', "school": '' ,"class":'',"divison":'',"status":''};
        tmp._id = addClassFormData._id + 1;
        $scope.classList.push(tmp);
    };

 //Edit class

 $scope.editClass = function(){

 }

 //Delete class 

 $scope.deleteClass = function (index){
 			$scope.classList.splice(index, 1);
 }

}

angular
    .module('leadSchool')
    .controller('MainCtrl', MainCtrl);
