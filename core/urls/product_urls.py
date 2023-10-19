from django.urls import path
from core.views import product_views as views


urlpatterns = [

    #path('',views.getRoutes, name="routes"),
    path('',views.getProducts, name="products"),
    path('featured-products/',views.getFeaturedProducts, name="featured-products"),
    path('men-products/',views.getMenProducts, name="men-products"),
    path('women-products/',views.getWomenProducts, name="women-products"),
    path('kids-products/',views.getKidsProducts, name="kids-products"),

]