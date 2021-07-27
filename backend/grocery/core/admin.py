from django.contrib import admin
from .models import Product

# Register your models here.

class ProductModelAdmin(admin.ModelAdmin):
    list_display = ('title', 'price', )

admin.site.register(Product, ProductModelAdmin)
