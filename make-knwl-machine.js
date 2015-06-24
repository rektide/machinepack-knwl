var knwl= require("knwl.js")

var registered= {}

module.exports = function(name, example, description, plugin){
	return {
		friendlyName: "Get " + name,
		description: "Get " + name + " from strings",
		inputs: {
			string: {
				example: example,
				description: description,
				required: true
			
			},
			language: {
				example: "english",
				description: "Language parameter to pass to knwl",
				required: false
			}
		},
		defaultExit: "success",
		exits: {
			error: {
				description: "No + " + name + " found.",
				void: true
			},
			success: {
				description: "All found " + name + ".",
				example: {
				}
			}
		},
		fn: function(inputs, exits){
			var parser= knwl(inputs.language)
			if(plugin){
				parser.register(name, plugin)
			}
			parser.init(inputs.string)
			var results = parser.get(name)
			if(results && results.length){
				exits.success(results)
			}else{
				exits.error()
			}
		}
	}
}
