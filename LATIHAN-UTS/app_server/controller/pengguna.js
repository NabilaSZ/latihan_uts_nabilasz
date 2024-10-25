const mongoose = require("mongoose");
const Mahasiswa = mongoose.model("pengguna");

//untuk menghandle request get all pengguna
const index = (req, res, next) => {
    pengguna.find({}, { __v: 0 })
      .then((mhs) => {
        const responseMessage = {
            code: 200,
            success: true,
            message: "Successfull",
            data: mhs
        };
        res.status(200).json(responseMessage);
      })
      .catch((e) => {
        const responseMessage = {
            code: 400,
            success: false,
            message: "Bad request"
        };
        res.status(400).json(responseMessage);
      });
};

//untuk menghandle request insert pengguna
const insert = (req, res, next) => {
    const pgn = new Mahasiswa({
      nama: req.body.nama,
      email: req.body.email,
      pasword: req.body.pasword,
      alamat: req.body.alamat,
      tanggal_daftar: req.body.tanggal_daftar
    });
  
    pgn
      .save()
      .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: result
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: true,
                message: "Bad request"
            };
            res.status(400).json(responseMessage);
        });
};

module.exports = {
    index, insert,
}

