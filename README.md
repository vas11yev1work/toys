# Toys

Web-приложение с интерактивными психологическими онлайн-тестами для детей разных возрастов

Автор: [Вержицкий Кирилл](https://vk.com/aniki)

Стек: 
* 💥 [Vue3](https://v3.vuejs.org/) 
* ❤️ [Nuxt3](https://v3.nuxtjs.org/) 
* 🔥 [Firebase](https://firebase.google.com/)
* 🐶 [Pug](https://pugjs.org/)
* 🚀 [TypeScript](https://www.typescriptlang.org/)

## Setup

Установите зависимости

```bash
npm install
```

## Development

Запустите сервер разработки на http://localhost:3000

```bash
npm run dev
```

## Production & Deploy

Сборка приложения под firebase:

```bash
NITRO_PRESET=firebase npm run build
```

Деплой:

```bash
firebase deploy
```

Документация [«How to deploy Nuxt to Firebase Hosting»](https://v3.nuxtjs.org/docs/deployment/firebase/)
