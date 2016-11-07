inlets = 1;
outlets = 1;

value = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var msg_float = function(in_val){
/*
	switch(this.inlet){
        case 0:
    		value1 = value2;
			value2 = in_val;
			break;
		case 1:
			
			break;
	}
*/

	var ave = 0;

	value.shift();
	value.push(in_val);
	
	for(var i = 0; i <= 10; i++) {
		ave += value[i];
	}
	ave = ave / 10;
	
	outlet(0, ave);
}