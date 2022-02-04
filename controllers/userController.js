const fs = require("fs");

exports.getUser = (req, res) => {
  console.log(req.params);

  const id = req.params.id * 1;
  if (id > tours.length) {
    return res.status(404).json({ status: "fail", message: "Invalid Id" });
  }
  const tour = tours.find((tour) => tour.id === id);

  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
};

exports.getAllUsers = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this rout is not defined",
  });
};

exports.createUser = (req, res) => {
  console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({ status: "success", data: { tours: newTour } });
    }
  );
};

exports.updateUser = (req, res) => {
  res.status(200).json({ status: "success", data: { tour: "<updated>" } });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id * 1;
  if (id > tours.length) {
    return res.status(404).json({ status: "fail", message: "Invalid Id" });
  }
  const tour = tours.find((tour) => tour.id === id);

  res.status(204).json({ status: "success", data: { tour: null } });
};
