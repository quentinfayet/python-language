from rest_framework import permissions, viewsets, Response, status
from authentication.models import Account
from authentication.permissions import IsAccountOwner
from authentication.serializers import AccountSerializer


class AccountViewSet(viewsets.ModelViewSet):
    lookup_fields = 'username'
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)

        if self.request.method == 'POST':
            return (permissions.AllowAny,)

        return (permissions.IsAuthenticated(), IsAccountOwner(),)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            Account.objects.create_user(**serializer.validated_data)

            return Response(serializer.validated_data,
                            status=status.HTTP_201_CREATED)

        return Response({
            'status': 'Bad request',
            'message': 'Cannot create account.'
        }, status=status.HTTP_404_BAD_REQUEST)
