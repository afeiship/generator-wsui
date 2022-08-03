"use strict";
const Generator = require("@jswork/yeoman-generator");
const genp = require("@jswork/generator-prompts");
const prompts = genp(["scope", "registry", "project_name", "description"]);

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(`Welcome to "generator-wsui" generator!`);
    this.props = await this.prompt(prompts);
  }

  writing() {
    this.fs.copyTpl(this.srcFiles, this.destinationPath(), this.props);
  }
};
