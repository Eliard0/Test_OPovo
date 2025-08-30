<?php

class Course {
    public $id;
    public $imageUrl;
    public $imageAlt;
    public $title1;
    public $title2;
    public $description;
    public $additionalInfo;

    public function __construct($id, $imageUrl, $imageAlt, $title1, $title2, $description, $additionalInfo) {
        $this->id = $id;
        $this->imageUrl = $imageUrl;
        $this->imageAlt = $imageAlt;
        $this->title1 = $title1;
        $this->title2 = $title2;
        $this->description = $description;
        $this->additionalInfo = $additionalInfo;
    }
}
