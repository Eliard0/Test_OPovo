<?php
require_once __DIR__ . '/../models/Course.php';

class CourseController {
    private $baseUrl;
    public $imgOne = "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    public $imgTwo = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    public $imgThree = "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    public $imgFour = "https://plus.unsplash.com/premium_photo-1682284352941-58dceb6cd601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


    public function __construct() {
        $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http";
        $host = $_SERVER['HTTP_HOST'];
        $this->baseUrl = $protocol . "://" . $host . "/public/images/";
    }

    public function getAllCourses() {
        return [
                new Course(1, $this->imgOne, "Curso de Gestão", "EXTENSÃO", "BEM-VIVER", "Educação Ambiental para um Presente Sustentável", "Por Fundação Demócrito Rocha"),
                new Course(2, $this->imgTwo, "Curso de Marketing Digital", "CURTA DURAÇÃO", "TECNOLOGIA E PROFISSÃO", "Como Implementar a Política Municipal de Educação Ambiental", "Por Daniel Pagliuca"),
                new Course(3, $this->imgThree, "Curso de Programação", "CURTA DURAÇÃO", "BEM-VIVER", "Bullying: conhecer para combater", "Por Grecianny Carvalho"),
                new Course(4, $this->imgFour, "Curso de Fotografia", "EXTENSÃO", "BEM-VIVER", "Gestão Fiscal Interfederativa", "Por Fundação Demócrito Rocha"),
        ];
    }
}
