'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var yoHelper = require('yeoman-generator-helper');


module.exports = yeoman.Base.extend({
  prompting: function() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the bedazzling ' + chalk.red('generator-webkit-cssui') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'project_name',
      message: 'Your project name?',
      default: yoHelper.discoverRoot
    }, {
      type: 'input',
      name: 'description',
      message: 'Description?'
    }];

    return this.prompt(prompts).then(function(props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function() {
    yoHelper.rewriteProps(this.props);
    this._rewriteShortName();
    this._writingCopyFiles();
    this._writingTplFiles();
    this._writingTemplate();
  },
  _rewriteShortName: function() {
    var projectNames = this.props.project_name.split('-');
    this.props.project_short_name = projectNames.slice(2).join('-');
  },
  _writingCopyFiles: function() {
    this.fs.copy(
      this.templatePath('{.*,build/*}'),
      this.destinationPath('.')
    );
  },
  _writingTplFiles: function() {
    this.fs.copyTpl(
      this.templatePath('{*,docs/*}'),
      this.destinationPath('.'),
      this.props
    );
  },
  _writingTemplate: function() {
    this.fs.copyTpl(
      this.templatePath('src/template.scss'),
      this.destinationPath('src/' + this.props.project_name + '.scss'),
      this.props
    );
  },
  install: function() {
    console.log('install dependencies....');
  },
  end: function() {
    console.log('Enjoy coding~ :)');
  }
});
