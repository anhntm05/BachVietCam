from django.urls import path

from evaluator import views

urlpatterns = [
    path("evaluate/", views.evaluate_view, name="evaluate"),
    path("evaluate-pair/", views.evaluate_pair_view, name="evaluate_pair"),
    path("health/", views.health_view, name="health"),
]
