<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portfolio";
$port = 3307;

$response = ['status' => 'error', 'message' => 'Something went wrong. Please try again.'];

try {
    $conn = new mysqli($servername, $username, $password, $dbname, $port);
    if ($conn->connect_error) {
        throw new Exception('Database connection failed.');
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = trim(htmlspecialchars($_POST["name"] ?? ''));
        $email = trim(htmlspecialchars($_POST["email"] ?? ''));
        $message = trim(htmlspecialchars($_POST["message"] ?? ''));

        if ($name && filter_var($email, FILTER_VALIDATE_EMAIL) && $message) {
            $stmt = $conn->prepare("INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)");
            $stmt->bind_param("sss", $name, $email, $message);
            if ($stmt->execute()) {
                $response = ['status' => 'success', 'message' => "Thank you, $name. I will get back to you soon."];
            }
            $stmt->close();
        } else {
            $response['message'] = 'Invalid input provided.';
        }
    }
    $conn->close();
} catch (Exception $e) {
    $response['message'] = $e->getMessage();
}

echo json_encode($response);
