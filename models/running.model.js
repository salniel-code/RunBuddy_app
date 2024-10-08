// Schema för användare
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var runSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },

      runLength: {
          type:Number,
          required: true
      },
      date: {
          type: Date,
          required:true
      }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Run", runSchema);
