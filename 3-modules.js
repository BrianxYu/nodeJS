// Modules
const { john, peter} = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative_exports');

sayHi('susan');
sayHi(john);
sayHi(peter);
sayHi(data.person.name);

// when you import a module, the content is invoked
require('./7-mind-grenade');