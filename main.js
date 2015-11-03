
function createElem(){
var fname = prompt("Enter form name");
    
    if (fname != null) {

	formdiv=document.getElementById("formdiv");
	myform=document.createElement("form");
	myform.setAttribute("id","myform");
	
	
	var b1 = document.createElement("input");
	b1.id="submitB"
	b1.type = "button";
	b1.value = "Submit";
	myform.appendChild(b1);
	formdiv.appendChild(myform);

	//adding elements
	elementsdiv=document.getElementById("elementsdiv");

	var v1 = document.createElement("input");
	v1.type = "button";
	v1.value = "Create Text";
	v1.id = "text";
	v1.onclick=createText;
	elementsdiv.appendChild(v1);

	var v2 = document.createElement("input");
	v2.type = "button";
	v2.id = "password";
	v2.value = "Create Password";
	v2.onclick=createPass;
	elementsdiv.appendChild(v2);

	var v3 = document.createElement("input");
	v3.type = "button";
	v3.id = "select";
	v3.value = "Create Select";
	v3.onclick=createSelect;
	elementsdiv.appendChild(v3);

	var v4 = document.createElement("input");
	v4.type = "button";
	v4.id = "radio";
	v4.value = "Create Radio Buttons";
	v4.onclick=createRadio;
	elementsdiv.appendChild(v4);

	var v5 = document.createElement("input");
	v5.type = "button";
	v5.id = "check";
	v5.value = "Create Check Options";
	v5.onclick=createCheck;
	elementsdiv.appendChild(v5);

	var v6 = document.createElement("input");
	v6.setAttribute("type","file");
	v6.id = "file";
	v6.name = "getFile";	
	elementsdiv.appendChild(v6);

	var v7 = document.createElement("input");
	v7.type = "button";
	v7.id = "textArea";
	v7.value = "Text Area";
	v7.onclick=createArea;
	elementsdiv.appendChild(v7);			

    }


}

function createArea(){

	var con = document.getElementById("myform");
	var elem = document.createElement("TEXTAREA");con.innerHTML = con.innerHTML + "</br>" + "Text Area: ";
	elem.id = "tA";
	con.appendChild(elem);	
}

function createText(){
	var tname = prompt("Enter text name");
	var x = document.createElement("label");
	x.id = "lbInput";
	x.innerHTML=tname;
	myform.appendChild(x);
	var text = document.createElement("input");
	text.id = "textID";
	text.type = "text";
	text.value = "";
	document.body.appendChild(text);
	
}


function createPass(){
	var x = document.createElement("label");
	x.innerHTML="Password";
	x.id = "lbPass";
	myform.appendChild(x);
	var text = document.createElement("input");
	text.type = "password";
	text.id = "textPass";
	text.value = "";
	document.body.appendChild(text);
}

function createSelect(){
	myselect = document.createElement("select");
	myselect.id ="options";
	var sname=prompt("Enter select label:");
	var x = document.createElement("label");
	x.innerHTML=sname;
	x.id = "lbSelect";
	myform.appendChild(x);

	var opt=prompt("Enter option. Enter '-' if you want to end options.");
	while(opt!="-"){
		theOption=document.createElement("OPTION");
		theText=document.createTextNode(opt);
		theOption.appendChild(theText);
		myselect.appendChild(theOption);
		opt=prompt("Enter option. Enter '.' if you want to end options.");
	}
	myform.appendChild(myselect);
}

function createCheck(){
	var input = document.createElement("input");
        input.type = "checkbox";
        input.value = "hello";
        input.id = "checkB"
        input.checked = "checked";
	document.body.appendChild(input);
}

function createRadio(){

	var rad = document.createElement("input");
        rad.type = "radio";
        rad.id = "radioB"
        rad.value = "hello";
        rad.checked = "checked";
	document.body.appendChild(rad);
}
