from typing import Any, Dict
from django.shortcuts import render

from core.models import Product
from core.serializer import ProductSerializer

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from rest_framework import status

@api_view(['GET'])
def getProducts(request):
    products=Product.objects.all()
    serializer= ProductSerializer(products,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getFeaturedProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    featured_products = [product for product in serializer.data if product['feature']]
    return Response(featured_products)

@api_view(['GET'])
def getMenProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    featured_products = [product for product in serializer.data if product['category']=='men']
    return Response(featured_products)

@api_view(['GET'])
def getWomenProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    featured_products = [product for product in serializer.data if product['category']=='women']
    return Response(featured_products)

@api_view(['GET'])
def getKidsProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    featured_products = [product for product in serializer.data if product['category']=='kids']
    return Response(featured_products)