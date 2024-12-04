// Grab the form, input, and story list elements
const form = document.getElementById("storyForm");
const storyInput = document.getElementById("storyInput");
const storyList = document.getElementById("storyList");

// Listen for form submission
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the page from refreshing
    
    // Get the user's input
    const storyText = storyInput.value.trim();
    
    // Check if the input is not empty
    if (storyText !== "") {
        // Create a new story element
        const storyBox = document.createElement("div");
        storyBox.className = "story-box";
        storyBox.textContent = storyText;
        
        // Add the new story to the list
        storyList.appendChild(storyBox);
        
        // Clear the input box
        storyInput.value = "";
    } else {
        alert("Please write something before submitting!");
    }
});