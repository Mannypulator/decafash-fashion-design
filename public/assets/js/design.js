$(document).ready(function(){

    //GET ALL DESIGNS
    $.ajax({
        type:'GET',
        url:"http://localhost:3000/designs",
        dataType:"json",
        contentType:'application/json',
        data:{
           format:'json'
        },
        
        success:function(data){
            var designs = data;
            var output = '';
                for(i in designs){
                    output += 
                    `<article class="card">
                    <div class="category category-offer">`+designs[i].quantity+`</div>
                    <div class="category category-available">Available</div>
                  <img src="`+designs[i].img_url+ `" alt="jean">
                  <div class="card-flex-item ">
                    <div><small> &#8358 `+designs[i].price+`</small></div>
                    <div><small>`+designs[i].design_name+`</small></div>
                  </div>
                  
                  <hr>
                  <p>`+designs[i].design_description+`</p>
                  <a href="design.html?`+designs[i].id+`"><input type="button" class="btn" value="Details"></a>
                </article>`
                }
            $("#all-designs").html(output);
            var user = location.search.substring(1);       
            $("#user").html(user);
  
        },
    });
});