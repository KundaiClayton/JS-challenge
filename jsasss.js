	function changecolour(){
		document.getElementById('text2').innerHTML="hi,my name is Blue";
		document.getElementById('column2').style.backgroundColor="blue";
		var y="Blue"
		var arr=y.split("");
		var count=0;
		for (var i=0;i<arr.length;i++) {
			var x=arr[i].charCodeAt();
			count=x+count;
		
		}
       document.getElementById('text1').innerHTML=count;
     }
     function changecolour1(){
     	document.getElementById('column2').style.backgroundColor="Green";
		document.getElementById('text2').innerHTML="hi,my name is Green";
		
		var y="Green"
		var arr=y.split("");
		var count=0;
		for (var i=0;i<arr.length;i++) {
			var x=arr[i].charCodeAt();
			count=x+count;
		
		}
       document.getElementById('text1').innerHTML=count;

     }
     function changecolour2(){
		document.getElementById('text2').innerHTML="hi,my name is Red";
		document.getElementById('column2').style.backgroundColor="Red";
		var y="Red"
		var arr=y.split("");
		var count=0;
		for (var i=0;i<arr.length;i++) {
			var x=arr[i].charCodeAt();
			count=x+count;
		
		}
       document.getElementById('text1').innerHTML=count;
     }	