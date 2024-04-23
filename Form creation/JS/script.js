// Sample user data (in a real application, this should be stored securely, e.g., in a database)
const users = [
    { username: "Sudeepmr", email: "sudeep123@gmail.com", password: "sudeep123" },
    { username: "admin", email: "admin123@gmail.com.com", password: "admin123" }
];

// Function to handle registration
function registerUser(username, email, password) {
    // Check if the username or email is already taken
    const isDuplicate = users.some(user => user.username === username || user.email === email);
    if (isDuplicate) {
        alert("Username or email already registered.");
        return;
    }

    // Add the new user to the list (in a real application, this should be stored securely)
    users.push({ username, email, password });
    alert("Registration successful. Please login.");
    window.location.href = "./login.html"; // Redirect to login page
}

// Function to handle login
function loginUser(email, password) {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        
        alert("Invalid email or password.");
        // Redirect or show success message
    } else {
        alert("Login successful.");
        window.location.href = "./home.html"; 
    }
}
