
class VideoDTO {
    constructor(id, link, title, description, thumbnails) {
        this._id = id;
        this._link = link;
        this._title = title;
        this._description = description;
        this._thumbnails = thumbnails;
    }

    get id() {
        return this._id;
    }

    get link() {
        return this._link;
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