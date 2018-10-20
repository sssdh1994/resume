
    $('.first').circleProgress({
      // 百分比
      value: 0.85,
      // 大小
      size: 180,
      // 线头圆润
      lineCap:"round",
      // 圆环占圆大小，无百分比
      thickness:20,
      fill: {
        gradient: ["blue", "red","yellow"],
        color: 'rgba(0, 0, 0, .5)'
      }
      }).on('circle-animation-progress', function(event, progress) {
        // 画面静止时的百分比
        $(this).find('strong').html(parseInt(85 * progress) + '<i>%</i>');
    })
    
    $('.demo-play-1').mouseenter(function(){
      $('.first').circleProgress({
          value: 0.85
      }).on('circle-animation-progress', function(event, progress) {
        // mouseenter的百分比
          $(this).find('strong').html(parseInt(85 * progress) + '<i>%</i>');
      });
    });
    $('.second').circleProgress({
      // 百分比
      value: 0.7,
      // 大小
      size: 180,
      // 线头圆润
      lineCap:"round",
      // 圆环占圆大小，无百分比
      thickness:20,
      fill: {
        gradient: ["green", "red","blue"],
        color: 'rgba(0, 0, 0, .5)'
      }
      }).on('circle-animation-progress', function(event, progress) {
        // 画面静止时的百分比
        $(this).find('strong').html(parseInt(70 * progress) + '<i>%</i>');
    })
    
    $('.demo-play-2').mouseenter(function(){
      $('.second').circleProgress({
          value: 0.7
      }).on('circle-animation-progress', function(event, progress) {
        // mouseenter的百分比
          $(this).find('strong').html(parseInt(70 * progress) + '<i>%</i>');
      });
    });
    $('.third').circleProgress({
      // 百分比
      value: 0.5,
      // 大小
      size: 180,
      // 线头圆润
      lineCap:"round",
      // 圆环占圆大小，无百分比
      thickness:20,
      fill: {
        gradient: ["red", "green","yellow"],
        color: 'rgba(0, 0, 0, .5)'
      }
      }).on('circle-animation-progress', function(event, progress) {
        // 画面静止时的百分比
        $(this).find('strong').html(parseInt(50 * progress) + '<i>%</i>');
    })
    
    $('.demo-play-3').mouseenter(function(){
      $('.third').circleProgress({
          value: 0.5
      }).on('circle-animation-progress', function(event, progress) {
        // mouseenter的百分比
          $(this).find('strong').html(parseInt(50 * progress) + '<i>%</i>');
      });
    });
    $('.fourth').circleProgress({
      // 百分比
      value: 0.3,
      // 大小
      size: 180,
      // 线头圆润
      lineCap:"round",
      // 圆环占圆大小，无百分比
      thickness:20,
      fill: {
        gradient: ["blue", "yellow","red"],
        color: 'rgba(0, 0, 0, .5)'
      }
      }).on('circle-animation-progress', function(event, progress) {
        // 画面静止时的百分比
        $(this).find('strong').html(parseInt(30 * progress) + '<i>%</i>');
    })
    
    $('.demo-play-4').mouseenter(function(){
      $('.fourth').circleProgress({
          value: 0.3
      }).on('circle-animation-progress', function(event, progress) {
        // mouseenter的百分比
          $(this).find('strong').html(parseInt(30 * progress) + '<i>%</i>');
      });
    });
