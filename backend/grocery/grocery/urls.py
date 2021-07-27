from django.contrib import admin
from django.urls import path
from django.urls.conf import include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    # path('djrichtextfield/', include('djrichtextfield.urls')),
    path('', include('core.urls', namespace='core'))
]
