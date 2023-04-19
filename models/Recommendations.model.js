const { Schema, model } = require("mongoose");

const recommendationsSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        whatsGood: {
            type: String,
        },
        picture: {
            type: String,
        },
        vibe: {
            type: String,
        },
        date: {
            type: Date,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    }
)
const Recommendations = model("Recommendations", recommendationsSchema);

module.exports = Recommendations;