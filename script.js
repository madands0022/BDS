document.addEventListener('DOMContentLoaded', function() {
    const submitDonorInfoButton = document.getElementById('submit-donor-info');
    const donorForm = document.getElementById('donor-info-form');
    const message = document.getElementById('message');

    submitDonorInfoButton.addEventListener('click', function() {
        // Fetch data from the form
        const donorName = document.getElementById('donor-name').value;
        const bloodGroup = document.getElementById('blood-group').value;
        const donorAge = document.getElementById('donor-age').value;
        const donorGender = document.getElementById('donor-gender').value;
        const healthIssues = document.getElementById('health-issues').value;

        // You can send this data to the backend using AJAX or Fetch API

        // For simplicity, just display a success message
        message.textContent = `Donor Information submitted successfully:
                             Name: ${donorName},
                             Blood Group: ${bloodGroup},
                             Age: ${donorAge},
                             Gender: ${donorGender},
                             Major Health Issues: ${healthIssues}`;
    });
});
