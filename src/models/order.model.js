
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    orderItems: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            image: {
                type: String,
                required: true
            }
        }
    ],
    shippingAddress: {
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        postalCode: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },
    paymentMethod: {
        type: String,
        required: true
    },
    paymentResult: {
        id: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        update_time: {
            type: String,
            required: true
        },
        email_address: {
            type: String,
            required: true
        }
    },
    itemsPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    discount: {
        type: Number,
        required: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    status: {
        type: String,
        required: true,
        default: 'processing',
        enum: ['processing', 'shipped', 'delivered', 'cancelled', 'returned', 'refunded']
    },
    deliveredAt: {
        type: Date
    },

}, {
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);
export default Order