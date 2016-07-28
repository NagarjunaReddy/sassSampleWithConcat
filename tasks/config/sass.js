module.exports = function(grunt) {

  grunt.config.set('sass', {
    dev: {
      files: [{
        expand: true,
        cwd: './assets/sass/',
        src: ['*.scss','*.sass'],
        dest: './assets/styles/',
        ext: '.css'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
};
