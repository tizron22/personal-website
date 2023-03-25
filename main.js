const injectScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.addEventListener('load', resolve);
    script.addEventListener('error', (e) => reject(e.error));
    document.head.appendChild(script);
  });
};

const { ref, reactive, computed, toRefs, onMounted } = Vue;
const { useRouter, useRoute } = VueRouter;
const { defineStore, createPinia, storeToRefs } = Pinia;

const app = Vue.createApp();

const _layout = ['./src/layout/layout-view.js'];

const _views = ['./src/homeView.js'];

const _router = ['./src/routes/index.js'];

/**
 * @type {string[][]}
 */
const loader = [_layout, _views, _router];

const bootstrap = async () => {
  for (const item of loader) {
    try {
      await Promise.all(item.map(injectScript));
    } catch (err) {
      console.log(err);
    }
  };

  const pinia = createPinia();

  app.use(router);
  app.use(pinia);
  app.use(Quasar);
  app.mount('#app');
};

bootstrap();
