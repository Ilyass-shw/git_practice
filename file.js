const randWords ={
    verbs: ['start', 'work on', 'finish'],
    projectNames: [' a serious project', 'a fun project', 'a long project'] 
};

console.log('I am going to '+randWords.verbs[Math.floor(Math.random()*randWords.verbs.length)]+' '+randWords.projectNames[Math.floor(Math.random()*randWords.projectNames.length)]+'.')