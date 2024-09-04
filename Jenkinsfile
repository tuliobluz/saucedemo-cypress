pipeline {
    agent any

    tools {nodejs "Node"}
    environment {
      CHROME_BIN = '/bin/google-chrome'
    }
    stages {
        stage('Depedencies') {
            steps {
                sh npm i
            }
        }
        stage('Test') {
            steps {
                sh npm run test
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
