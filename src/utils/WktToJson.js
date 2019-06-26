/**
 * 获取点
 */
export function getPoint (pt) {
  let Result = null
  let objPoints = pt.split("(")[1];
	if (pt.indexOf("(") != pt.lastIndexOf("(")) {
		objPoints = pt.split("(")[2];
	}

	objPoints = objPoints.split(")")[0];

	objPoints = objPoints.trim().replace(" ", ",");
	Result = new esri.geometry.Point(parseFloat(objPoints.split(",")[0]), parseFloat(objPoints.split(",")[1]));

	//Result.spatialReference = map.spatialReference;
	return Result;

}     
/**
 * 获取线
 */
export function getLine(line){
	
	var objPoints =line.split("(")[1];
	var Result;
	if (line.indexOf("(") != line.lastIndexOf("(")) {
		objPoints = line.split("(")[2];
	}

	objPoints = objPoints.split(")")[0];
	
		objPoints = objPoints.trim().split(",");
		var arrLine = new Array();
		var arrPoints = new Array();

		for ( var i = 0; i < objPoints.length; i++) {
			objPoints[i] = objPoints[i].trim().split(" ");
			var arrXy = new Array();
			arrXy.push(parseFloat(objPoints[i][0]));
			arrXy.push(parseFloat(objPoints[i][1]));
			arrPoints.push(arrXy);
		}

		arrLine.push(arrPoints);
		var polylineJson = {
			"paths" : arrLine
		};
		Result = new esri.geometry.Polyline(polylineJson);
		//Result.spatialReference = map.spatialReference;
		return Result;
}
/**
 * 夺取多线
 */
export  function getMultiLine(MultiLine){
	 
	
	var objPoints = MultiLine.split("(")[1];
	var Result;
	if (MultiLine.indexOf("(") != MultiLine.lastIndexOf("(")) {
		objPoints = MultiLine.split("(")[2];
	}

	objPoints = objPoints.split(")")[0];
	
		var objGeometry1 = MultiLine.split("((")[1].trim();
		var objGeometry2 = objGeometry1.substring(0,
				objGeometry1.length - 2);
		var ObjLines = objGeometry2.split("),(");
		var arrLine = new Array();
		var arrPoints = new Array();
		for ( var i = 0; i < ObjLines.length; i++) {
			objPoints = ObjLines[i].trim().split(",");
			for ( var j = 0; j < objPoints.length; j++) {
				objPoints[j] = objPoints[j].trim().split(" ");
				var arrXy = new Array();
				arrXy.push(parseFloat(objPoints[j][0]));
				arrXy.push(parseFloat(objPoints[j][1]));
				arrPoints.push(arrXy);
			}
			arrLine.push(arrPoints);
		}
		var polylineJson = {
			"paths" : arrLine
		};
		Result = new esri.geometry.Polyline(polylineJson);
		//Result.spatialReference = map.spatialReference;
		return Result;
}
/**
 * 获取多边形
 */
export function getPolygon(polygon){


	var objPoints = polygon.split("(")[1];
 	var Result
	if( polygon.indexOf("(") !=  polygon.lastIndexOf("(")){
		objPoints =  polygon.split("(")[2];
	}
	objPoints = objPoints.split(")")[0];

	objPoints = objPoints.trim().split(",");
	var arrPolygon = new Array(); 
	var arrPoints = new Array(); 
	for(var i=0;i<objPoints.length;i++)
	{
		objPoints[i] = objPoints[i].trim().split(" ");	 			 
		var arrXy = new Array(); 
		arrXy.push(parseFloat(objPoints[i][0]));
		arrXy.push(parseFloat(objPoints[i][1]));
		arrPoints.push(arrXy);
	}
			
	arrPolygon.push(arrPoints);
	var polygonJson = {"rings":arrPolygon};
	Result = new esri.geometry.Polygon(polygonJson);

//	Result.spatialReference = map.spatialReference;
	return Result;
		
}
/**
 * 获取多边形或者多个多边形
 */
export function getMultiPolygon(MultiPolygon){
 var regExp = new RegExp(/\)\),\s\(\(/g);  //wxp edit
	MultiPolygon=MultiPolygon.replace(regExp,")),((");
	var Result=null;
	if (MultiPolygon.indexOf("MULTIPOLYGON(((") > -1 || MultiPolygon.indexOf("(((") > -1
			&& MultiPolygon.lastIndexOf(")))") > 0) {
		var objPolygons = MultiPolygon.split("(")[1];
		
		if (MultiPolygon.indexOf("(((") != MultiPolygon.lastIndexOf(")))")) {
			objPolygons = MultiPolygon.split("(((")[1];
		}
		objPolygons = objPolygons.split(")))")[0];
		objPolygons = objPolygons.split(")),((");
		var arrPolygon = new Array();
		for ( var j = 0; j < objPolygons.length; j++) {
			objPoints = objPolygons[j].trim().split(",");

			var arrPoints = new Array();
			for ( var i = 0; i < objPoints.length; i++) {
				objPoints[i] = objPoints[i].trim().split(" ");
				var arrXy = new Array();
				arrXy.push(parseFloat(objPoints[i][0]));
				arrXy.push(parseFloat(objPoints[i][1]));
				arrPoints.push(arrXy);
			}

			arrPolygon.push(arrPoints);
		}

		var polygonJson = {
			"rings" : arrPolygon
		};

		Result = new esri.geometry.Polygon(polygonJson);
		
	} else if (MultiPolygon.indexOf("POLYGON((") > -1 || MultiPolygon.indexOf("((") > -1
			&& MultiPolygon.lastIndexOf("))") > 0) {
		var objPoints = MultiPolygon.split("(")[1];
		
		if (MultiPolygon.indexOf("(") != MultiPolygon.lastIndexOf("(")) {
			objPoints = MultiPolygon.split("(")[2];
		}

		objPoints = objPoints.split(")")[0];
		objPoints = objPoints.trim().split(",");
		var arrPolygon = new Array();
		var arrPoints = new Array();
		for ( var i = 0; i < objPoints.length; i++) {
			objPoints[i] = objPoints[i].trim().split(" ");
			var arrXy = new Array();
			arrXy.push(parseFloat(objPoints[i][0]));
			arrXy.push(parseFloat(objPoints[i][1]));
			arrPoints.push(arrXy);
		}

		arrPolygon.push(arrPoints);
		var polygonJson = {
			"rings" : arrPolygon
		};

		Result = new esri.geometry.Polygon(polygonJson);
		
	}
	//Result.spatialReference = map.spatialReference;
		
	   return Result;
}
