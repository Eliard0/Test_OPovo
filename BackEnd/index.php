<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/controllers/CourseController.php';

$controller = new CourseController();
$courses = $controller->getAllCourses();

echo json_encode($courses, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
