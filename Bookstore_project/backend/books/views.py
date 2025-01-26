#/backend/books/views.py
from django.shortcuts import render
from rest_framework import viewsets, filters, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.http import HttpResponse
from django.db.models import Q
from django.contrib.auth import authenticate, login, logout
from .models import Book, Cart, CartItem, Order
from .serializers import BookSerializer, UserSerializer, CartSerializer, CartItemSerializer, OrderSerializer
from rest_framework.decorators import action

# Create your views here.

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'author', 'genre']
    ordering_fields = ['price', 'year', 'created_at']

    def get_queryset(self):
        queryset = Book.objects.all()
        genre = self.request.query_params.get('genre', None)
        min_price = self.request.query_params.get('min_price', None)
        max_price = self.request.query_params.get('max_price', None)
        year = self.request.query_params.get('year', None)

        if genre:
            queryset = queryset.filter(genre=genre)
        if min_price:
            queryset = queryset.filter(price__gte=min_price)
        if max_price:
            queryset = queryset.filter(price__lte=max_price)
        if year:
            queryset = queryset.filter(year=year)

        return queryset

    @action(detail=False, methods=['get'])
    def search(self, request):
        query = request.query_params.get('q', '')
        books = Book.objects.filter(title__icontains=query)
        serializer = self.get_serializer(books, many=True)
        return Response(serializer.data)

# Простое представление для главной страницы
def home_view(request):
    return HttpResponse("Добро пожаловать в книжный магазин")

@api_view(['GET'])
def api_root(request):
    return Response({
        'message': 'Добро пожаловать в API книжного магазина'
    })

@api_view(['POST'])
def register_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)
    if user:
        login(request, user)
        serializer = UserSerializer(user)
        return Response(serializer.data)
    return Response(
        {'error': 'Invalid credentials'}, 
        status=status.HTTP_400_BAD_REQUEST
    )

@api_view(['POST'])
def logout_user(request):
    logout(request)
    return Response({'message': 'Logged out successfully'})

class CartViewSet(viewsets.ModelViewSet):
    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Cart.objects.filter(user=self.request.user)

    @action(detail=True, methods=['post'])
    def add_item(self, request, pk=None):
        cart = self.get_object()
        book_id = request.data.get('book_id')
        quantity = request.data.get('quantity', 1)

        try:
            book = Book.objects.get(id=book_id)
            cart_item, created = CartItem.objects.get_or_create(
                cart=cart,
                book=book,
                defaults={'quantity': quantity}
            )
            if not created:
                cart_item.quantity += quantity
                cart_item.save()
            return Response(CartItemSerializer(cart_item).data)
        except Book.DoesNotExist:
            return Response(
                {'error': 'Book not found'}, 
                status=status.HTTP_404_NOT_FOUND
            )

class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)
