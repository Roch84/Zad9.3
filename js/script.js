var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.',
	dinosaur = 'triceratops',
	dinosaurUpperCased = dinosaur.toUpperCase();

console.log(dinosaurUpperCased);

var newText = text.replace('Velociraptor', dinosaurUpperCased);

console.log(newText.slice(0,text.length/2));