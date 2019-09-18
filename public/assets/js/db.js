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
            console.log(data);
            var output = '';
            for (i in designs) {
                output +=
                    `<tr class="user-view-listitem">
                    <td id="user_id">
                        <h4>` + designs[i].id + `</h4>
                    </td>
                    <td id="jean_id">
                        <img src =` + designs[i].img_url + `>
                    </td>
                    <td id="jean_name">
                        <p>` + designs[i].designer + `</p>
                    </td>
                    <td id="body_type">
                        <p>` + designs[i].quantity + `</p>
                    </td>
                    <td id="condition">
                        <p>` + designs[i].design_name + `</p>
                    </td>
                    <td id="list-item6">
                        <p> &#8358 ` + designs[i].price + `</p>
                    </td>
                    <td id="action">
                    <a href="design.html?` + designs[i].id + `"><button type="button" class="btn blue">update</button></a>
                    <a href="design.html?` + designs[i].id + `">   <button type="button" class="btn orange">delete</button></a>
                     </td>
                </tr>`
            }
            $(".user-view-list").html(output);
            var user = location.search.substring(1);
            // $("#user").html(user);

        },
    })
})