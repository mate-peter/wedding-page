var radioButtons = document.querySelectorAll('input[type="radio"][name="Több személyt regisztrálsz?"]');
var additionalQuestions = document.getElementById('form-textarea');

radioButtons.forEach(function(radioButton) {
  radioButton.addEventListener('change', function() {
    if (this.value === 'Több személyt regisztál') {
      additionalQuestions.classList.add('show');
    } else {
      additionalQuestions.classList.remove('show');
    }
  });
});

var radioButtons1 = document.querySelectorAll('input[type="radio"][name="Vacsorára hivatalos?"]');
var additionalQuestions1 = document.getElementById('dinner-requirement');

radioButtons1.forEach(function(radioButton1) {
  radioButton1.addEventListener('change', function() {
    if (this.value === 'A vacsorán is ott lesz') {
      additionalQuestions1.classList.add('show');
    } else {
      additionalQuestions1.classList.remove('show');
    }
  });
});


window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}
