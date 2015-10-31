FROM python:2.7
ENV PYTHONUNBUFFERED 1
RUN apt-get update && apt-get install -y postgresql-client #Stands for debugging purposes
RUN mkdir /application
WORKDIR /application
ADD requirements.txt /application/
RUN pip install -r requirements.txt

