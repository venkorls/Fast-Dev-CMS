$(function () {
    $("#")
})
function btn_add() {
    alert("success");
    $.ajax({
        url: '/User/Add',
        type: 'POST',
        traditional: true,
        success: function (result) {

        }
    });
}