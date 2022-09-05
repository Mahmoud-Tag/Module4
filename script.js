var names=new Array();
names[0]="Fawy";
names[1]="Jamal";
names[2]="Jassmine";
names[3]="jana";
names[4]="mahmoud";
names[5]="tag";
names[6]="Mariem";
names[7]="Hager";
names[8]="rahma";
names[9]="ghofrana";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}