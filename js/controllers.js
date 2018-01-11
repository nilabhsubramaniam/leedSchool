/**
 * MainCtrl - controller
 */
function MainCtrl($scope, $state,toaster) {
    $scope.addClassFormData ={
        Id: 0,
        fullName: 0,
        dob: '',
        school:'',
        class:'',
        divison:'',
        status:''
    };
	$scope.classList =[
			{
                        Id: 0,
                        fullName: 'Rohan Swarnkar',
                        dob: '22-07-1993', 
                        school: 'St Mary school' ,
                        class:'5',
                        divison:'3',
                        status:'active'
            },
            {
                        Id: 1,
                        fullName: 'Arpit Bhatt',
                        dob: '22-05-1997', 
                        school: 'St karen seconary school' ,
                        class:'5',
                        divison:'3',
                        status:'active'
            },
            {
                         Id: 2,
                        fullName: 'Arpit chaturvedi',
                        dob: '22-03-1991', 
                        school: 'St john x111' ,
                        class:'7',
                        divison:'4',
                        status:'inactive'
            }
	]

 //Add class 
 $scope.submitClassInfo = function () {
     var _class = {
         Id: $scope.classList.length + 1,
         fullName: $scope.addClassFormData.fullName,
         dob: $scope.addClassFormData.dob,
         school : $scope.addClassFormData.school,
         class: $scope.addClassFormData.class,
         divison: $scope.addClassFormData.divison,
         status: $scope.addClassFormData.status
     };
     $scope.classList.push(_class);
     ClearModel();
 };
    //Delete Class
    $scope.deleteClass = function(classDetail){
        var _index = $scope.classList.indexOf(classDetail);
        $scope.classList.splice(_index, 1);
    };
 //Edit class

 $scope.editClass = function(){

 };

 //Delete class 



}

angular
    .module('leadSchool')
    .controller('MainCtrl', MainCtrl);
