<script>
  $(document).ready(function () {
    // When the "Sign In" tab is selected
    $('#tab-1').click(function () {
      $('.login-space').removeClass('sign-up-form');
    });

    // When the "Sign Up" tab is selected
    $('#tab-2').click(function () {
      $('.login-space').addClass('sign-up-form');
    });

    // Handle the login form submission
    $('#tab-1').click(function () {
      $('.login').on('submit', function (event) {
        event.preventDefault();
        // Add your login logic here
        // You can use AJAX to send data to a server or perform client-side validation.
      });
    });

    // Handle the sign-up form submission
    $('#tab-2').click(function () {
      $('.sign-up-form').on('submit', function (event) {
        event.preventDefault();
        // Add your sign-up logic here
        // You can use AJAX to send data to a server or perform client-side validation.
      });
    });
  });
</script>
