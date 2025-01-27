# """
# Путь: backend/books/models.py

# Назначение: Модели данных приложения books.
# Определяет структуру базы данных для книг,
# их категорий, авторов и связанных сущностей.
# """

from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.

class Book(models.Model):
    TYPE_CHOICES = [
        ('hardcover', 'Твердый переплет'),
        ('paperback', 'Мягкий переплет'),
        ('ebook', 'Электронная книга'),
    ]

    GENRE_CHOICES = [
        ('fiction', 'Художественная литература'),
        ('non-fiction', 'Нехудожественная литература'),
        ('science', 'Научная литература'),
        ('fantasy', 'Фэнтези'),
        ('detective', 'Детектив'),
        ('romance', 'Роман'),
    ]

    type = models.CharField('Тип книги', max_length=20, choices=TYPE_CHOICES, default='hardcover')
    genre = models.CharField('Жанр', max_length=20, choices=GENRE_CHOICES, default='fiction')
    title = models.CharField('Название', max_length=200)
    author = models.CharField('Автор', max_length=200)
    year = models.IntegerField('Год издания')
    price = models.DecimalField('Цена', max_digits=10, decimal_places=2)
    description = models.TextField('Описание')
    image = models.ImageField('Изображение', upload_to='books/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Книга'
        verbose_name_plural = 'Книги'
        ordering = ['-created_at']

    def __str__(self):
        return self.title

class Cart(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Корзина'
        verbose_name_plural = 'Корзины'

    def __str__(self):
        return f"Корзина пользователя {self.user.username}"

class CartItem(models.Model):
    cart = models.ForeignKey(Cart, related_name='items', on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    
    class Meta:
        verbose_name = 'Товар в корзине'
        verbose_name_plural = 'Товары в корзине'

    def __str__(self):
        return f"{self.book.title} ({self.quantity} шт.)"

class Order(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Ожидает оплаты'),
        ('paid', 'Оплачен'),
        ('shipped', 'Отправлен'),
        ('delivered', 'Доставлен'),
        ('cancelled', 'Отменен'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    full_name = models.CharField('ФИО', max_length=200)
    email = models.EmailField('Email')
    phone = models.CharField('Телефон', max_length=20)
    address = models.TextField('Адрес доставки')
    status = models.CharField(
        'Статус',
        max_length=20,
        choices=STATUS_CHOICES,
        default='pending'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Заказ {self.id} пользователя {self.user.username}"
