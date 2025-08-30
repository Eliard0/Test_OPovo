<?php
require_once __DIR__ . '/../models/Course.php';

class CourseController {
    private $baseUrl;

    public function __construct() {
        $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http";
        $host = $_SERVER['HTTP_HOST'];
        $this->baseUrl = $protocol . "://" . $host . "/api/public/images/";
    }

    public function getAllCourses() {
        return [
            new Course(1, $this->baseUrl . "Foto_curso_1.jpg", "Curso de Gestão", "EXTENSÃO", "BEM-VIVER", "Educação Ambiental para um Presente Sustentável", "Por Fundação Demócrito Rocha"),
            new Course(2, $this->baseUrl . "Foto_curso_2.jpg", "Curso de Marketing Digital", "CURTA DURAÇÃO", "TECNOLOGIA E PROFISSÃO", "Como Implementar a Política Municipal de Educação Ambiental", "Por Daniel Pagliuca"),
            new Course(3, $this->baseUrl . "Foto_curso_3.jpg", "Curso de Programação", "CURTA DURAÇÃO", "BEM-VIVER", "Bullying: conhecer para combater", "Por Grecianny Carvalho"),
            new Course(4, $this->baseUrl . "Foto_curso_4.jpg", "Curso de Fotografia", "EXTENSÃO", "BEM-VIVER", "Gestão Fiscal Interfederativa", "Por Fundação Demócrito Rocha"),
        ];
    }
}
