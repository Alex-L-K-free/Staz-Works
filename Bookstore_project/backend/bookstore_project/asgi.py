"""
Путь: backend/bookstore_project/asgi.py

Назначение: Конфигурация ASGI.
Точка входа для ASGI-серверов при развертывании
приложения с поддержкой асинхронных операций.
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bookstore_project.settings')

application = get_asgi_application()
