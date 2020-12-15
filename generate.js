// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

##Title
${data.title}

##Description

${data.description}


##Table of Contents


* [Installation Instructions](#Installation)
* [Guidelines] (#guidelines)
* [Test Instructions](#Tests)
* [License](#License)
* [Questions](#Questions)

##Installation
${data.Installations}

##Usage
${data.usage}

##Guidelines
${data.guidelines}

##Tests
${data.tests}

##Questions 
[Github](https://github.com/chidibangzz/Node-readme/${data.github})

 feel free to email me at ${data.emailadress}




`;
  }

  
  module.exports = generateMarkdown;
