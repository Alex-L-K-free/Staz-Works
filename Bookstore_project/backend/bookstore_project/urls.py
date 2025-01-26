# Путь: backend/bookstore_project/urls.py

# Назначение: Главный конфигурационный файл URL-маршрутов.
# Определяет корневые URL-маршруты проекта и подключает
# маршруты из отдельных приложений.

from django.contrib import admin
from django.urls import path, include
from books.views import home_view  # Добавим импорт нового представления

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home_view, name='home'),  # Главная страница
    path('api/', include('books.urls')),  # API endpoints
]
