
fetch('public/json/schools.json')
    .then(response => response.json())
    .then(data => {
        //creates elements for ids from html
    const schoolSelect = document.getElementById('schoolSelect');
    const majorSelect = document.getElementById('majorSelect');
    const requirements = document.getElementById('requirements');


    //clear school dropdown
    schoolSelect.innerHTML = '<option value="">Select a School</option>';
    //populate major dropdown based on the selected school
    data.forEach(school => {
        const option = document.createElement('option');
        option.value = school.name;
        option.textContent = school.name;
        schoolSelect.appendChild(option);
    });

    // Populate major dropdown based on selected school
    schoolSelect.addEventListener('change', () => {
        const selectedSchool = schoolSelect.value;
        const school = data.find(s => s.name === selectedSchool);

        // Clear previous major options
        majorSelect.innerHTML = '<option value="">Select a Major</option>';

        requirements.innerHTML = '';

        if (school) {
            // Populate major options from majors array
            school.majors.forEach(major => {
                const option = document.createElement('option');
                option.value = major;
                option.textContent = major;
                majorSelect.appendChild(option);
            });
        }
    });

    // Display transfer requirements based on selected major
    majorSelect.addEventListener('change', () => {
        const selectedMajor = majorSelect.value;
        const selectedSchool = schoolSelect.value;
        const school = data.find(s => s.name === selectedSchool);

        if (school && selectedMajor) {
            // Display transfer requirements for the selected major
            requirements.innerHTML = `
                <h3>Transfer Requirements for ${selectedMajor}</h3>
                <p><strong>GPA Requirement:</strong> ${school.GPA_requirements}</p>
                <ul>
                    ${school.transfer_requirements.map(req => `<li>${req}</li>`).join('')}
                </ul>
            `;
        }
    });
})
.catch(error => console.error('Error:', error));