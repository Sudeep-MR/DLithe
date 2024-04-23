
const users = [
    { username: "Sudeepmr", email: "sudeep123@gmail.com", password: "sudeep123" },
    { username: "admin", email: "admin123@gmail.com.com", password: "admin123" }
];


function registerUser(username, email, password) {
   
    const isDuplicate = users.some(user => user.username === username || user.email === email);
    if (isDuplicate) {
        alert("Username or email already registered.");
        return;
    }

    
    users.push({ username, email, password });
    alert("Registration successful. Please login.");
    window.location.href = "./login.html";
}


function loginUser(email, password) {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        
        alert("Invalid email or password.");
        
    } else {
        alert("Login successful.");
        window.location.href = "./home.html"; 
    }
}
