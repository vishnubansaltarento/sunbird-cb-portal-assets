@Library('deploy-conf') _
node() {
    try {
        String ANSI_GREEN = "\u001B[32m"
        String ANSI_NORMAL = "\u001B[0m"
        String ANSI_BOLD = "\u001B[1m"
        String ANSI_RED = "\u001B[31m"
        String ANSI_YELLOW = "\u001B[33m"

        stage('checkout public repo') {
            folder = new File("$WORKSPACE/.git")
            if (folder.exists())
            {
               println "Found .git folder. Clearing it.."
               sh'git clean -fxd'
            }  
            checkout scm
        }

        stage('build assets') {
            sh('cd $portal_dir/client-assets && docker build -t assets . && docker run --name assets assets && docker cp assets:/usr/src/app/dist.zip . && docker rm -f assets && docker rmi -f assets && unzip dist.zip')
        }
        
        stage('tag-creation') {
copyArtifacts projectName: params.absolute_job_path, flatten: true
sh 'cat build_tag.txt'
image_tag = sh(script: "cat build_tag.txt",returnStdout: true).trim()
new_image_tag = sh(script: "echo " + image_tag + "_" + env.BUILD_NUMBER, returnStdout: true).trim()
echo "build_tag: " + new_image_tag
        }

		stage('Build') {
		// Docker build
                env.NODE_ENV = "build"
                print "Environment will be : ${env.NODE_ENV}"
                sh('chmod 777 build.sh')
			sh("bash -x build.sh ${new_image_tag} ${image_name} ${env.NODE_NAME} ${hub_org} ${image_tag}")
            }
		  
	      
               stage('ArchiveArtifacts') {
                   archiveArtifacts "metadata.json"		     
                   currentBuild.description = "${new_image_tag}"
                }
    }
    catch (err) {
        currentBuild.result = "FAILURE"
        throw err
    }
    finally {
        slack_notify(currentBuild.result)
        email_notify()
    }
}
