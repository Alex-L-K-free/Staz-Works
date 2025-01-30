# backend/books/urls.py
# URL-маршруты приложения books.
#определяет все доступные эндпоинты API для работы с книгами и корзиной,
#а также предоставляет маршруты для аутентификации пользователей

#Импорты
from django.urls import path, include               #определения маршрутов и включения других маршрутов соответственно
from rest_framework.routers import DefaultRouter    #для автоматического создания маршрутов для ViewSet'ов
from . import views                                 #все представления (views) для этого приложения
from .views import BookListView                     #конкретное представление, которое будет использоваться для отображения списка книг

# Создание роутера
router = DefaultRouter()                                                #создает роутер, который автоматически генерирует URL-адреса для ViewSet'ов
router.register(r'books', views.BookViewSet, basename='book')    #регистрирует ViewSet для книг. Это означает, что будут доступны стандартные CRUD-операции (создание, чтение, обновление, удаление) для книг
router.register(r'cart', views.CartViewSet, basename='cart')     #регистрирует ViewSet для корзины, что позволяет управлять элементами корзины

#URL-паттерны
urlpatterns = [
    # API Root
    path('', views.api_root, name='api-root'),      #корневой URL API, который, возвращает список доступных эндпоинтов
    
    # Включаем все URL'ы из роутера
    path('', include(router.urls)),                 #включает все URL-адреса, сгенерированные роутером (для книг и корзины)
    
    # Аутентификация
    path('auth/register/', views.register_user, name='register'),   #маршрут для регистрации пользователя
    path('auth/login/', views.login_user, name='login'),            #маршрут для входа пользователя
    path('auth/logout/', views.logout_user, name='logout'),         #маршрут для выхода пользователя

    path('books/', BookListView.as_view(), name='book-list'),       #маршрут для отображения списка книг с использованием BookListView
] 