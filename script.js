document.addEventListener("DOMContentLoaded", function() {
    let floorButtons = document.querySelectorAll(".floor-button");

    // Hide floor buttons initially
    floorButtons.forEach(button => {
        button.style.opacity = "0";
        button.style.transform = "scale(0)";
    });

    // Animate floors appearing smoothly
    setTimeout(() => {
        floorButtons.forEach((button, index) => {
            setTimeout(() => {
                button.style.opacity = "1";
                button.style.transform = "scale(1)";
                button.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out";
            }, index * 200); // Delay each button slightly for smooth effect
        });
    }, 300);
});

function goBacki() {
    console.log("Navigating to index.html");
    window.location.replace("index.html"); // Change to the correct filename if needed
}

// Function to go back
function goBack() {
    window.history.back();
}

// Start Floor Animation Automatically
function startFloorAnimation() {
    document.querySelectorAll(".floor-btn").forEach((btn, index) => {
        setTimeout(() => {
            btn.style.opacity = "1";
            btn.style.transform = "scale(1)";
        }, index * 200); // Delayed animation
    });
}

// Function to navigate to the ground floor layout
function selectFloor(page) {
    window.location.href = page;
}