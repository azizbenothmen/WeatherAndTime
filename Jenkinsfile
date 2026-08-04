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
                echo 'docker push weatherimage'
            }
        }
    }
    post{
        always{
            sh 'docker logout'
        }
    }
}
