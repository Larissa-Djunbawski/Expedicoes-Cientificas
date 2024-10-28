import Explorer from "../models/explorerModel.js";

const store = async (req, res) => {
  try {
    const explorer = await Explorer.create(req.body);
    return res.status(201).json(explorer);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const index = async (req, res) => {
  try {
    const content = await Explorer.find().exec();
    return res.status(200).json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const show = async (req, res) => {
  try {
    const content = await Explorer.findById(req.params.id)
      .populate("speciesFound")
      .exec();

    res.status(200).json(content)
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const update = async (req, res) => {
  try {
  const content = await Explorer.findByIdAndUpdate(req.params.id, req.body, {new: true}).exec();
    return res.status(200).json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const destroy = async (req, res) => {
  try {
    await Explorer.findByIdAndDelete(req.params.id).exec();
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {
  store,
  index,
  show,
  update,
  destroy,
};