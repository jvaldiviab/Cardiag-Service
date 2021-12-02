from doctors.models import Doctor
from rest_framework import viewsets, permissions
from .serializers import DoctorSerializer

# Doctor Viewset


class DoctorViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = DoctorSerializer

    def get_queryset(self):
        return self.request.user.doctors.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
