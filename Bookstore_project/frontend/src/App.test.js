/**
 * Путь: frontend/src/App.test.js
 * 
 * Назначение: Тесты для компонента App.
 * Содержит набор тестов для проверки корректности
 * рендеринга и функционирования главного компонента
 * приложения. Использует React Testing Library.
 */

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
