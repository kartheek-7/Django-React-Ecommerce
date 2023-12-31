from typing import Any, Dict
from django.shortcuts import render

from core.models import Product, Order, OrderItem, ShippingAddress
from core.serializer import ProductSerializer,OrderSerializer

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from rest_framework import status

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addOrderItems(request):
    user=request.user
    data=request.data

    orderItems=data['orderItems']

    if orderItems and len(orderItems)==0:
        return Response({'detail': 'No order items'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        #1 Create Order
        order=Order.objects.create(
            user=user,
            total_price= data['total_price'],
        )
        #2 Create Shipping Address
        shipping=ShippingAddress.objects.create(
            order=order,
            address=data['address'],
            city=data['city'],
            postalcode=data['postalcode'],
        )

        #3 create order items and set order to order items relationships

        for i in orderItems:
            product= Product.objects.get(_id=i['product'])

            item= OrderItem.objects.create(
                product=product,
                order=order,
                name=product.name,
                qty=i['qty'],
                price=i['price'],
                image=product.image.url,
            )

    
    serializer= OrderSerializer(order,many=True)
    return Response('serializer.data')