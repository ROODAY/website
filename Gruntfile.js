module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'css/main.css': 'scss/main.scss',
					'css/critical.css': 'scss/critical.scss',
					'css/material.css': 'scss/material.scss'
				}
			}
		},
		uglify: {
			build: {
				src: 'js/production.js',
				dest: 'js/production.js'
			}
		},
		inline: {
			dist: {
				src: ['index.html']
			}
		},
		watch: {
			all: {
				files: ['js/main.js','scss/*.scss'],
				tasks: ['sass', 'concat', 'uglify']
			}
		},
		nodemon: {
			dev: {
				script: 'index.js',
				options: {
					env: {
						PORT: '3000'
					},
					callback: function(nodemon) {
						nodemon.on('log', function(event) {
							console.log(event.colour);
						});
					}
				}
			}
		},
		concurrent: {
			dev: {
				tasks: ['nodemon', 'watch'],
				options: {
					logConcurrentOutput: true
				}
			}
		},
		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: ['js/vendor/jxhr.js', 'js/vendor/ripples.js', 'js/vendor/material.js', 'js/plugins.js', 'js/main.js'],
				dest: 'js/production.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-inline');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['concurrent']);
	grunt.registerTask('inlinecss', ['inline']);
	grunt.registerTask('compile', ['sass', 'concat', 'uglify']);
}