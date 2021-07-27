from django.db import models
# from djrichtextfield import RichTextField


class Product (models.Model):
    title = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=4, decimal_places=2)
    dis_price = models.DecimalField(null= True, blank= True, max_digits=4, decimal_places= 2)
    image = models.ImageField(upload_to = 'static/product_images', default = 'dipu.jpg')
    des = models.TextField()


    def __str__(self):
        return self.title




    @property
    def dis_price(self):
        if self.dis_price == '':
            self.dis_price = self.price