const { VK, Keyboard } = require('vk-io');
const { HearManager } = require('@vk-io/hear');
const config = require('../config');
const db = require('./database/connection');

// Инициализация
const vk = new VK(config.vk);
const hearManager = new HearManager();

// Подключение к БД
db.connect(config.database).catch(console.error);

// Обработчики команд
hearManager.hear(/^меню$/i, async (context) => {
  await context.send({
    message: '📋 Главное меню:',
    keyboard: Keyboard.keyboard([
      [Keyboard.textButton({ label: '🛍️ Каталог', payload: { command: 'catalog' } })],
      [Keyboard.textButton({ label: '🛒 Корзина', payload: { command: 'cart' } })],
      [Keyboard.textButton({ label: 'ℹ️ Помощь', payload: { command: 'help' } })]
    ]).inline()
  });
});

// Запуск бота
vk.updates.on('message_new', hearManager.middleware);
vk.updates.startPolling();
