/*
 * Parse the data and create a graph with the data.
 */
function parseData(createGraph) {
	Papa.parse("../data/Prroduction.csv", {
		download: true,
		complete: function(results) {
			createGraph(results.data);
		}
	});

	
}

function parseDemandData(createDemandGraph){
	Papa.parse("../data/Final_demand.csv", {
		download: true,
		complete: function(results) {
			createDemandGraph(results.data);
		}
	});
}

function createGraph(data) {
	var years = [];
	var silverMinted = [];
	var production = [];
	var rainfall=[];
	var area=[];
	var year_demand = [2011,2012,2013,2014,2015,2016];

	var distValue="";
	var cropValue="";

	dist=document.getElementById('district');
	crop=document.getElementById('crop');

	var cropValue = crop.options[crop.selectedIndex].value;
	var distValue = dist.options[dist.selectedIndex].value;
	cropValue=cropValue.toUpperCase();


	console.log(true);
	console.log(cropValue);
	console.log(distValue);

	for (var i = 1; i < data.length-1; i++) {
		
		if(data[i][2]==distValue) {
			if(data[i][5]==cropValue){
				years.push(data[i][3]);
				silverMinted.push(data[i][7]);
				rainfall.push(data[i][8]);
				area.push(data[i][6]);



			}
				
			
					}
		
	}

	console.log(years);
	console.log(silverMinted);

	var chart = c3.generate({
		bindto: '#chart',
	    data: {
	        columns: [
	        	silverMinted
	        ]
		},
		size: {
			height: 500,
			width: 800
		},

		padding: {
			right: 80
		  },
	    axis: {
	        x: {
	            type: 'category',
				categories: years,
				label: {
					text: "Year",
					position: 'outer-center'
				},
	            tick: {
	            	multiline: false,
                	culling: {
                    	max: 15
                	}
            	}
			},
			y: {
				label: {
					text: "Production",
					position: 'outer-center'
				}
			}
	    },
	    zoom: {
        	enabled: true
    	},
	    legend: {
			show: false,
	        position: 'right'
	    }
	});

	var chart1 = c3.generate({
		bindto: '#chart1',
	    data: {
	        columns: [
	        	rainfall
	        ]
	    },
	    axis: {
	        x: {
	            type: 'category',
				categories: years,
				label: {
					text: "Year",
					position: 'outer-center'
				}, 
	            tick: {
	            	multiline: false,
                	culling: {
                    	max: 15
                	}
            	}
			},
			y: {
				label: {
					text: "Rainfall",
					position: 'outer-center'
				} 
			}
	    },
	    zoom: {
        	enabled: true
    	},
	    legend: {
			show: false,
	        position: 'right'
	    }
	});

	var chart2 = c3.generate({
		bindto: '#chart2',
	    data: {
	        columns: [
	        	silverMinted
	        ]
	    },
	    axis: {
	        x: {
	            type: 'category',
				categories: area,
				label: {
					text: "Area",
					position: 'outer-center'
				},
	            tick: {
	            	multiline: false,
                	culling: {
                    	max: 15
                	}
            	}
			},
			y: {
				label: {
					text: "Production",
					position: 'outer-center'
				}
			}
	    },
	    zoom: {
        	enabled: true
    	},
	    legend: {
			show: false,
	        position: 'right'
	    }
	});
}


function createDemandGraph(data) {
	var years = ["2011","2012","2013","2014","2015","2016"];
	var demand=[];
	var distValue="";
	var cropValue="";

	dist=document.getElementById('district');
	crop=document.getElementById('crop');

	var cropValue = crop.options[crop.selectedIndex].value;
	var distValue = dist.options[dist.selectedIndex].value;
	


	console.log(true);
	console.log(cropValue);
	console.log(distValue);

	for (var i = 1; i < data.length-1; i++) {
		
		if(data[i][2]==distValue) {
			if(data[i][3]==cropValue){

				demand.push(data[i][7]);
				demand.push(data[i][8]);
				demand.push(data[i][10]);
				demand.push(data[i][12]);
				demand.push(data[i][14]);
				demand.push(data[i][16]);
				console.log(demand);
			}
					}
		
	}


	

	var chart = c3.generate({
		bindto: '#chartdemand',
	    data: {
	        columns: [
	        	demand
	        ]
		},
		size: {
			height: 500,
			width: 500
		},
	    axis: {
	        x: {
	            type: 'category',
				categories: years,
				label: {
					text: "Year",
					position: 'outer-center'
				},
	            tick: {
	            	multiline: false,
                	culling: {
                    	max: 15
                	}
            	}
			},
			y: {
				label: {
					text: "Demand",
					position: 'outer-center'
				}
			}
	    },
	    zoom: {
        	enabled: true
    	},
	    legend: {
			show: false,
	        position: 'right'
	    }
	});

	/*var chart1 = c3.generate({
		bindto: '#chartdemand1',
	    data: {
	        columns: [
	        	rainfall
	        ]
	    },
	    axis: {
	        x: {
	            type: 'category',
				categories: years,
				label: {
					text: "Year",
					position: 'outer-center'
				}, 
	            tick: {
	            	multiline: false,
                	culling: {
                    	max: 15
                	}
            	}
			},
			y: {
				label: {
					text: "Rainfall",
					position: 'outer-center'
				} 
			}
	    },
	    zoom: {
        	enabled: true
    	},
	    legend: {
			show: false,
	        position: 'right'
	    }
	});

	var chart2 = c3.generate({
		bindto: '#chartdemand2',
	    data: {
	        columns: [
	        	demand
	        ]
	    },
	    axis: {
	        x: {
	            type: 'category',
				categories: area,
				label: {
					text: "Area",
					position: 'outer-center'
				},
	            tick: {
	            	multiline: false,
                	culling: {
                    	max: 15
                	}
            	}
			},
			y: {
				label: {
					text: "Production",
					position: 'outer-center'
				}
			}
	    },
	    zoom: {
        	enabled: true
    	},
	    legend: {
			show: false,
	        position: 'right'
	    }
	});*/
}