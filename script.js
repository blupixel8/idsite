function previewImage(event) {
    const image = document.getElementById('previewImage');
    image.src = URL.createObjectURL(event.target.files[0]);
}

document.getElementById('generateButton').addEventListener('click', function() {
    // Get input values
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let nationality = document.getElementById('nationality').value;

    // Generate fake ID
    let fakeID = generateFakeID(firstName, lastName, nationality);

    // Display fake ID
    document.getElementById('fakeID').innerHTML = fakeID;
});

function generateFakeID(firstName, lastName, nationality) {
    // Generate a random ID with some fake information
    let idNumber = Math.floor(Math.random() * 1000000000); // Random 9-digit number
    let birthYear = 1950 + Math.floor(Math.random() * 50); // Random birth year between 1950 and 1999

    // Format the fake ID
    let fakeID = `
        <h2>Fake ID</h2>
        <div>ID Number: ${idNumber}</div>
        <div>Name: ${firstName} ${lastName}</div>
        <div>Nationality: ${nationality}</div>
        <div>Birth Year: ${birthYear}</div>
    `;

    return fakeID;
}