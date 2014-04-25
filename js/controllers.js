'use strict';

/* Controllers */

angular.module('myApp.controllers', [])  
  .controller('CZRegionMap', ["$scope",function(scope) {

         
         
         scope.data=
         {
             title:"Titulek dat",             
             data:[['CZ0100',1000],
             ['CZ0202',2000],
             ['CZ0201',3000],
             ['CZ0643',4000]]
         }   
             
             
             
             
         
            
          
        scope.changeData=function(){            
            
            scope.data.data[0][1]+=500;
            
        }  
                
                
         
    
        
  }]);
