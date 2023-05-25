// Function to handle form submission
function submitForm(event) {
  event.preventDefault();

  // Get the values from the sliders
  const file1Rating = document.getElementById('file1-rating').value;
  const file1Clarity = document.getElementById('file1-clarity').value;
  const file1Loudness = document.getElementById('file1-loudness').value;

  const file2Rating = document.getElementById('file2-rating').value;
  const file2Clarity = document.getElementById('file2-clarity').value;
  const file2Loudness = document.getElementById('file2-loudness').value;

  // Create the form data to send
  const formData = new FormData();
  formData.append('file1Rating', file1Rating);
  formData.append('file1Clarity', file1Clarity);
  formData.append('file1Loudness', file1Loudness);
  formData.append('file2Rating', file2Rating);
  formData.append('file2Clarity', file2Clarity);
  formData.append('file2Loudness', file2Loudness);

  // Send the form data to the backend script using AJAX
  fetch('backend-script.php', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      console.log('Answers saved successfully.');
    } else {
      console.log('Failed to save answers.');
    }
  })
  .catch(error => {
    console.log('An error occurred:', error);
  });
}

// Attach the form submission event listener to the submit button
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', submitForm);
