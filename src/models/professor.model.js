const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const DataSchema = new mongoose.Schema(
  {
    nome_PRusuario: String,
    email_PRusuario: String,
    tipo_PRusuario: { type: Number, default: 1 },
    senha_PRusuario: String,
    foto_PRusuario: String, //{ type: Buffer },
  },
  {
    timestamps: true,
  }
);

DataSchema.pre("save", function (next) {
  if (!this.isModified("senha_usuario")) {
    return next();
  }
  this.senha_usuario = bcrypt.hashSync(this.senha_usuario, 10);
  next();
});

DataSchema.pre("findOneAndUpdate", function (next) {
  var password = this.getUpdate().senha_usuario + "";
  if (password.length < 55) {
    this.getUpdate().senha_usuario = bcrypt.hashSync(password, 10);
  }
  next();
});

DataSchema.methods.isCorrectPassword = function (password, callback) {
  bcrypt.compare(password, this.senha_usuario, function (err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
};

const professor = mongoose.model("Professor", DataSchema);
module.exports = professor;
