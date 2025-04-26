module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 4000,
                    hostname: 'localhost',
                    keepalive: true,
                    base: '.'
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'assets/css/style.css' : 'assets/scss/**/*.scss'
                }
            }
        },
        watch: {
            sass: {
                files: 'assets/scss/**/*.scss',
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Compile less task.
    grunt.registerTask('min', ['watch']);
    grunt.registerTask('default', ['connect']);
};
