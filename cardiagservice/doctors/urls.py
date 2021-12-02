from rest_framework import routers
from .api import DoctorViewSet

router = routers.DefaultRouter()
router.register('api/doctors', DoctorViewSet, 'doctors')

urlpatterns = router.urls
