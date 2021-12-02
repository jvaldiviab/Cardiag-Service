from rest_framework import serializers
from doctors.models import Doctor

# Doctor serializers


class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'
