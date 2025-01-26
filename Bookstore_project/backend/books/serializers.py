from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Book, Cart, CartItem, Order

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title', 'author', 'description', 'price', 'image']

class CartItemSerializer(serializers.ModelSerializer):
    book = BookSerializer(read_only=True)
    total_price = serializers.SerializerMethodField()

    class Meta:
        model = CartItem
        fields = ['id', 'book', 'quantity', 'total_price']

    def get_total_price(self, obj):
        return obj.quantity * obj.book.price

class CartSerializer(serializers.ModelSerializer):
    items = CartItemSerializer(many=True, read_only=True)
    total = serializers.SerializerMethodField()

    class Meta:
        model = Cart
        fields = ['id', 'items', 'total']

    def get_total(self, obj):
        return sum(item.quantity * item.book.price for item in obj.items.all())

class OrderSerializer(serializers.ModelSerializer):
    items = CartItemSerializer(many=True, read_only=True)
    status = serializers.CharField(read_only=True)
    total_amount = serializers.DecimalField(
        max_digits=10, 
        decimal_places=2, 
        read_only=True
    )

    class Meta:
        model = Order
        fields = [
            'id', 'full_name', 'email', 'phone', 
            'address', 'status', 'total_amount', 
            'items', 'created_at'
        ] 