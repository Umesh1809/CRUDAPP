pipeline {
  agent any
  tools {
  maven 'Maven 3.9.8'
 }

  environment {
    DOCKER_IMAGE = 'umesh1809/crudapp'
    DOCKER_CREDENTIALS_ID = 'docker-hub-credentials'
    GIT_REPO = 'https://github.com/Umesh1809/CRUDAPP'
  }

  stages {
    stage('Clone Repository') {
      steps {
        git url: "${env.GIT_REPO}", branch: 'main'
      }
    }
    stage('Increment Version') {
      steps {
        script {
          def versionFile = 'version.txt'
          if (!fileExists('version.txt')) {
             writeFile file: 'version.txt', text: '1.0.0'
          }
          def version = readFile('version.txt').trim()
          if (!version || !version.contains('.')) {
             error("Invalid version format in version.txt")
           }


          def current = readFile(versionFile).trim()
          def parts = current.tokenize('.')
          def major = Integer.parseInt(parts[0] ?: '0')
          def minor = parts[1].toInteger()
          def patch = parts[2].toInteger() + 1
          def newVersion = "${major}.${minor}.${patch}"

          writeFile file: versionFile, text: newVersion
          env.IMAGE_TAG = newVersion
        }
      }
    }
     stage('Build Docker Image') {
      steps {
        bat "docker build -t ${env.DOCKER_IMAGE}:${env.IMAGE_TAG} ."
      }
    }

    stage('Push to Docker Registry') {
      steps {
        withCredentials([usernamePassword(credentialsId: "${DOCKER_CREDENTIALS_ID}", usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
         bat """ echo $PASSWORD | docker login -u $USERNAME --password-stdin
        docker push ${env.DOCKER_IMAGE}:${env.IMAGE_TAG} """
        }
      }
    }
    stage('Deploy to Kubernetes') {
      steps {
        withKubeConfig([credentialsId: 'kube-config']) {
            //   bat 'dir /B /S'
          bat 'kubectl apply -f Kubernetes/deployment.yaml'
          bat 'kubectl apply -f Kubernetes/service.yaml'
        }
      }
    }
  }
}
