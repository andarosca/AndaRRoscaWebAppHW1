<!DOCTYPE html>
<head>
    <title>Sign Up</title>
    <link rel="stylesheet" href="signupinfopage.css">
    <script src="rememberinfo.js" defer></script>
</head>
<body>

    <form id="signupForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone" required>

        <label for="email">Email:</label>
        <input type="text" id="email" name="email" required>

        <label for="address">Address:</label>
        <input type="text" id="address" name="address" required>

        <label for="subject">Select Subject:</label>
        <select id="subject" name="subject">
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="english">English</option>
            <option value="history">History</option>
            <option value="art">Art</option>
            <option value="music">Music</option>
            <option value="sign language">Sign Language</option>
            <option value="computer 101">Computer 101 </option>
        </select>

        <label for="description">Description:</label>
        <textarea id="description" name="description" placeholder="please provide a description with your purpose for signing up"></textarea>

        <label for="role">Tutor or Student:</label>
        <select id="role" name="tutor_or_student">
            <option value="Student">Student</option>
            <option value="Tutor">Tutor</option>
        </select>

        <button type="submit">Sign Up</button>
    </form>
    
    <script>
        document.getElementById('signupForm').addEventListener('submit', signUp);

        function signUp(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const subject = document.getElementById('subject').value;
            const address = document.getElementById('address').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const description = document.getElementById('description').value;
            const role = document.getElementById('role').value;

            window.location.href = 'myprofile.html';
        }
    </script>

</body>
</html>
