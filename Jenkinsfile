pipeline {
    agent any
    environment{
        DOCKERHUB_CREDENTIALS=credentials('docker-token')
    }

    stages {
        stage('Build') {
            steps {
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
        stage('debug'){
            steps{
                sh 'echo $DOCKER_HOST'
                sh 'env | grep -i docker'
            }
        }
    }
    post{
        always{
            sh 'docker logout'
        }
    }
}
