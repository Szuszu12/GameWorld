<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "formularze";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Połączenie nieudane: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $imie = $_POST["imie"];
    $numer_telefonu = $_POST["numer_telefonu"];
    $sprawa = $_POST["sprawa"];
    $komentarz = $_POST["komentarz"];

    $sql = "INSERT INTO kontakt (email, imie, numer_telefonu, sprawa, komentarz)
            VALUES ('$email', '$imie', '$numer_telefonu', '$sprawa', '$komentarz')";

    if ($conn->query($sql) === TRUE) {
        echo "Formularz został pomyślnie przesłany.";
    } else {
        echo "Błąd podczas zapisywania danych: " . $conn->error;
    }
}

$conn->close();
?>
