$(document).ready(function () {
    $("#contact-form").on('submit', function (event) {
        event.preventDefault();
        var formData = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: 'sendmail.php',
            dataType: "json",
            data: formData,
            success: function (response) {
                alert(response.success);
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            }
        });
    });
});