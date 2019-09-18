$(document).ready(function(){

    var designID = location.search.substring(1);
    // console.log(designID);
    // console.log(productID);
      $.ajax({
        url:"http://localhost:3000/designs/"+designID,
        dataType:"json",
        type:'DELETE',     
        success:function(){
          alert("Design Deleted")
         window.location.assign('http://localhost:3000/all-design.html');
      }
      }); 
  });