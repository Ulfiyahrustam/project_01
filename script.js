document.addEventListener("DOMContentLoaded", function() {
    // Simulate a loading delay
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 3000); // 3 seconds delay
});
