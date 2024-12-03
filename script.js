document.addEventListener("DOMContentLoaded", () => {
  const noButton = document.getElementById("no-button");
  const yesButton = document.getElementById("yes-button");

  // Add event listener for the "No" button
  noButton.addEventListener("mouseover", () => {
    // Generate random positions for the button
    const randomX = Math.random() * 80; // Percentage for X position
    const randomY = Math.random() * 80; // Percentage for Y position

    // Update button position
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}%`;
    noButton.style.top = `${randomY}%`;
  });

  // Add event listener for the "Yes" button
  yesButton.addEventListener("click", () => {
    // Redirect to a "Thank You" page
    window.location.href = "thankyou.html";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const spinButton = document.getElementById("spin-button");
  const outlet = document.querySelector(".outlet");
  const balls = document.querySelectorAll(".ball");
  const message = document.getElementById("voucher-message");

  // Colors for the balls
  const ballColors = ["#ffcc99", "#ff66b2", "#ff99cc", "#ccff99", "#66ccff"];

  // Set the star emoji on the spin button (remove text and replace with emoji)
  spinButton.textContent = "⭐"; // Set the star emoji
  spinButton.style.fontSize = "24px"; // Ensure the emoji is large enough

  spinButton.addEventListener("click", () => {
    // Start the spinning animation (turner spin) for the button
    spinButton.style.transform = "rotate(720deg)";
    spinButton.style.transition = "transform 2s ease";

    // Add rotation animation for the star inside the button
    spinButton.style.animation = "spinStar 2s linear forwards"; // Apply star rotation

    // Show the ball drop after a delay
    setTimeout(() => {
      outlet.style.display = "block";
      balls.forEach((ball, index) => {
        // Randomize the ball colors
        const randomColor = ballColors[Math.floor(Math.random() * ballColors.length)];
        ball.style.backgroundColor = randomColor;

        ball.style.animation = `drop 1s ease forwards ${index * 0.5}s`; // Ball drop animation
      });
    }, 2000); // Wait for the spinning to finish before ball drop

    // Show the message after ball drop animation
    setTimeout(() => {
      message.style.display = "block";
    }, 4000); // Adjust timing after animation ends
  });
});

// Ball drop animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes drop {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(200px);
    opacity: 0;
  }
}

@keyframes spinStar {
  0% {
    transform: rotate(0deg); /* Start from 0 degrees */
  }
  100% {
    transform: rotate(360deg); /* Rotate 360 degrees */
  }
}
`;
document.head.appendChild(style);
