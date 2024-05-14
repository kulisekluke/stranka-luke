document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const input1Value = document.getElementById("jmenoPrezdivka").value;
    const input2Value = document.getElementById("coBySeDaloZlepsit").value;

    // Validate input (you can add more validation logic here)

    // Send data to the server using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "save_text.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(`jmenoPrezdivka=${encodeURIComponent(input1Value)}&coBySeDaloZlepsit=${encodeURIComponent(input2Value)}`);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("úspěšně odesláno!");
        }
    };
});