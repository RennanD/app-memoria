import { model, Schema } from 'mongoose';

const PreferenceSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    subcategories: [
      {
        type: String,
      },
    ],
    deleted_at: Date,
  },
  {
    timestamps: true,
  },
);

export default model('Preference', PreferenceSchema);
