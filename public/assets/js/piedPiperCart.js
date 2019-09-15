// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  // EAT A BURGER

  $(".create_form").on("submit", function(event) {
    var id = $(this).data("id");
    var devouredState = {
      devoured: 1
    };

     // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function() {
        console.log("Burger changed status to", devouredState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // ADD a song to the cart (add an item to the cart table in the database)

  $(".add_to_cart").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newSong = {
      user_id: $("#userID").val().trim(),
      song_title: $("#songTitleID").val().trim(),
      artist_name: $("#artistName").val().trim()
      
    };

    // Send the POST request.
    $.ajax("/api/piedPiperCart", {
      type: "POST",
      data: newSong
    }).then(
      function() {
        console.log("added new song to the cart");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // DELETE A song from the cart (trash it)

    $(".removeSong").on("click", function(event) {
        event.preventDefault();
        console.log("the trash button was clicked")
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax({
            type: "DELETE",
            url: "/api/piedPiperCart/" + id
        }).then(
          function() {
            console.log("Song was deleted")
            location.reload();
            
        })
    });

});
