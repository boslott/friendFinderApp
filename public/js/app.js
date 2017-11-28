


//  Capture the form inputs
$('#submit').on('click', event => {
  event.preventDefault();
  console.log('button clicked');

  // Form validation
  const validateForm = () => {
    let isValid  = true;
    $('.form-control').each( function() {
      if ( $(this).val() == '' ) {
        console.log('form control is not valid');
        isValid = false;
      }
    });


  //
    $('.chosen-select').each( function() {
      if ( $(this).val() === '---') {
        console.log('chosen select is not valid');
        isValid = false;
      }
    });
    return isValid;
  };
  console.log('validateForm = ' + validateForm());

  // If all required fields are filled
  if (validateForm()) {

      // Create an object for the user's data
      var userData = {
        name: $('#name').val(),
        photo: $('#photo').val(),
        scores: [
          parseInt($('#q1').val()),
          parseInt($('#q2').val()),
          parseInt($('#q3').val()),
          parseInt($('#q4').val()),
          parseInt($('#q5').val()),
          parseInt($('#q6').val()),
          parseInt($('#q7').val()),
          parseInt($('#q8').val()),
          parseInt($('#q9').val()),
          parseInt($('#q10').val()),
        ]
      };

      //  Grab the URL of the website
      var currentURL = window.location.origin;

      console.log ('currentURL = ' + currentURL);
      console.log(userData.photo + ' ' + userData.name);
      console.log(userData.scores + ' = answer no. 6');
console.log('about to post and userScores = ' + userData.scores);
      //AJAX post the data to the friends API
      $.post(currentURL + '/api/friends', userData, data => {
        console.log('data = ');
        console.log(data);
        //  Grab the result from the AJAX post so that the best match's
        //  name and photo are displayed

        $('#matchName').text(data.friendName);
        $('#matchImg').attr('src', data.friendPhoto);

        //  Display the best match info on the modal
        $('#resultsModal').modal('toggle');

        //  Clear the form inputs
        $('#name').val('');
        $('#photo').val('');
        $('#q1').val('');
        $('#q2').val('');
        $('#q3').val('');
        $('#q4').val('');
        $('#q5').val('');
        $('#q6').val('');
        $('#q7').val('');
        $('#q8').val('');
        $('#q9').val('');
        $('#q10').val('');
      });



  } else {
    alert('Please fill out all fields before submitting');
  }
  return false;
});
