
    document.getElementById('userForm').addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const number = document.getElementById('number').value;
      const pictures = document.getElementById('pictures').files;

      if (pictures.length === 0) {
        alert("Please upload at least one picture.");
        return;
      }

      let result = `<h3>Submitted Info</h3>`;
      result += `<p><strong>Name:</strong> ${name}</p>`;
      result += `<p><strong>Phone Number:</strong> ${number}</p>`;
      result += `<p><strong>Uploaded ${pictures.length} picture(s):</strong></p><ul>`;
      for (let i = 0; i < pictures.length; i++) {
        result += `<li>${pictures[i].name}</li>`;
      }
      result += `</ul>`;

      document.getElementById('result').innerHTML = result;
    });
