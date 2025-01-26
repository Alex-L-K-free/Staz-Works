"""
Путь: backend/books/admin.py

Назначение: Настройки админ-панели Django.
Определяет, как модели приложения будут
отображаться в административном интерфейсе.
"""

from django.contrib import admin
from .models import Book

# Register your models here.
admin.site.register(Book)
