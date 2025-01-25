fetch('schoolsPage/schools.json')
    .then(response => response.json())
    .then(data => {
        //creates elements for ids from html
    const schoolSelect = document.getElementById('schoolSelect');
    const majorSelect = document.getElementById('majorSelect');
    const requirements = document.getElementById('requirements');

    //populate major dropdown based on the selected school
    schoolSelect.addEventListener('change', () => {
        const selectedSchool = schoolSelect.value;
        const school = data.find(s => s.name.toLowerCase().includes(selectedSchool.toLowerCase()));

        //clear previous major options
        majorSelect.innerHTML = '<option value =">Select a Major</option>';

        if (school)
        //populates major dropdown based on selected school
        {
            schools.major.forEach(major => {
                const option = document.createElement('option');
                option.value = major.major;
                option.textContent = major.major;
                majorSelect.appendChild(option);
                
            });
        }
    });
    majorSelect.addEventListener('change', () => {
        const selectedMajor = majorSelect.value;
        const selectedSchool = schoolSelect.value;
        const school = data.find(s => s.name.toLowerCase().includes(selectedSchool.toLowerCase()));
        const major = school?.majors.find(m => m.major === selectedMajor);


        if (major) {
            // Display transfer requirements
            requirements.innerHTML = `
            <h3>Transfer Requirements for ${selectedMajor}</h3>
            <p><strong>GPA Requirement:</strong> ${major.gpa_requirement}</p>
            <ul>
                ${major.transfer_requirements.map(req => `<li>${req}</li>`).join('')}
            </ul>
            `;
        }
    })
    })
    .catch(error => console.error('Error:', error));