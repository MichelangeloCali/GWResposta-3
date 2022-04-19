$(function () {
  $("#button").click(function () {
    $.ajax({
      type: "Get",
      url: "file.json",
      dataType: "json",
      success: function (data) {
        var items = [];

        $.each(data, function (key, val) {
          items.push('<option id="' + key + '">' + val + "</option>");
        });

        $("<select/>", {
          class: "interest-list",
          html: items.join(""),
        }).appendTo("#box");
        $("#button").prop("disabled", true);
      },
      statusCode: {
        404: function () {
          alert("Arquivo não encontrado. Tente novamente!");
        },
      },
    });
  });
});
