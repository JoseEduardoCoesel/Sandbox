document.getElementById('fetchButton').addEventListener('click', () => {
    fetch('/api/test')
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').textContent = data.message;
        })
        .catch(error => {
            document.getElementById('response').textContent = 'Error fetching data';
            console.error('Error:', error);
        });
});

