'use strict';

/* Directives */


angular.module('myApp.directives', []) 
    .directive('czRegionMap',[function(){
         
                    
        function link(scope,element,attr){
            scope.$watch("data", updateFunc,true)
            var dataTitle=scope.title
            var regionId=null;
            
            
            var el=element.find("path");
            for(var i=0;i<el.length;i++){
                el[i].setAttribute("region",i)
            }
            
            
            
    
            var mapping=[           "Praha",       10,"CZ0100",
                     "Beroun",      46,"CZ0202",
                     "Blansko",     7,"CZ0641",
                     "Brno-m�sto",  38,"CZ0642",
                     "Bene�ov",     53,"CZ0201",
                     "Brno-venkov", 74,"CZ0643",
                     "Brunt�l",     3,"CZ0801",
                     "B�eclav",     48,"CZ064",
                     "�esk� Bud�jovice",36,"CZ0311",
                     "Cheb",        0,"CZ0411",
                     "�esk� Krumlov",67,"CZ0312",
                     "�esk� L�pa",  6,"CZ0511",
                     "Chrudim",     23,"CZ0531",
                     "Chomutov",    14,"CZ0422",
                     "D���n",       18,"CZ0421",
                     "Doma�lice",   32,"CZ0321",
                     "Fr�dek-M�stek",75,"CZ0802	",
                     "Havl��k�v Brod",39,"CZ0631",
                     "Hradec Kr�lov�",64,"CZ0521",
                     "Hodon�n",     54,"CZ0645",
                     "Ji��n",       76,"CZ0522",
                     "Jesen�k",     60,"CZ0711",
                     "Jind�ich�v Hradec",42,"CZ0313",
                     "Jihlava",     4,"CZ0632",
                     "Jablonec nad Nisou",25,"CZ0512",
                     "Kutn� Hora",  52,"CZ0205",
                     "Karvin�",     73,"CZ0803	",
                     "Kladno",      50,"CZ0203",
                     "Krom���",    2,"CZ0721",
                     "Kol�n",       51,"CZ0204",
                     "Klatovy",     33,"CZ0322",
                     "Karlovy Vary",15,"CZ0412",
                     "Liberec",     22,"CZ0513",
                     "Louny",       21,"CZ0424",
                     "Litom��ice",  16,"CZ0423",
                     "Mlad� Boleslav",58,"CZ0207",
                     "M�ln�k",      59,"CZ0206",
                     "Most",        20,"CZ0425",
                     "N�chod",      5,"CZ0523",
                     "Nymburk",     57,"CZ0208",
                     "Nov� Ji��n",  66,"CZ0804",
                     "Olomouc",     63,"CZ0712",
                     "Opava",       69,"CZ0805",
                     "Ostrava",     72,"CZ0806",
                     "P��bram",     47,"CZ020B",
                     "Pelh�imov",   41,"CZ0633",
                     "Praha-v�chod",24,"CZ0209",
                     "P�sek",       35,"CZ0314",
                     "Plze�-jih",   37,"CZ0324",
                     "Plze�-m�sto", 40,"CZ0323",
                     "P�erov",      1,"CZ0714",
                     "Plze�-sever", 43,"CZ0325",
                     "Prachatice",  68,"CZ0315",
                     "Pardubice",   8,"CZ0532",
                     "Prost�jov",   62,"CZ0713",
                     "Praha-z�pad", 49,"CZ020A",
                     "Rakovn�k",    45,"CZ020C",
                     "Rychnov nad Kn�nou", 27,"CZ0524",
                     "Rokycany",    12,"CZ0326",
                     "Semily",      26,"CZ0514",
                     "Sokolov",     13,"CZ0413",
                     "Strakonice",  30,"CZ0316",
                     "�umperk",     61,"CZ0715",
                     "Svitavy",     65,"CZ0533",
                     "T�bor",       34,"CZ0317",
                     "Tachov",      31,"CZ0327",
                     "Teplice",     11,"CZ0426",
                     "T�eb��",      55,"CZ0634",
                     "Trutnov",     17,"CZ0525",
                     "Uhersk� Hradi�t�",44,"CZ0722",
                     "�st� nad Labem",19,"CZ0427",
                     "�st� nad Orlic�", 71,"CZ0534",
                     "Vset�n",      28,"CZ0723",
                     "Vy�kov",      29,"CZ0646",
                     "Zl�n",        70,"CZ0724",
                     "Znojmo",      56,"CZ0647",
                     "���r nad S�zavou",9,"CZ0635"
                    ];
            
            
            element.find("path").on("mouseover",function(event){
                RegionOver(this,event)                
            })
            element.find("path").on("mousemove",function(e){            
                 scope.ttLeft=e.pageX+20;
                scope.ttTop=e.pageY+20;
                scope.ttShow="block";
                scope.$apply();
                
            })
            element.find("path").on("click",function(){
                RegionClick(this);
            });
            element.find("path").on("mouseleave",function(){
                RegionOut(this);
                
                
            });
            function updateFunc(oldval, newval) {                 
                    
                    dataTitle=scope.data.title;
                    SetDataArray(scope.data.data,0,1)
                
            }
            function SetTooltip(title,headline,text){
                if(text==null){
                    text="";
                }
                if(title!=null && title!=""){
                    title+=" - ";
                }else{
                    title="";
                }
                scope.title=title
                scope.headline=headline
                scope.text=text;
                
                scope.$apply();
                
            }
            
            function RegionOut(object){
                angular.element(object).attr("stroke","none");
                angular.element(object).attr("stroke-width","0px");
                scope.ttShow="none";
                scope.$apply();
            };
            function RegionClick(object){
                alert('todo graf')
            //drawGraph();            
            };
            function RegionOver(object,e){
                angular.element(object).attr("stroke","red");
                angular.element(object).attr("stroke-width","5px");
                
                
                
                
                
                
                scope.ttLeft=e.pageX+20;
                scope.ttTop=e.pageY+20;
                scope.ttShow="block";
                scope.$apply();
                
                
                
             
                SetTooltip(dataTitle,GetRegionName(angular.element(object).attr("region")),angular.element(object).attr("name"));  
            }
            function GetRegionName(id){
                for(var i=0;i<mapping.length;i+=3){
                    if(id==mapping[i+1]||id==mapping[i+2]){
                        return mapping[i];
                    }
                }
            };
            
            function GetRegionId(name){
                for(var i=0;i<mapping.length;i+=3){

                    if(name==mapping[i]){
                        return mapping[i+1];
                    }
                }
            };
            function GetLauRegionId(lau){
                for(var i=0;i<mapping.length;i+=3){
                    if(lau==mapping[i+2]){
                        return mapping[i+1];
                    }
                }
            }
            function GetRange(array,index){
                var min=9999999999;
                var max=-9999999999;

                for(var i=0;i<array.length;i++){

                    min=Math.min(min,Number(array[i][index]));
                    max=Math.max(max,Number(array[i][index]));
                }
                return [min,max];
            };
            function SetDataArray(list,indexId,indexData,range){
                
                
                //list.shift()
                
                var r=GetRange(list,indexData);
                
                
                scope.barLow=r[0];
                scope.barHigh=r[1];
                scope.$apply();
                
                
                if(range==null){
                    range=r;
                }

                for(var i=0;i<list.length;i++){
                    
                    SetRegionColor(list[i][indexId],GetColor(range,list[i][indexData]),list[i][indexData]);
                }

            };
            function SetRegionColor(id,color,value){
                var tmp=id;
                if(Number(id).toString()=="NaN"){
                    id=GetLauRegionId(id);
                }
                if(id==null){
                    id=GetRegionId(tmp);

                }
                if(value==null){
                    value="";

                }
                try{
                    var el=element.find("path");
                    for(i=0;i<el.length;i++){
                        
                        if(el[i].getAttribute("region")==id){
                            
                            angular.element(el[i]).attr("fill",color)
                            angular.element(el[i]).attr("name",value)
                        }
                    }                    
                }catch(e){

                }
            };

            function GetColor(range,value){
                var index=Math.min(1,(value-range[0])/(range[1]-range[0]));
                var g=Math.max(0,Math.min(255,Math.round(index*255))).toString(16);
                var r=Math.max(0,Math.min(255,Math.round(255-index*255))).toString(16);
                if(r.length==1){
                    r="0"+r;
                }
                if(g.length==1){
                    g="0"+g;
                }
                return "#"+r+g+"00";
            }; 
            
//            SetDataArray(scope.data,0,1)
            
            
        }            
                    
                    
                    
                    
                    
        return {    
            restrict: 'E',
            templateUrl: 'partials/CZMap.html'    ,
            link:link,
            scope:{data:"="}
        }

    }]);
