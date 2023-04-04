var censorwords=["bad","sad","mad"];
var customcensorwords=[];
function censor(text)
{
	for(index in censorwords)
	{
		text=text.replace(censorwords[index],"***");
	}
	for(index in customcensorwords)
	{
		text=text.replace(customcensorwords[index],"***");
	}
	return text;
}
function getCensoredWords()
{
	return censorwords.concat(customcensorwords);
}
function addCensorWords(word)
{
	customcensorwords.push(word);
}
exports.censor=censor;
exports.getCensoredWords=getCensoredWords;
exports.addCensorWords=addCensorWords;