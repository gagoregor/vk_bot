const yookassa = require('yookassa');
const config = require('../../config');

const paymentClient = new yookassa({
  shopId: config.payment.yookassa_shop_id,
  secretKey: config.payment.yookassa_key
});

module.exports = {
  async createPayment(order) {
    const payment = await paymentClient.createPayment({
      amount: {
        value: order.total,
        currency: 'RUB'
      },
      payment_method_data: {
        type: 'bank_card'
      },
      confirmation: {
        type: 'redirect',
        return_url: config.payment.return_url
      },
      description: `Заказ #${order.id}`
    });
    
    return payment.confirmation.confirmation_url;
  }
};
