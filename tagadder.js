tag_index = {};
tag_array = [];

$.getJSON('https://raw.githubusercontent.com/RBLXGGI/RBLXGGI/main/RGGI_TAG_INDEX.json', function(data) {
	//Code vomit
	console.log(data);
	tag_index = data;
	
	document.getElementById("textarea_index").value = JSON.stringify(tag_index,null,"\t");
});

function button_generate() {
	document.getElementById("log").innerText = "Checking Inputs...";
	var fieldA = document.getElementById("input_name").value;
	var fieldB = document.getElementById("input_desc").value;
	var fieldC = document.getElementById("input_group").value;
	
	if (fieldA.length == 0) {
		return document.getElementById("log").innerText = "ERROR: You must give the tag a name!";
	}
	if (fieldA.length == 1) {
		return document.getElementById("log").innerText = "ERROR: You must give the tag a group!";
	}
	
	document.getElementById("log").innerText = "Generating Tag...";
	var tag_object = {
		name: fieldA,
		desc: fieldB
	}
	tag_array.push(tag_object);
	document.getElementById("textarea_array").value = JSON.stringify(tag_array,null,"\t");
	document.getElementById("textarea_tag").value = JSON.stringify(tag_object,null,"\t");
	
	document.getElementById("log").innerText = "Pushing Tag to Index...";
	if (!(fieldC in tag_index.tags)) {
		tag_index.tags[fieldC] = [];
	}
	tag_index.tags[fieldC].push(tag_object);
	document.getElementById("textarea_index").value = JSON.stringify(tag_index,null,"\t");
	document.getElementById("log").innerText = "Tag added!";
}

document.getElementById("log").innerText = "All good so far!";