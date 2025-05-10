const Order = require('../database/models/Order');

module.exports = {
  async createOrder(userId, items) {
    const order = await Order.create({
      userId,
      status: 'pending',
      items: JSON.stringify(items),
      total: items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    });
    
    return order;
  },

  async getOrderStatus(orderId) {
    const order = await Order.findByPk(orderId);
    return order.status;
  }
};
