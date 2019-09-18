$(document).ready(function(){

    $('#ad-form').submit(function(e){
        e.preventDefault();
        $.ajax({
            url: "http://localhost:3000/designs",
            dataType: 'json',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
              "design_name": $('#design_name').val(),
              "designer": $('#designer').val(),
              "quantity": $('#quantity').val(),
              "price": $('#price').val(),
              "img_url": $('#img_url').val(),
              "design_description": $('#description').val()  
              }),
            processData: false,
            success: function(){
              //   $('#response').html(JSON.stringify(data));
              alert("Design Added Successfully");
              window.location.assign('http://localhost:3000/all-design.html')
            },
            error: function(errorThrown) {
                console.log(errorThrown);
            }  
          });
    })
});