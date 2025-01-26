/**
 * Путь: frontend/src/reportWebVitals.js
 * 
 * Назначение: Метрики производительности.
 * Отвечает за сбор и отправку метрик производительности
 * приложения (CLS, FID, LCP и др.).
 */

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
