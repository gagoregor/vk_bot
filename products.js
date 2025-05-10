const { Keyboard } = require('vk-io');
const Product = require('../database/models/Product');

module.exports = {
  async showCatalog(context) {
    const products = await Product.findAll();
    
    const keyboard = Keyboard.builder()
      .inline();
    
    products.forEach(product => {
      keyboard.textButton({
        label: `${product.name} - ${product.price}₽`,
        payload: { productId: product.id }
      });
      keyboard.row();
    });
    
    await context.send({
      message: '🏪 Наши товары:',
      keyboard: keyboard
    });
  },

  async showProduct(context, productId) {
    const product = await Product.findByPk(productId);
    
    await context.send({
      message: `
        🏷️ ${product.name}
        💵 Цена: ${product.price}₽
        📦 Остаток: ${product.stock} шт.
        📝 ${product.description}
      `,
      keyboard: Keyboard.keyboard([
        [Keyboard.textButton({ label: '➕ В корзину', payload: { action: 'add_to_cart', productId } })],
        [Keyboard.textButton({ label: '🔙 Назад', payload: { command: 'catalog' } })]
      ]).inline()
    });
  }
};
