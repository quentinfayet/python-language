from django.test import TestCase
from authentication.models import Account


class AccountTest(TestCase):
    def test_create_account(self,
                            email="test@email.com",
                            password="password",
                            username="username"):
        account = Account.objects.create_user(email=email, password=password,
                                              username=username)
        self.assertTrue(isinstance(account, Account))

    def test_create_account_without_email_raises_valueError(self,
                                                            email="",
                                                            password="password",
                                                            username="username"):
        self.assertRaises(ValueError,
                          Account.objects.create_user,
                          email=email,
                          password=password,
                          username=username)

    def test_create_account_without_username_raises_valueError(self,
                                                               email="email",
                                                               password="pass"):
        self.assertRaises(ValueError,
                          Account.objects.create_user,
                          email=email,
                          password=password)
