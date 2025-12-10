import mongoose, { Types, Schema } from "mongoose";

const eventoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    schedule: { type: String, required: true, trim: true },
    address: { type: String, trim: true }, 
    participants: [{ type: Schema.Types.ObjectId, ref: 'Usuario' }]
  },
  { timestamps: false, versionKey: false }
);

export interface IEvento {
  _id: Types.ObjectId;
  name: string;
  schedule: string;
  address?: string;
  participants?: Types.ObjectId[];
}

const Evento = mongoose.model('Evento', eventoSchema);
export default Evento;
