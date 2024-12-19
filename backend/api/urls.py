from django.urls import path
from .views import ChatView, GongSummaryView, OpportunityView


urlpatterns = [
    path('chat/', ChatView.as_view(), name='chat'),
    path('gong/<str:id>/', GongSummaryView.as_view(), name='gong'),
    path('opportunity/<str:opp_id>/', OpportunityView.as_view(), name='opportunity')
]
