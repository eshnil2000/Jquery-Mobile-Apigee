(function(w, undefined) {
  var firstNames = ['Trip to Disnelyland','Sleepover','Extra playtime','+30 screen time','Katy Perry download','In game purchase'];
  var lastNames = ['$600','$10','$10','$5','$2','$1'];
  
  
  

  w.generateRows = function(rows, extraCols) {
  rows = rows || 100;
  extraCols = extraCols || 0;
      
      var row = '<tr>';

      row += '<td>' + firstNames[0] + '</td>';
      row += '<td>' + lastNames[0] + '</td>';
      
      row += '<td data-value="1"><img title="active" src="img/active.png" id="toggle" /></td>';
      

      console.log(firstNames[0]);
      row += '</tr>';
      row += '<td>' + firstNames[1] + '</td>';
      row += '<td>' + lastNames[1] + '</td>';
      row += '<td data-value="1"><img title="active" src="img/disabled.png" id="toggle" /></td>';
      
      row += '</tr>';
      row += '<td>' + firstNames[2] + '</td>';
      row += '<td>' + lastNames[2] + '</td>';
      row += '<td data-value="1"><img title="active" src="img/active.png" /></td>';
      
      row += '</tr>';
      row += '<td>' + firstNames[3] + '</td>';
      row += '<td>' + lastNames[3] + '</td>';
      row += '<td data-value="1"><img title="active" src="img/active.png" /></td>';
      
      row += '</tr>';
      row += '<td>' + firstNames[4] + '</td>';
      row += '<td>' + lastNames[4] + '</td>';
      row += '<td data-value="1"><img title="active" src="img/suspended.png" /></td>';
      
      row += '</tr>';
      row += '<td>' + firstNames[5] + '</td>';
      row += '<td>' + lastNames[0] + '</td>';
      row += '<td data-value="1"><img title="active" src="img/active.png" /></td>';

      row += '</tr>';
      document.writeln(row);
    
  };
})(window);