pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/kazban8/js_homework' // Клонувати репозиторій
            }
        }

        stage('Modify Test Files') {
            steps {
                script {
                    // Використовуємо sed для заміни тексту в файлі
                    sh "sed -i '' 's/oldText/newText/' path/to/your/test/file"
                }
            }
        }

        stage('Run Tests') {
            steps {
                // Запуск ваших тестів
                sh 'newman run ./Public SOAP APIs.postman_collection.json --timeout 120000 --timeout-request 60000 --reporters cli,html --reporter-html-export "API qauto report.html"'
            }
        }
    }
}
