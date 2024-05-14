<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $input1 = $_POST["jmenoPrezdivka"];
    $input2 = $_POST["coBySeDaloZlepsit"];

    // Create a new text file and write the input data
    $filename = "submissions/" . $input1 . "_feedback.txt"; // Unique filename
    $fileContent = "jmeno/prezdivka : $input1\nnavrh : $input2";

    file_put_contents($filename, $fileContent);

    echo "úspěšně odesláno na server!"; // Send a response back to the client
}
?>