google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data_1 = new google.visualization.DataTable();
						data_1.addColumn('number', '');
						data_1.addColumn('number', '');
						data_1.addColumn({'type': 'string', 'role': 'tooltip', 'p': {'html': true}});
						data_1.addColumn('number', '');
						data_1.addColumn({'type': 'string', 'role': 'tooltip', 'p': {'html': true}});
						data_1.addRows(
							[
			          [0.3, -1.9, createCustomHTMLContent(-1.9), 0, createCustomHTMLContent(0)],
								[0.4, -1.8, createCustomHTMLContent(-1.8), 0, createCustomHTMLContent(0)],
								[0.5, -1.5, createCustomHTMLContent(-1.5), 0, createCustomHTMLContent(0)],
								[0.6, -1, createCustomHTMLContent(-1), 0, createCustomHTMLContent(0)],
								[0.65, -0.7, createCustomHTMLContent(-0.7), 0, createCustomHTMLContent(0)],
								[0.75, 0, createCustomHTMLContent(0), 0, createCustomHTMLContent(0)],
								[0.85, 1, createCustomHTMLContent(-0.7), 0, createCustomHTMLContent(0)],
								[1, 1.8, createCustomHTMLContent(+1.8), 0, createCustomHTMLContent(0)],
								[1.1, 2, createCustomHTMLContent(+2), 0, createCustomHTMLContent(0)],
								[1.2, 2.1, createCustomHTMLContent(+2.1), 0, createCustomHTMLContent(0)],
								[1.3, 2, createCustomHTMLContent(+2), 0, createCustomHTMLContent(0)],
								[1.4, 1.8, createCustomHTMLContent(+1.8), 0, createCustomHTMLContent(0)],
								[1.55, 1, createCustomHTMLContent(+1), 0, createCustomHTMLContent(0)],
								[1.65, 0, createCustomHTMLContent(0), 0, createCustomHTMLContent(0)],
								[1.75, -0.5, createCustomHTMLContent(-0.5), 0, createCustomHTMLContent(0)],
								[1.8, -0.7, createCustomHTMLContent(-0.7), 0, createCustomHTMLContent(0)],
								[1.9, -0.8, createCustomHTMLContent(-0.8), 0, createCustomHTMLContent(0)],
								[2, -0.7, createCustomHTMLContent(-0.9), 0, createCustomHTMLContent(0)],
								[2.05, -0.6, createCustomHTMLContent(-0.6), 0, createCustomHTMLContent(0)],
								[2.2, 0, createCustomHTMLContent(0), 0, createCustomHTMLContent(0)],
								[2.3, 1, createCustomHTMLContent(+1), 0, createCustomHTMLContent(0)],
								[2.4, 1.2, createCustomHTMLContent(+1.2), 0, createCustomHTMLContent(0)],
								[2.5, 1, createCustomHTMLContent(+1), 0, createCustomHTMLContent(0)],
								[2.6, 0, createCustomHTMLContent(0), 0, createCustomHTMLContent(0)],
								[2.7, -1, createCustomHTMLContent(-1), 0, createCustomHTMLContent(0)],
								[2.8, -1.4, createCustomHTMLContent(-1.4), 0, createCustomHTMLContent(0)],
								[2.9, -1.6, createCustomHTMLContent(-1.6), 0, createCustomHTMLContent(0)]
			        ]
						);

						var data_2 = new google.visualization.DataTable();
								data_2.addColumn('number', '');
								data_2.addColumn('number', '');
								data_2.addColumn({'type': 'string', 'role': 'tooltip', 'p': {'html': true}});
								data_2.addColumn('number', '');
								data_2.addColumn({'type': 'string', 'role': 'tooltip', 'p': {'html': true}});
								data_2.addRows(
									[
										[0.3, -1.9, createCustomHTMLContent(-1.9), 0, createCustomHTMLContent(0)],
										[0.4, -1.8, createCustomHTMLContent(-1.8), 0, createCustomHTMLContent(0)],
										[0.5, -1.5, createCustomHTMLContent(-1.5), 0, createCustomHTMLContent(0)],
										[0.6, -1, createCustomHTMLContent(-1), 0, createCustomHTMLContent(0)],
										[0.65, -0.7, createCustomHTMLContent(-0.7), 0, createCustomHTMLContent(0)],
										[0.75, 0, createCustomHTMLContent(0), 0, createCustomHTMLContent(0)],
										[0.85, 1, createCustomHTMLContent(-0.7), 0, createCustomHTMLContent(0)],
										[1, 1.8, createCustomHTMLContent(+1.8), 0, createCustomHTMLContent(0)],
										[1.1, 2, createCustomHTMLContent(+2), 0, createCustomHTMLContent(0)],
										[1.2, 2.1, createCustomHTMLContent(+2.1), 0, createCustomHTMLContent(0)],
										[1.3, 2, createCustomHTMLContent(+2), 0, createCustomHTMLContent(0)],
										[1.4, 1.8, createCustomHTMLContent(+1.8), 0, createCustomHTMLContent(0)],
										[1.55, 1, createCustomHTMLContent(+1), 0, createCustomHTMLContent(0)],
										[1.65, 0, createCustomHTMLContent(0), 0, createCustomHTMLContent(0)],
										[1.75, -0.5, createCustomHTMLContent(-0.5), 0, createCustomHTMLContent(0)],
										[1.8, -0.7, createCustomHTMLContent(-0.7), 0, createCustomHTMLContent(0)],
										[1.9, -0.8, createCustomHTMLContent(-0.8), 0, createCustomHTMLContent(0)],
										[2, -0.7, createCustomHTMLContent(-0.9), 0, createCustomHTMLContent(0)],
										[2.05, -0.6, createCustomHTMLContent(-0.6), 0, createCustomHTMLContent(0)],
										[2.2, 0, createCustomHTMLContent(0), 0, createCustomHTMLContent(0)],
										[2.3, 1, createCustomHTMLContent(+1), 0, createCustomHTMLContent(0)],
										[2.4, 1.2, createCustomHTMLContent(+1.2), 0, createCustomHTMLContent(0)],
										[2.5, 1, createCustomHTMLContent(+1), 0, createCustomHTMLContent(0)],
										[2.6, 0, createCustomHTMLContent(0), 0, createCustomHTMLContent(0)],
										[2.7, -1, createCustomHTMLContent(-1), 0, createCustomHTMLContent(0)],
										[2.8, -1.4, createCustomHTMLContent(-1.4), 0, createCustomHTMLContent(0)],
										[2.9, -1.6, createCustomHTMLContent(-1.6), 0, createCustomHTMLContent(0)]
									]
								);


						function createCustomHTMLContent(percents) {
							if (percents > 0) {
								return '<span class="charts__tooltip">' + '+' + percents + '%' + '</span>';
							}
							else return '<span class="charts__tooltip">' + percents + '%' + '</span>';
						};

        var options = {
          curveType: 'function',
					lineWidth: '3',
					colors: ['#e79a6e', '#6ed6f9'],
					legend: {
						position: 'none'
					},
					hAxis: {
						fontSize: '14px',
						ticks: [0,1,2,3],
						gridlines: {
							color: '#f3f3f3',
							count: '4'
						},
						baselineColor: '#f3f3f3'
					},
					tooltip: {
						isHtml: true
					},
					vAxis: {
						format: '#%',
						ticks: [-4,-3,-2,-1,0,1,2,3,4],
						baselineColor: '#f3f3f3',
						gridlines: {
							color: '#f3f3f3'
						}
					},
					chartArea: {
						width: '100%',
						height: '100%',
						backgroundColor : {
							stroke: '#e3e3e3',
							strokeWidth: '3'
						}

					}

        };

        var chart_1 = new google.visualization.LineChart(document.getElementById('chart_1'));
				var chart_2 = new google.visualization.LineChart(document.getElementById('chart_2'));

        chart_1.draw(data_1, options);
				chart_2.draw(data_2, options);
      }
