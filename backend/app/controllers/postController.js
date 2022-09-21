import postModel from "../models/PostModel.js";

class postController {
    static getAll = async (req, res) => {
        try {
            const result = await postModel.find();

            if (result.length > 0) {
                res.status(200).send({
                    status: 'success',
                    message: "All Data Show!!!",
                    data: result
                });
            } else {
                res.status(404).send({
                    status: 'failed',
                    message: "Data not found...!"
                });
            }
        } catch (error) {
            console.log('getAll Error - ', error);
        }
    }

    static sglPost = async (req, res) => {
        try {
            const result = await postModel.findById(req.params.id, req.body);
            if (result) {
                res.status(200).send({
                    status: 'success',
                    message: "Single Data Show!!!",
                    data: result
                });
            } else {
                res.status(404).send({
                    status: 'failed',
                    message: "Data not found...!"
                });
            }
        } catch (error) {
            console.log('Single Data - ', error);
        }
    }

    static crtPost = async (req, res) => {
        try {
            const { title, desc, img, category } = req.body
            const data = await postModel({
                title,
                desc,
                img,
                category
            });
            const result = data.save();

            if (req.body.title && req.body.img) {
                res.status(201).send({
                    status: 'success',
                    message: "Create New Data successful!!!",
                    data: result
                });
            } else {
                res.status(404).send({
                    status: 'failed',
                    message: "Data not Created...!"
                });
            }
        } catch (error) {
            console.log('Create Data - ', error);
        }
    }

    static udPost = async (req, res) => {
        try {
            const result = await postModel.findByIdAndUpdate(req.params.id, req.body);
            if (result) {
                res.status(200).send({
                    status: 'success',
                    message: "Data Update Successful!!!",
                    data: result
                });
            } else {
                res.status(404).send({
                    status: 'failed',
                    message: "Data not Update...!"
                });
            }
        } catch (error) {
            console.log('Update Data - ', error);
        }
    }

    static dtPost = async (req, res) => {
        try {
            const result = await postModel.findByIdAndDelete(req.params.id, req.body);
            if (result) {
                res.status(200).send({
                    status: 'success',
                    message: "Delete data Successful!!!",
                    data: result
                });
            } else {
                res.status(404).send({
                    status: 'failed',
                    message: "Data not Delete...!"
                });
            }
        } catch (error) {
            console.log('Delete Data - ', error);
        }
    }
}

export default postController;