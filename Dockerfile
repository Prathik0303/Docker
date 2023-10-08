# Use the official Python image as the base image
FROM python:3.8

# Set the working directory in the container
WORKDIR /app

# Copy the entire repository into the container
COPY . /app

# Install any dependencies needed for your project
# For example, if you have a requirements.txt file:
RUN pip install --no-cache-dir -r requirements.txt

# Define the default command to execute when the container starts
# This can be overridden in the Jenkinsfile
CMD ["python", "your_script.py"]

