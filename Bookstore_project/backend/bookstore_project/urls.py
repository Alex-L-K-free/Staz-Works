# Путь: backend/bookstore_project/urls.py

# Назначение: Главный конфигурационный файл URL-маршрутов.
# Определяет корневые URL-маршруты проекта и подключает
# маршруты из отдельных приложений.

from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('books.urls')),
    path('api/users/', include('users.urls')),
    path('', TemplateView.as_view(template_name='home.html'), name='home'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
