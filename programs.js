// Function to create an unordered list from an array of topics
function createTopicList(topics) {
    const ul = document.createElement('ul');
    topics.forEach(topic => {
      const li = document.createElement('li');
      li.textContent = topic;
      ul.appendChild(li);
    });
    return ul;
  }

  // Function to generate the HTML structure from the JSON data
  function generateSyllabus(jsonData, programName) {
    const syllabusDiv = document.getElementById('syllabus');
    const program = jsonData.programs.find(p => p.name.toLowerCase() === programName.toLowerCase());
  
    if (!program) {
      console.error('Program not found:', programName);
      return;
    }
  
    program.modules.forEach(module => {
      const moduleDiv = document.createElement('div');
      moduleDiv.id = 'module-' + module.name.replace(/\s/g, '-').toLowerCase();
      moduleDiv.className = 'module';
  
      const moduleNameHeader = document.createElement('h6');
      moduleNameHeader.textContent = module.name;
      moduleDiv.appendChild(moduleNameHeader);
  
      const topicList = createTopicList(module.topics);
      moduleDiv.appendChild(topicList);
  
      syllabusDiv.appendChild(moduleDiv);
    });
  }