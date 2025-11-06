pipeline {
    agent any
    
    environment {
        // Application settings
        APP_NAME = 'my-application'
        VERSION = "${env.BUILD_NUMBER}"
        DOCKER_REGISTRY = 'docker.io'
        DOCKER_IMAGE = "${DOCKER_REGISTRY}/${APP_NAME}:${VERSION}"
        
        // Kubernetes settings
        K8S_NAMESPACE = 'production'
        K8S_DEPLOYMENT = "${APP_NAME}-deployment"
        
        // Tool paths
        SONAR_SCANNER_HOME = tool 'SonarQubeScanner'
        MAVEN_HOME = tool 'Maven3'
    }
    
    tools {
        maven 'Maven3'
        jdk 'JDK11'
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo '=== [MOCK] Checking out source code ==='
                echo 'Simulating git checkout...'
                sleep(time: 2, unit: 'SECONDS')
                echo '✓ Source code checked out successfully'
            }
        }
        
        stage('Build') {
            steps {
                echo '=== [MOCK] Building application ==='
                echo 'Simulating Maven build...'
                sleep(time: 3, unit: 'SECONDS')
                echo '✓ Build completed successfully'
                echo 'Generated artifacts: my-application-${VERSION}.jar'
            }
        }
        
        stage('Unit Tests') {
            steps {
                echo '=== [MOCK] Running unit tests ==='
                echo 'Executing test suite...'
                sleep(time: 4, unit: 'SECONDS')
                echo '✓ Tests passed: 150/150'
                echo '✓ Code coverage: 87%'
            }
        }
        
        stage('Integration Tests') {
            steps {
                echo '=== [MOCK] Running integration tests ==='
                echo 'Starting test containers...'
                sleep(time: 5, unit: 'SECONDS')
                echo '✓ Integration tests passed: 45/45'
                echo '✓ All endpoints validated'
            }
        }
        
        stage('Code Quality Analysis') {
            parallel {
                stage('SonarQube Analysis') {
                    steps {
                        echo '=== [MOCK] Running SonarQube analysis ==='
                        echo 'Analyzing code quality metrics...'
                        sleep(time: 3, unit: 'SECONDS')
                        echo '✓ Quality Score: A'
                        echo '✓ Code Smells: 5 (Minor)'
                        echo '✓ Technical Debt: 2h'
                    }
                }
                
                stage('Code Coverage Check') {
                    steps {
                        echo '=== [MOCK] Checking code coverage thresholds ==='
                        sleep(time: 2, unit: 'SECONDS')
                        echo '✓ Line Coverage: 87% (Threshold: 80%)'
                        echo '✓ Branch Coverage: 75% (Threshold: 70%)'
                    }
                }
            }
        }
        
        stage('Quality Gate') {
            steps {
                echo '=== [MOCK] Waiting for SonarQube Quality Gate ==='
                sleep(time: 2, unit: 'SECONDS')
                echo '✓ Quality Gate: PASSED'
            }
        }
        
        stage('Security Scans') {
            parallel {
                stage('Dependency Check') {
                    steps {
                        echo '=== [MOCK] Running OWASP Dependency Check ==='
                        echo 'Scanning dependencies for vulnerabilities...'
                        sleep(time: 4, unit: 'SECONDS')
                        echo '✓ Dependencies scanned: 142'
                        echo '✓ Vulnerabilities found: 0 Critical, 2 Low'
                        echo '✓ Security assessment: PASS'
                    }
                }
                
                stage('Trivy Filesystem Scan') {
                    steps {
                        echo '=== [MOCK] Running Trivy filesystem scan ==='
                        echo 'Scanning filesystem for vulnerabilities...'
                        sleep(time: 3, unit: 'SECONDS')
                        echo '✓ Files scanned: 1,247'
                        echo '✓ Vulnerabilities: 0 Critical, 1 Medium'
                        echo '✓ Scan result: PASS'
                    }
                }
                
                stage('SAST Scan') {
                    steps {
                        echo '=== [MOCK] Running Static Application Security Testing ==='
                        echo 'Analyzing source code for security issues...'
                        sleep(time: 3, unit: 'SECONDS')
                        echo '✓ Rules checked: 234'
                        echo '✓ Issues found: 3 Info-level'
                        echo '✓ SAST result: PASS'
                    }
                }
                
                stage('Secret Scanning') {
                    steps {
                        echo '=== [MOCK] Scanning for secrets ==='
                        echo 'Detecting hardcoded secrets...'
                        sleep(time: 2, unit: 'SECONDS')
                        echo '✓ Files scanned: 856'
                        echo '✓ Secrets found: 0'
                        echo '✓ Secret scan: PASS'
                    }
                }
            }
        }
        
        stage('Package') {
            steps {
                echo '=== [MOCK] Packaging application ==='
                echo 'Creating deployment artifacts...'
                sleep(time: 3, unit: 'SECONDS')
                echo '✓ JAR created: my-application-${VERSION}.jar (45.2 MB)'
                echo '✓ Artifacts archived successfully'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                echo '=== [MOCK] Building Docker image ==='
                echo "Building image: ${DOCKER_IMAGE}"
                sleep(time: 4, unit: 'SECONDS')
                echo '✓ Image built successfully'
                echo '✓ Image size: 312 MB'
                echo '✓ Image tagged: ${DOCKER_IMAGE}'
            }
        }
        
        stage('Scan Docker Image') {
            steps {
                echo '=== [MOCK] Scanning Docker image for vulnerabilities ==='
                echo 'Running container security scan...'
                sleep(time: 3, unit: 'SECONDS')
                echo '✓ Layers scanned: 8'
                echo '✓ Vulnerabilities: 0 Critical, 1 High (fixed in next base image)'
                echo '✓ Image scan: PASS'