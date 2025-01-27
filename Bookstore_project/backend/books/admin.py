"""
Путь: backend/books/admin.py

Назначение: Настройки админ-панели Django.
Определяет, как модели приложения будут
отображаться в административном интерфейсе.
"""

from django.contrib import admin
from .models import Book

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'year', 'price', 'type', 'genre')
    list_filter = ('type', 'genre', 'year')
    search_fields = ('title', 'author')
    fields = ('type', 'genre', 'title', 'author', 'year', 'price', 'description', 'image')
