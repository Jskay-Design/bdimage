
  // this code is for select/insert data
  function dSubmit()
  { var donarName, bGroup, dDate, dTime;
    donarName =document.getElementById("fName").value;
    bGroup = document.getElementById("bgroup").value;
    dTime = document.getElementById("lastDate").value;
    dDate = document.getElementById("bdonateDate").value;


    // this code is for Display Data in user UI
    document.getElementById("DonarName").innerHTML = donarName;
    document.getElementById("bloodGroup").innerHTML = bGroup;
    document.getElementById("donateTime").innerHTML = dTime;
    document.getElementById("donateDate").innerHTML = dDate;
  }

  // Data Validation code for User data
  // i used to validation data only for name 

 function validatinForm(){ 
 var name = document.forms.dataForm.fName.value;
 var regName = /\d+$/g;
  if (name == "" || regName.test(name)){
   window.alert("Donar Name Must be Filled Out"); 
    x.focus();
    return false;
  }
 }
//  This is for HTML to JPG Converter system
// Also attached with this html2canvas.js file 

function downloadimage() {
  var container = document.getElementById("htmltoimage");
  html2canvas(container, { allowTaint: true }).then(function (canvas) {

      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "abb.jpg";
      link.href = canvas.toDataURL();
      link.target = '_blank';
      link.click();
      
  });
}