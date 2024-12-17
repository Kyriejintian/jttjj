//Iveron(HouYanchao)
document.getElementById('loginForm').addEventListener('submit', function(event) {  
    event.preventDefault(); // Prevent form submission to refresh the page  
  
    var username = document.getElementById('username').value;  
    var password = document.getElementById('password').value;  
  
    // Assuming the cookie is set in the format "username=admin; password=password"  
    var cookies = document.cookie.split(";");  
    var storedUsername = null;  
    var storedPassword = null;  



    function setLoginCookie() {  
        // Set the cookie with a one-year expiration date  
        var date = new Date();  
        date.setTime(date.getTime() + (2 * 60 * 1000)); //exprie in 2 minute
        var expires = "; expires=" + date.toUTCString();  
        document.cookie = "login=yes" + expires + "; path=/";  
    }  
      
    // Call the function to set the cookie  
    

  
    for (var i = 0; i < cookies.length; i++) {  
        var cookie = cookies[i].trim();  
        if (cookie.startsWith("username=")) {  
            storedUsername = cookie.split("=")[1];  
        }  
        if (cookie.startsWith("password=")) {  
            storedPassword = cookie.split("=")[1];  
        }  
    }  
  
    if (username === storedUsername && password === storedPassword) {  
        // Redirect to product page  
        window.location.href = '22.html'; // Replace with your actual product page URL  
        setLoginCookie();
    } else {  
        // Show error or redirect to login page again (in this case, just showing an alert)  
        alert('Invalid username or password!');  
        document.cookie = "login=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";  
    }  
});