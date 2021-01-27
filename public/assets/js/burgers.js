// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-consume").on("click", function(event) {
      var id = $(this).data("id");
      var newConsume = $(this).data("newconsume");
  
      var newConsumeState = {
        consumed: newConsume
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newConsumeState
      }).then(
        function() {
          // Set timeout function to display gif transition then reload page
          console.log("changed consume to", newConsume);
          $(".update").show();
          setTimeout(function(){
            location.reload()
          }, 2900);
          // Reload the page to get the updated list
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger= {
        name: $("#ca").val().trim(),
        consumed: $("[name=consumed]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // gif animation
          $("body").addClass("background");
          setTimeout(function(){
            location.reload()
          }, 2000);
          // Reload the page to get the updated list
          
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id)
          $(".delete").show();
          // gif animation
          setTimeout(function(){
            location.reload()
          }, 1800);;
          // Reload the page to get the updated list
        }
      );
    });
  });
  