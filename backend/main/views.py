from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from .models import Users
from .serializer import UsersSerializer
from rest_framework.response import Response


class UsersView(APIView):
    def get(self, request):
        users = Users.objects.all()
        serializer = UsersSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UsersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
