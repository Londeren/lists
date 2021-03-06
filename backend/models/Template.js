import mongoose from 'mongoose';
import {v4 as uniqueId}  from 'node-uuid';
import Item from './Item';
import User from './User';

const templateSchema = mongoose.Schema({
  id: {type: String, default: uniqueId, required: true, unique: true},
  name: {type: String, required: true},
  user: {type: String, ref: 'User', required: true},
  items: [Item.schema]
});

templateSchema.set('toJSON', {
  transform: function(doc, ret) {
    delete ret._id;
    delete ret.__v;
    delete ret.user;

    return ret;
  }
});

const Template = mongoose.model('Template', templateSchema);

export default Template;