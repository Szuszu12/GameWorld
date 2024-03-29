<?php
// Dane do połączenia z bazą danych
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "formularze";

// Połączenie z bazą danych
$conn = new mysqli($servername, $username, $password, $dbname);

// Sprawdzenie połączenia
if ($conn->connect_error) {
    die("Połączenie nieudane: " . $conn->connect_error);
}

// Sprawdzenie, czy formularz został wysłany
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pobranie danych z formularza
    $email = $_POST["email"];
    $imie = $_POST["imie"];
    $numer_telefonu = $_POST["numer_telefonu"];
    $sprawa = $_POST["sprawa"];
    $komentarz = $_POST["komentarz"];

    // Wstawienie danych do tabeli "kontakt"
    $sql = "INSERT INTO kontakt (email, imie, numer_telefonu, sprawa, komentarz)
            VALUES ('$email', '$imie', '$numer_telefonu', '$sprawa', '$komentarz')";

    if ($conn->query($sql) === TRUE) {
        echo "Formularz został pomyślnie przesłany.";
    } else {
        echo "Błąd podczas zapisywania danych: " . $conn->error;
    }
}

// Zamknięcie połączenia z bazą danych
$conn->close();
?>
