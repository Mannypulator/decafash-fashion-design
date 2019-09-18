$(document).ready(function () {

    //GET ALL DESIGNS
    $.ajax({
        type: 'GET',
        url: "http://localhost:3000/designs",
        dataType: "json",
        contentType: 'application/json',
        data: {
            format: 'json'
        },

        success: function (data) {
            var designs = data;
            var output = '';
            for (i in designs) {
                output +=
                    `<article class="card">
                    <div class="category category-offer">` + designs[i].quantity + `</div>
                    <div class="category category-available">Available</div>
                  <img src="` + designs[i].img_url + `" alt="jean">
                  <div class="card-flex-item ">
                    <div><small> &#8358 ` + designs[i].price + `</small></div>
                    <div><small>` + designs[i].design_name + `</small></div>
                  </div>
                  
                  <hr>
                  <p>` + designs[i].design_description + `</p>
                  <a href="design.html?` + designs[i].id + `"><input type="button" class="btn" value="Details"></a>
                </article>`
            }
            $("#all-designs").html(output);
            var user = location.search.substring(1);
            $("#user").html(user);

        },
    });
    var designID = location.search.substring(1);
    // console.log(designID)

    // GET PARTICULAR PRODUCT
    $.ajax({
        url: "http://localhost:3000/designs/" + designID,
        dataType: "json",
        contentType: 'application/json',
        type: 'GET',
        data: {
            format: 'json'
        },

        success: function (data) {

            var details =
                `
        <article class="card">
        <h1>` + data.design_name + `</h1>
          <div class="category category-available">available</div>
        <img src="` + data.img_url + `" alt="">
        <div class="card-flex-item ">
          <div><h2 id="price">&#8358 ` + data.price + `</h2></div>
        </div>
        <br>
        
        <h3>Details</h3>
        <hr>
        <p><strong>Designer:</strong> &nbsp;&nbsp;&nbsp;&nbsp;` + data.designer + `</p> 
        <p><strong>Quantity:</strong>&nbsp;&nbsp &nbsp;&nbsp;` + data.quantity + `</p>
       
        <br>
        <h3>Description</h3>
        <hr>
        <p> 
          <br>
          ` + data.design_description + `
        </p>
        <br>
       <a href="update-design.html?` + designID + `"><input id="update" type="button" class="btn" value="Update"></a>          
       <a href="delete-design.html?` + designID + `"><input id="delete" type="button" class="btn orange" value="Delete"></a>               
         
       </article>
        `
            $('#details').html(details);

        }
    });
});