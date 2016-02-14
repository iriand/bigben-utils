module.exports = function (grunt) {

    var version = grunt.option('release-version') || '0.1.0';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    captureFile: 'test-results.txt',
                    quiet: false,
                    clearRequireCache: false
                },
                src: ['test/**/*.js']
            }
        },
        jshint: {
            options: {
                'node': true,
                'undef': true,
                'unused': true,
                'eqnull': true
            },
            build: {
                src: 'src/**/*.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v' + version + ' - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            js: {
                options: {
                    beautify: {
                        width: 80,
                        beautify: true
                    }
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: '**/*.js',
                    dest: 'dist/'
                }]
            }
        },
        clean: {
            dist: ['dist/']
        },
        copy: {
            main: {
                files: [
                    {expand: true, src: ['LICENSE'], dest: 'dist/'}
                ]
            }
        },
        replace: {
            versioning: {
                src: ['README.md', 'package.json', 'CHANGELOG'],
                dest: 'dist/',
                replacements: [{
                    from: '<<VERSION>>',
                    to: version
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.registerTask('test', ['mochaTest']);
    grunt.registerTask('default', ['test', 'jshint']);
    grunt.registerTask('hint', ['jshint']);
    grunt.registerTask('compile', ['clean', 'test', 'hint', 'uglify', 'copy', 'replace']);
};
