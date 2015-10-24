FROM python:2.7
ENV PYTHONUNBUFFERED 1
RUN mkdir /application
WORKDIR /application
ADD requirements.txt /application/
RUN pip install -r requirements.txt

