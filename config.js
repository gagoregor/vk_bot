module.exports = {
  vk: {
    token: process.env.VK_TOKEN || 'ВАШ_ТОКЕН',
    groupId: 123456789, // ID вашей группы VK
    confirmation: 'ваш_код_подтверждения', // Для Callback API
    secret: 'ваш_секретный_ключ'
  },
  database: {
    host: 'localhost',
    user: 'shop_user',
    password: 'secure_password',
    database: 'vk_shop_db'
  },
  payment: {
    yookassa_key: 'live_ваш_API_ключ',
    return_url: 'https://ваш-сайт.ru/thanks'
  }
};
