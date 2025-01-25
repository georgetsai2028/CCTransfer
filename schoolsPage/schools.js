fetch('schoolsPage/schools.json')
    .then(response => response.json())
    .then(data => {
    const schoolContainer = document.getElementById('school-results');
    data.forEach(school => {
        const schoolCard = document.createElement('div');
        schoolCard.classList.add('school-card');
        schoolCard.innerHTML = `
            <h2>${school.name}</h2>
            <p>Location: ${school.location}</p>
            <p>GPA Requirements: ${school.GPA_requirements}</p>
            <p>Transfer Requirements: ${school.transfer_requirements.join(', ')}</p>
            <a href="${school.website}" target="_blank">Visit Website</a>
            `;
        schoolContainer.appendChild(schoolCard);
    });
    })
    .catch(error => console.error('Error:', error));