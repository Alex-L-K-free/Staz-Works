"""
Путь: backend/books/urls.py

Назначение: URL-маршруты приложения books.
Определяет все доступные эндпоинты API для
работы с книгами и связанными сущностями.
"""

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from .views import BookListView

# Создаем роутер
router = DefaultRouter()
router.register(r'books', views.BookViewSet, basename='book')
router.register(r'cart', views.CartViewSet, basename='cart')

urlpatterns = [
    # API Root
    path('', views.api_root, name='api-root'),
    
    # Включаем все URL'ы из роутера
    path('', include(router.urls)),
    
    # Аутентификация
    path('auth/register/', views.register_user, name='register'),
    path('auth/login/', views.login_user, name='login'),
    path('auth/logout/', views.logout_user, name='logout'),

    path('books/', BookListView.as_view(), name='book-list'),
] 