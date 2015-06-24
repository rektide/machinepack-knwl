var knwl= require(".."),
  tape= require("tape")

tape("dates test 1", function(t){
	var instance= knwl
		.getDates({ string: "Remember remember, the 5th of November, 1605."})
		.exec({
			success: function(result){
				console.log(result)
				t.end()
			},
			error: function(err){
				t.end(err|| true)
			}
		})

})
