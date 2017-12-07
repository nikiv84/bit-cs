
class VideoDTO {
    constructor(id, title, description, thumbnails) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._thumbnails = thumbnails;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get thumbnails() {
        return this._thumbnails;
    }
}

export default VideoDTO;