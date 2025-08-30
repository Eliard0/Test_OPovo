export default class Course {
    constructor(id, imageUrl, imageAlt, titleOne, titleTwo, description, additionalInfo) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.imageAlt = imageAlt;
        this.titleOne = titleOne;
        this.titleTwo = titleTwo;
        this.description = description;
        this.additionalInfo = additionalInfo;
    }
}
