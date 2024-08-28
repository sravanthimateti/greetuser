
// greet.js

function greetUser() {
    // Get the current date and time
    const now = new Date();
    
    // Format the time as a string
    const timeString = now.toLocaleTimeString();
    
    // Create a greeting message
    const greeting = `Hello, user! The current time is ${timeString}.`;
    
    // Display the greeting message
    console.log(greeting);
    
    // Return the greeting and time for further use if needed
    return {
        message: greeting,
        time: now
    };
}

// Call the function to greet the user
greetUser();
