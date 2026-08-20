pipeline {
    agent any
    environment{
        DOCKERHUB_CREDENTIALS=credentials('docker-token')
    }

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t azizbenothmen2/weatherimage:v1.0.0 .'
            }
        }
        stage('login') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('push') {
            steps {
                sh 'docker push azizbenothmen2/weatherimage:v1.0.0'
            }
        }
        
    }
    post{
        always{
            sh 'docker logout'
        }
    }
}
