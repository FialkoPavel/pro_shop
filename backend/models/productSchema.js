import mongoose from 'mongoose';
const { Schema } = mongoose;

const reviewSchema = mongoose.Schema({
    name:  { type: String, required: true },
    ratting:  { type: Number, required: true },
    comment:  { type: String, required: true },

}, {
    timestamps: true
})

const productSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  name:  { type: String, required: true },
  image:  { type: String, required: true },
  brand:  { type: String, required: true },
  category:  { type: String, required: true },
  description:  { type: String, required: true },
  reviews: [reviewSchema],
  rating:  { type: Number, required: true, default: 0 },
  numReviews:  { type: Number, required: true },

  price:  { type: Number, required: true, default: 0  },
  countOfStock:  { type: Number, required: true, default: 0  },

},{
    timestamps: true
});

const Product = mongoose.model('Product', productSchema)

export default Product