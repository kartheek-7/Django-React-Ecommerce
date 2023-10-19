from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
# Create your models here.

class Product(models.Model):
    user= models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name= models.CharField(max_length=200, null=True, blank=True)
    image=models.ImageField(null=True, blank=True)
    price= models.DecimalField(max_digits=7, decimal_places=2)
    category= models.CharField(max_length=200, choices=[('men', 'Men'),('women', 'Women'),('kids', 'Kids')], null=True, blank=True)
    feature=models.BooleanField(default=False)
    _id= models.AutoField(primary_key=True, editable=False)


    def __str__(self):
        return self.name

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    total_price = models.DecimalField(max_digits=7, decimal_places=2)
    isDelivered = models.BooleanField(default=False)
    deliveredAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True) 
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.createdAt)
    
class OrderItem(models.Model):
    product= models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    order= models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    name= models.CharField(max_length=200, null=True, blank=True)
    qty= models.IntegerField(null=True, blank=True, default=0)
    price= models.DecimalField(max_digits=7, decimal_places=2)
    image= models.CharField(max_length=200, null=True, blank=True)
    _id= models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.name)
    
class ShippingAddress(models.Model):
    order=models.OneToOneField(Order, on_delete=models.CASCADE, null=True, blank=True)
    address= models.CharField(max_length=200, null=True, blank=True)
    city= models.CharField(max_length=200, null=True, blank=True)
    postalcode= models.CharField(max_length=200, null=True, blank=True)
    _id=models.AutoField(primary_key=True, editable=False)  

    def __str__(self):
        return str(self.address)


