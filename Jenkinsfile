pipeline {
    agent any
    environment{
        DOCKERHUB_CREDENTIALS=credentials('docker-token')
        DOCKER_HOST = ''
    }

    stages {
        stage('Build') {
            steps {
                sh 'echo $DOCKER_HOST'
                sh 'env | grep -i docker'
                sh 'docker build -t weatherimage .'
            }
        }
        stage('login') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('push') {
            steps {
                sh 'docker push weatherimage'
            }
        }
        
    }
    post{
        always{
            sh 'docker logout'
        }
    }
}
