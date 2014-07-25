'use strict';

(function (window, api, $, _, TweenMax, TimelineMax, ScrollMagic, ScrollScene, Modernizr, IScroll) {

  $(document).ready(function ($) {
    // return;

    $('#bullets').on('click', '.bullet', function (e) {
      var index = $(e.target).index();
      api.goToScene(index);
    });

    api.animateScroll = function (top, speed) {
      api.myScroll.scrollTo(0, -top, speed || 3000);
    };


    api.goToScene = function(index) {
      var scene = api.scenes[index],
          scrollTop;

      if(!scene) {
        console.error('not a valid index scene', index);
        return false;
      }

      scrollTop = scene.startPosition() - $(window).height() /  2 + scene.duration() * 0.2;

      api.animateScroll(scrollTop);
    };


    api.getBubbles = function () {
      if(!api.getBubbles.promise) {
        api.getBubbles.promise = $.ajax({
          url: 'data/bubbles.json',
          method: 'get',
          dataType: 'json'
        });
      }
      return api.getBubbles.promise;
    };

    api.renderBubbles = function (bubbles) {
      var template = _.template('<a class="<%=scene%>" target="blank" title="<%=title%>" href="<%=link%>" style="background-image: url(<%=image%>)"></a>'),
          parent = $('.bubble-3').empty();

      $.each(bubbles, function(i, bubble) {
        parent.append(template(bubble));
      });
    };

    api.initBubbles = function () {
      api.getBubbles().success(api.renderBubbles);
    };

    api.activateBubble = function(sceneName) {
      if($('.bubble-wrapper .bubble-3 a.' + sceneName).addClass('active').length) {
        $('.bubble-wrapper').addClass('active');
      }
    };
    api.deactivateBubble = function(sceneName) {
      $('.bubble-wrapper, .bubble-wrapper .bubble-3 a.' + sceneName).removeClass('active');
    };

    api.onTimelineUpdate =  function() {
      var progress = this.progress(),
          offset = 0.25,
          start = 0.15,
          stop = 0.8;

      if(progress > start && progress < stop && !this.bubbleActivated) {
        this.bubbleActivated = true;
        api.activateBubble(this.sceneName);
      } else if ((progress < start || progress > stop) && this.bubbleActivated) {
        this.bubbleActivated = false;
        api.deactivateBubble(this.sceneName);
      }
      // console.log(progress, this.bubbleActivated);
    };


    api.sound = {
      playing: false,
      loaded: false,
      player: null,

      updatePlayerState: function(state) {
        $('#music a').each(function(i, el) {
          var $el = $(el),
              classes = $el.attr('class')
                .split(/\s+/g)
                .filter(function(c) {
                  return c.indexOf('music-') === -1;
                });

          classes.push('music-' + state);
          $el.attr('class', classes.join(' '));
          $el.attr('title', $el.data(state));
        });
      },

      onPlayerReady: function(e) {
        e.target.playVideo();
      },

      onPlayerStateChange: function(e) {
        if(e.data === window.YT.PlayerState.ENDED) {
          api.sound.playing = false;
          api.sound.updatePlayerState('on');
        } else if(e.data === window.YT.PlayerState.PAUSED) {
          api.sound.playing = false;
          api.sound.updatePlayerState('on');
        } else if(e.data === window.YT.PlayerState.PLAYING) {
          api.sound.playing = true;
          api.sound.updatePlayerState('off');
        }
      },

      loadVideo: function() {
        api.sound.loaded = true;
        api.sound.updatePlayerState('loading');
        $.getScript('https://www.youtube.com/iframe_api');
        window.onYouTubeIframeAPIReady = function() {
          api.sound.player = new window.YT.Player('player', {
            height: '0',
            width: '0',
            videoId: '8_2xTSfEVMM',
            events: {
              onReady: api.sound.onPlayerReady,
              onStateChange: api.sound.onPlayerStateChange
            }
          });
        };
      },

      clickHandler: function() {
        if(api.sound.playing) {
          api.sound.player.pauseVideo();
        } else {
          if(api.sound.loaded) {
            api.sound.player.playVideo();
          } else {
            api.sound.loadVideo();
          }
        }

        api.sound.playing = !api.sound.playing;
      },

      init: function() {
        $('#music').on('click', 'a', api.sound.clickHandler)
          .find('a').tipsy({gravity: 'e', fade: true});
        api.sound.updatePlayerState('on');
      }
    };


    var scenes =  api.scenes = [];


    // init controller
    var controller = api.controller = new ScrollMagic({container: '#example-wrapper'});
    var clouds = $('.clouds');
    // init tween
    var tween = TweenMax.to('#mobileadvanced #hill', 1, {rotation: -1 * 360 + 'deg', onUpdate: function() {
      var pos = -(this.progress() * 100) + '% 0';
      clouds.css('background-position', pos);
    }});

    // init scene
    var scene = api.backgroundScene = new ScrollScene({triggerElement: $('#background').get(0), duration: $('.scrollContent').height()})
            .setTween(tween)
            .setPin('#mobileadvanced', {pushFollowers: false})
            .addTo(controller);
    scene.tween = tween;

    scene.on('enter', function (event) {
      $('body').removeClass('finished');
      $('body').addClass('scene-background');
      $(scene.triggerElement()).addClass('active');
      // console.log('enter', scene.triggerElement());
    });

    scene.on('leave', function (event) {
      $(scene.triggerElement()).removeClass('active');
      $('body').addClass('finished');
      $('body').removeClass('scene-background');
      // console.info('leave', scene.triggerElement());
    });

    // scenes.push(scene);

    $('.scene.fixed:last').each(function(i, sceneEl) {
      var s =  new ScrollScene({triggerElement: sceneEl, duration: $('.scrollContent').height(), offset: -200});

      $('.scene-element-wrapper', sceneEl).each(function(i, el) {
        var sceneElement = $('.scene-element', el).get(0),
            timeline = new TimelineMax();

        timeline.insert(TweenMax.fromTo(sceneElement, 1,
          {rotation: '0deg'},
          {rotation: '100deg'}
        ), 0);

        timeline.insert(TweenMax.fromTo('.dana-si-gion .roata', 1,
          {rotation: '0deg'},
          {rotation: 20 * 360 + 'deg'}
        ), 0);

        s
          .setPin(el, {pushFollowers: false})
          .setTween(timeline);

        s.tween = timeline;
      });

      s.on('enter', function (event) {
        $(s.triggerElement()).addClass('active');
        // console.log('enter', s.triggerElement());
      });

      s.on('leave', function (event) {
        $(s.triggerElement()).removeClass('active');
        // console.info('leave', s.triggerElement());
      });

      // scenes.push(s);
      api.bikeScene = s;
      s.addTo(controller);
      // s.addIndicators();

    });

    // actual scenes here
    $('.scene:not(.fixed)').each(function(i, sceneEl) {
      var s = new ScrollScene({
        triggerElement: sceneEl,
        offset: -200,
        duration: $(sceneEl).data('duration') || $(sceneEl).height()
      });

      var sceneName = $(sceneEl).attr('id');

      var timeline = new TimelineMax({
        onUpdate: api.onTimelineUpdate
      });
      timeline.sceneName = sceneName;


       // for scene element (wrapper)
      $('.scene-element-wrapper', sceneEl).each(function(j, el) {
        // get the element
        var $sceneElement = $('.scene-element', el),
            sceneElement = $sceneElement.get(0),
            fade = $sceneElement.hasClass('fade'),
            descriptionElement = $('.scene-description', el),
            from = {rotation: '110deg'},
            to = {rotation: '-90deg'},
            faded = false;

        if(fade) {
          to.onUpdate = function() {
            var p = this.progress();
            if(faded) {
              if(p > 0.01 && p < 0.7) {
                $sceneElement.removeClass('faded');
                faded = false;
              }
            } else {
              if(p < 0.01 || p > 0.7) {
                $sceneElement.addClass('faded');
                faded = true;
              }
            }
          };
        }

        var tween = TweenMax.fromTo(sceneElement, 1, from, to);

        timeline.add(tween);
      });

      var index = scenes.length,
          body = $('body'),
          triggerElement = $(s.triggerElement());

      s.on('enter', function (event) {
        triggerElement.addClass('active');
        $('#bullets .bullet').eq(index).addClass('active');
        body.addClass('scene-' + sceneName);
        // console.log('enter', s.triggerElement());
      });

      s.on('leave', function (event) {
        $('#bullets .bullet').eq(index).removeClass('active');
        triggerElement.removeClass('active');
        body.removeClass('scene-' + sceneName);
        // console.info('leave', s.triggerElement());
      });

      s.setTween(timeline);
      s.tween = timeline;

      // s.setPin(sceneEl/*, {pushFollowers: true}*/);
      s.addTo(controller);
      // s.addIndicators();

      scenes.push(s);
    });


    //extra tweens

    // good morning tween
    var loveTween = TweenMax.fromTo('#love .scrolling-element', 1, {top: '2000px'}, {top: '-2000px'});
    api.scenes[3].tween.add(loveTween);

    // good morning tween
    var goodMorningTween1 = TweenMax.fromTo('.good-morning-1', 1, {top: '-600px'}, {top: 0});
    var goodMorningTween2 = TweenMax.fromTo('.good-morning-2', 1, {top: '600px'}, {top: 0});
    // api.scenes[5].tween.add(goodMorningTween);
    api.scenes[5].tween.insert(goodMorningTween1, 0);
    api.scenes[5].tween.insert(goodMorningTween2, 0);


    // the wall tween
    var theWallTween = TweenMax.fromTo('#the-wall img.the-wall', 1, { top: '500px'},{ top: '-2500px'});
    // api.scenes[7].tween.add(theWallTween);
    api.scenes[7].tween.insert(theWallTween, 0);


    // the ring tween
    var ringTween = TweenMax.fromTo('#the-proposal .ring', 1, {
      'margin-top': -100 * 10 + 'px',
      'margin-left': 180 * 4 + 'px'
    }, {
      'margin-top': '150px',
      'margin-left': '25px',
      onStart: function() {
        $('#the-proposal .hand').addClass('active');
      },
      onUpdate: function() {
        var progress = this.progress();

        if(!this._animatedRing) {
          if(progress > 0.7) {
            $('#the-proposal .ring').addClass('active');
            this._animatedRing = true;
          }
        } else if(progress < 0.7 || progress > 0.9) {
          $('#the-proposal .ring').removeClass('active');
          this._animatedRing = false;
        }

        // if(this.faded) {
        //   if(progress > 0.01 && progress < 0.8) {
        //     $('#the-proposal .hand').removeClass('faded');
        //     this.faded = false;
        //   }
        // } else {
        //   if(progress < 0.01 || progress > 0.8) {
        //     $('#the-proposal .hand').addClass('faded');
        //     this.faded = true;
        //   }
        // }
      },
      onComplete: function() {
        $('#the-proposal .hand').removeClass('active');
      }
    });

    // var handTween = TweenMax.fromTo('#the-proposal .hand', 1, {
    //   top: '500px'
    // },  {
    //   top: '-500px'
    // });

    api.scenes[8].tween.add(ringTween);
    // api.scenes[8].tween.insert(handTween, 0);




    // never's paws
    var pawsContainer = $('#never .paws');
    var pawsTween = TweenMax.to({x:0}, 1, {
      x: 1 ,
      onStart: function() {
        // reset the step classes
        pawsContainer.attr('class', 'scrolling-element paws');
      },
      onUpdate: function() {
        var p = this.progress(),
            totalSteps = 16,
            // using "ceil" because the steps are indexed from 1
            currentStep = Math.ceil(p / (1 / totalSteps)),
            classArr = ['scrolling-element', 'paws'];

        for(var i = 1; i <= currentStep; i++) {
          classArr.push('step-' + i);
        }
        pawsContainer.attr('class', classArr.join(' '));
      }
    });

    api.scenes[9].tween.add(pawsTween);



    // bikes tween
    // simillar to the theWallTween
    var bikesTween = TweenMax.fromTo('#civila img.bikes', 1, {top: '500px'}, {top: '-3000px'});
    api.scenes[10].tween.insert(bikesTween, 0);




    api.controller.update();


    function otherLayoutStuff() {
      $('html').on('click', '.prevent-default', function(e) {
        e.preventDefault();
      });
    }


    // init Iscroll
    function initScroll() {

      // using iScroll but deactivating -webkit-transform because pin wouldn't work because of a webkit bug: https://code.google.com/p/chromium/issues/detail?id=20574
      // if you dont use pinning, keep "useTransform" set to true, as it is far better in terms of performance.
      api.myScroll = new IScroll('#example-wrapper', {
        mouseWheel: true,
        mouseWheelSpeed: 10,
        keyBindings: true,
        momentum: true,
        scrollX: false,
        scrollY: true,
        scrollbars: true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        useTransform: false,
        useTransition: false,
        probeType: 3
      });

      // overwrite scroll position calculation to use child's offset instead of container's scrollTop();
      api.controller.scrollPos(function () {
        return -api.myScroll.y;
      });

      // thanks to iScroll 5 we now have a real onScroll event (with some performance drawbacks)
      api.myScroll.on('scroll', function () {
        api.controller.update();
      });

      $('*').on('keydown', function() {
        api.controller.update();
      });
    }



    function initLangSelector() {
      var $body = $('body');
      $('.lang-selector').on('click', function() {
        $body.toggleClass('lang-en');
      });
      $('.lang-selector').tipsy({gravity: 'e', fade: true});
    }


    // adaptde from http://stackoverflow.com/questions/4127118/can-you-detect-dragging-in-jquery
    function enableDragCursor() {
      var isDragging = false,
          $el = $('#example-wrapper'),
          $win = $(window),
          updateDragClass = function(drag) {
            $el.toggleClass('grabbing', drag);
          };

      $el
        .on('mousedown', function(e) {
          $win.on('mousemove.drag', function() {
            if(isDragging !== true) {
              isDragging = true;
              updateDragClass(isDragging);
            }
            $(window).off('mousemove.drag');
          });
        })
        .on('mouseup', function(e) {
          $win.off('mousemove.drag');
          isDragging = false;
          updateDragClass(isDragging);
        });
    }


    function onResize () {
      var $win = $(window),
        // w = $win.width(),
        w = 1100,
        h = $win.height(),
        fullH = $('.scrollContent').outerHeight();

      api.backgroundScene.duration(fullH - h / 2);
      api.bikeScene.duration(fullH - h / 2);

      $.each(scenes, function(i, sc) {
        var triggerElement = $(sc.triggerElement());
        // sc.duration(triggerElement.height())
      });
      // firstScene.duration($('#scene-1').height());

      $('.scene-element-wrapper').width(w);

      $('.scene-element')
        // .css('min-height', h / 2)
        .css('transformOrigin', (w / 2 + 100) + 'px ' + (h / 2 + 100)  + 'px');
      $('#origin-helper').css({
        top: (h / 2) + ($('.scene.active .scene-element-wrapper').length ? $('.scene.active .scene-element-wrapper').offset().top : 0),
        left: (w / 2)
      });
      // $('#mobileadvanced').width(w);

      //resize the wall image
      $('.full-width')
        .width($win.width())
        .css({
          left: - ($win.width() - w) / 2 + 50
        });
    }

    function getDaysUntilTheWedding() {
      var now = new Date(),
          theDate = new Date('Wed Aug 16 2014 16:00:00 GMT+0300 (EEST)'),
          timeDiff =  Math.abs(theDate.getTime() - now.getTime()),
          diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

      return diffDays;
    }

    function updateDayCountdown() {
      $('.days-left').text(getDaysUntilTheWedding());
    }

    function initBullets() {
      var $body = $('body'),
          getLang = function() {
            return $body.hasClass('lang-en') ? 'en' : 'ro';
          };

      $.each(api.scenes, function(i, sc) {
        var scene = $(sc.triggerElement());

        $('<li class="bullet heart cursor-pointer"></li>')
          .appendTo('#bullets')
          .tipsy({
            gravity: 'e',
            fade: true,
            title: function() {
              return scene.attr('data-title-' + getLang());
            }
          });
      });
    }

    $(window).on('resize', onResize);
    onResize();
    initScroll();
    initBullets();
    enableDragCursor();
    initLangSelector();
    api.initBubbles();
    otherLayoutStuff();
    updateDayCountdown();
    api.sound.init();
  });

}) (this, this.api = (this.api || {}), this.jQuery, this._, this.TweenMax, this.TimelineMax, this.ScrollMagic, this.ScrollScene, this.Modernizr, this.IScroll);
