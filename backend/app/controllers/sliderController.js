import sliderModel from "../models/sliderModel.js";

class sliderController {
    // ALL DATA
    static getAll = async (req, res) => {
        try {
            const result = await sliderModel.find();

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

    // SINGLE DATA
    static sglPost = async (req, res) => {
        try {
            const result = await sliderModel.findById(req.params.id, req.body);
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

    // CREATE DATA
    static crtPost = async (req, res) => {
        try {
            const { title, subtitle, desc, img, video } = req.body
            const data = await sliderModel({
                title,
                subtitle,
                desc,
                img,
                video
            });
            const result = data.save();

            if (req.body.title) {
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

    // UPDATE DATA
    static udPost = async (req, res) => {
        try {
            const result = await sliderModel.findByIdAndUpdate(req.params.id, req.body);
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

    // DELETE DATA
    static dtPost = async (req, res) => {
        try {
            const result = await sliderModel.findByIdAndDelete(req.params.id, req.body);
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

export default sliderController;