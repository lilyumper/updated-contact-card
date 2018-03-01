$(document).ready(function () {

    $(document).on('click', '#submit', function () {
        var x = $('#firstnameinput').val();
        var y = $('#lastnameinput').val();
        var z = $('#descriptioninput').val();
        var newdiv1 = $("<div id='infocard'>"+x+ '<br>' +y+ '<br>' +z + "</div>");
        $('#output').append(newdiv1);
        


       

    })
    $(document).on('click','#infocard', function(){
        var z = $('#descriptioninput').val();

        $(this).html(z);
    })
})