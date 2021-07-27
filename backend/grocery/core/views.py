from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from .serializers import ProductSerializers
from .models import Product


class Home(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializers(products, many = True)
        print(serializer)
        return Response(serializer)
