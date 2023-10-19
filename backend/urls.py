from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

from django.views.generic import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    #path('api/', include('core.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/product/', include('core.urls.product_urls')),
    path('api/user/', include('core.urls.user_urls')),
    path('api/order/', include('core.urls.order_urls')),

]

urlpatterns+= static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)