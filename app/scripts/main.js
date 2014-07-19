
'use strict';

(function (window, api, $, _, TweenMax, TimelineMax, ScrollMagic, ScrollScene, Modernizr, IScroll) {

  $(document).ready(function ($) {
    // return;

    $('#bullets').on('click', '.bullet', function (e) {
      var index = $(e.target).index();
      console.log(index, e.target);
      api.goToScene(index);
    });

    api.animateScroll = function (top, speed) {
      if(api.animateScroll.tween) {
        api.animateScroll.tween.kill();
      }
      console.log('animate scroll', top);

      var scrollContainer = $('.scrollContainer').get(0),
        curScroll = {
          y: scrollContainer.scrollTop
        };

      api.animateScroll.tween = TweenMax.to(curScroll, speed || 1, {
        y: top,
        onUpdate: function() {
          scrollContainer.scrollTop = curScroll.y;
        }
      });
    };


    api.goToScene = function(index) {
      var scene = $('.scene:not(.fixed)').eq(index),
          scrollTop;

      if(!api.scenes[index]) {
        console.error('not a valid index scene', index);
        return false;
      }

      scrollTop = api.scenes[index].startPosition() - $(window).height() /  2 + 10;

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
      $('.bubble-wrapper, .bubble-wrapper .bubble-3 a.' + sceneName).addClass('active');
    };
    api.deactivateBubble = function(sceneName) {
      $('.bubble-wrapper, .bubble-wrapper .bubble-3 a.' + sceneName).removeClass('active');
    };

    api.onTimelineUpdate =  function() {
      var progress = this.progress(),
          offset = 0.4;
      if(progress > offset && progress < 1 - offset && !this.bubbleActivated) {
        this.bubbleActivated = true;
        api.activateBubble(this.sceneName);
      } else if ((progress < offset || progress > 1 - offset) && this.bubbleActivated) {
        this.bubbleActivated = false;
        api.deactivateBubble(this.sceneName);
      }
      console.log(progress, this.bubbleActivated);
    };


    var scenes =  api.scenes = [];


    // init controller
    var controller = api.controller = new ScrollMagic({container: '#example-wrapper'});
    var clouds = $('.clouds');
    // init tween
    var tween = TweenMax.to('#mobileadvanced #hill', 1, {rotation: -2 * 360 + 'deg', onUpdate: function() {
      var pos = -(this.progress() * 100) + '% 0';
      clouds.css('background-position', pos);
    }});

    // init scene
    var scene = api.backgroundScene = new ScrollScene({triggerElement: $('#background').get(0), duration: $('.scrollContent').height()})
            .setTween(tween)
            .setPin('#mobileadvanced', {pushFollowers: false})
            .addTo(controller);

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
        var sceneElement = $('.scene-element', el).get(0);

        s
          .setPin(el, {pushFollowers: false})
          .setTween(
            TweenMax.fromTo(sceneElement, 1,
              {rotation: '-125deg'},
              {rotation: '125deg'}
            )
          );
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
      s.addIndicators();

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
        var sceneElement = $('.scene-element', el).get(0),
            descriptionElement = $('.scene-description', el);

        var tween = TweenMax.fromTo(sceneElement, 1,
            // {rotation: '135deg'},
            // {rotation: '-45deg'}
            {rotation: '135deg'},
            {rotation: '-135deg'}
          );

        timeline.add(tween);
      });

      s.on('enter', function (event) {
        $(s.triggerElement()).addClass('active');
        var index = scenes.indexOf(s);
        $('#bullets .bullet').removeClass('active').eq(index).addClass('active');
        $('body').addClass('scene-' + sceneName);
        // console.log('enter', s.triggerElement());
      });

      s.on('leave', function (event) {
        $(s.triggerElement()).removeClass('active');
        $('body').removeClass('scene-' + sceneName);
        // console.info('leave', s.triggerElement());
      });

      s.setTween(timeline);
      // s.setPin(sceneEl/*, {pushFollowers: true}*/);
      s.addTo(controller);
      s.addIndicators();

      scenes.push(s);
    });

    // var firstScene = new ScrollScene({triggerElement: '#scene-1', duration: $('#scene-1').height(), offset: 0})
    //          .addTo(controller);


    // make sure we only do this on mobile:
    if (Modernizr.touch) {
      // using iScroll but deactivating -webkit-transform because pin wouldn't work because of a webkit bug: https://code.google.com/p/chromium/issues/detail?id=20574
      // if you dont use pinning, keep "useTransform" set to true, as it is far better in terms of performance.
      var myScroll = new IScroll('#example-wrapper', {scrollX: false, scrollY: true, scrollbars: true, useTransform: false, useTransition: false, probeType: 3});

      // overwrite scroll position calculation to use child's offset instead of container's scrollTop();
      controller.scrollPos(function () {
        return -myScroll.y;
      });

      // thanks to iScroll 5 we now have a real onScroll event (with some performance drawbacks)
      myScroll.on('scroll', function () {
        controller.update();
      });

      // add indicators to scrollcontent so they will be moved with it.
      scene.addIndicators({parent: '.scrollContent'});
    } else {
      // show indicators (requires debug extension)
      scene.addIndicators();
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
    }


    $.each(api.scenes, function() {
      $('<li class="bullet heart cursor-pointer"></li>').appendTo('#bullets');
    });

    $(window).on('resize', onResize);
    onResize();

    api.initBubbles();

  });

}) (this, this.api = (this.api || {}), this.jQuery, this._, this.TweenMax, this.TimelineMax, this.ScrollMagic, this.ScrollScene, this.Modernizr, this.IScroll);
