// v3.1.0
//Docs at http://simpleweatherjs.com
jQuery(document).ready(function ($) {
  $.simpleWeather({
    location: '',
    woeid: '943828',
    unit: 'c',
    success: function(weather) {
      var dt = new Date();
      var time = dt.getHours() + ":" + dt.getMinutes();
      html = '<br/></br><p>Weather in '+weather.city+': ';
      html += ''+weather.temp+'&deg;'+weather.units.temp+', ';
      html += ''+weather.currently+'</p><p>Time: '+time+' </p>';
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
