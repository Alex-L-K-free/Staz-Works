"""
Путь: backend/bookstore_project/wsgi.py

Назначение: Конфигурация WSGI.
Точка входа для WSGI-серверов (например, Gunicorn)
при развертывании приложения.
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bookstore_project.settings')

application = get_wsgi_application()
