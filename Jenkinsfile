pipeline {
    agent any
    environment{
        DOCKERHUB_CREDENTIALS=credentials('azizbenothmen2-docker')
    }

    stages {
        stage('Build') {
            steps {
                sh 'docker build -it weatherimage .'
            }
        }
        stage('login') {
            steps {
                sh 'docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
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
