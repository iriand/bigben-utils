module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            // Configure a mochaTest task
            mochaTest: {
                test: {
                    options: {
                        reporter: 'spec',
                        captureFile: 'test-results.txt', // Optionally capture the reporter output to a file
                        quiet: false, // Optionally suppress output to standard out (defaults to false)
                        clearRequireCache: false // Optionally clear the require cache before running tests (defaults
                                                 // to false)
                    },
                    src: ['test/**/*.js']
                }
            },
            jshint: {
                options: {
                    //'node': true,
                    'undef': true,
                    'unused': true,
                    'eqnull': true
                },
                build: {
                    src: 'src/StringUtils.js'
                }
            },
            uglify: {
                options: {},
                build: {
                    src: 'src/StringUtils.js',
                    dest: 'build/<%= pkg.name %>_<%= pkg.version %>/StringUtils.js'
                }
            }
        }
    );

    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['mochaTest', 'jshint']);
    grunt.registerTask('compile', ['mochaTest', 'jshint', 'uglify']);
    grunt.registerTask('test', ['mochaTest']);
    grunt.registerTask('hint', ['jshint']);

};
