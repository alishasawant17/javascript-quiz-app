const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");

  // Add this to your highscores.js file

// Function to clear all high scores
function clearHighScores() {
    // Ask for confirmation before clearing
    if (confirm('Are you sure you want to clear all high scores? This cannot be undone.')) {
        // Clear the high scores from localStorage
        localStorage.removeItem('highScores');
        
        // Reload the page to show empty list
        window.location.reload();
    }
}

// Add the clear button to the page
window.addEventListener('DOMContentLoaded', () => {
    // Find the container or create button after the list
    const container = document.querySelector('.container');
    const highScoresList = document.getElementById('highScoresList');
    
    // Create clear button
    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'Clear All Scores';
    clearBtn.className = 'btn btn-danger';
    clearBtn.onclick = clearHighScores;
    
    // Insert button after the high scores list
    if (highScoresList && highScoresList.parentElement) {
        highScoresList.parentElement.appendChild(clearBtn);
    }
});