
// Chosen CSS
// var config = {
//   '.chosen-select'            : {},
//   '.chosen-select-deselect'   : {allow_single_deselect:true},
//   '.chosen-select-no-single'  : {disable_search_threshold:10},
//   '.chosen-select-no-results' : {no_results_text: 'Oops, nothing found!'},
//   '.chosen-select-width'      : {width: '95%'}
// }
//
// console.log(config['chosen-select-no-results']);
//
// for (var selector in config) {
//   $(selector).chosen(config[selector]);
// }


//


//  Capture the form inputs
$('#submit').on('click', event => {
  event.preventDefault();
  console.log('button clicked');

  // Form validation
  // const validateForm = () => {
  //   var isValid  = true;
  //   $('.form-control').each( () => {
  //     if ( $(this).val() === '' )
  //       isValid = false;
  //   });
  //
  //   $('.chosen-select').each( () => {
  //     if ( $(this).val() === '')
  //       isValid = false;
  //   });
  //   return isValid;
  // };

  // If all required fields are filled
  // if (validateForm() === true) {

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

      // console.log ('currentURL = ' + currentURL);
      // console.log(userData.photo + ' ' + userData.name);
      // console.log(userData.scores + ' = answer no. 6');
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



  // } else {
  //   alert('Please fill out all fields before submitting');
  // }
  // return false;
});
