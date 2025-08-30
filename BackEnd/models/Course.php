<?php

class Course {
    public $id;
    public $imageUrl;
    public $imageAlt;
    public $titleOne;
    public $titleTwo;
    public $description;
    public $additionalInfo;

    public function __construct($id, $imageUrl, $imageAlt, $titleOne, $titleTwo, $description, $additionalInfo) {
        $this->id = $id;
        $this->imageUrl = $imageUrl;
        $this->imageAlt = $imageAlt;
        $this->titleOne = $titleOne;
        $this->titleTwo = $titleTwo;
        $this->description = $description;
        $this->additionalInfo = $additionalInfo;
    }
}
