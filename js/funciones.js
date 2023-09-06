

//AUDIO 1
    function playaudio1() {
        var audio = document.getElementById('audio');
        if (audio.paused) {
            audio.play();
            $('#play').removeClass('sonar')
            $('#play').addClass('silenciar')
            audio2.pause();
             $('#play2').addClass('sonar2')
            $('#play2').removeClass('silenciar2')
            audio3.pause();
             $('#play3').addClass('sonar3')
            $('#play3').removeClass('silenciar3')
             audio4.pause();
            $('#play4').addClass('sonar4')
            $('#play4').removeClass('silenciar4')
        }else{
            audio.pause();
            audio.currentTime = 0
            $('#play').addClass('sonar')
            $('#play').removeClass('silenciar')
        }
    }


//AUDIO 2
    function playaudio2() {
        var audio2 = document.getElementById('audio2');
        if (audio2.paused) {
            audio2.play();
            $('#play2').removeClass('sonar2')
            $('#play2').addClass('silenciar2')
              audio.pause();
             $('#play').addClass('sonar')
            $('#play').removeClass('silenciar')
            audio3.pause();
             $('#play3').addClass('sonar3')
             $('#play3').removeClass('silenciar3')
              audio4.pause();
            $('#play4').addClass('sonar4')
            $('#play4').removeClass('silenciar4')
        }else{
            audio2.pause();
            audio2.currentTime = 0
            $('#play2').addClass('sonar2')
            $('#play2').removeClass('silenciar2')
        }
    }


    //AUDIO 3
    function playaudio3() {
        var audio3 = document.getElementById('audio3');
        if (audio3.paused) {
            audio3.play();
            $('#play3').removeClass('sonar3')
            $('#play3').addClass('silenciar3')
              audio.pause();
             $('#play').addClass('sonar')
            $('#play').removeClass('silenciar')
            audio2.pause();
             $('#play2').addClass('sonar2')
            $('#play2').removeClass('silenciar2')
             audio4.pause();
            $('#play4').addClass('sonar4')
            $('#play4').removeClass('silenciar4')
        }else{
            audio3.pause();
            audio3.currentTime = 0
            $('#play3').addClass('sonar3')
            $('#play3').removeClass('silenciar3')
        }
    }


     //AUDIO 4
    function playaudio4() {
        var audio4 = document.getElementById('audio4');
        if (audio4.paused) {
            audio4.play();
            $('#play4').removeClass('sonar4')
            $('#play4').addClass('silenciar4')
              audio.pause();
             $('#play').addClass('sonar')
            $('#play').removeClass('silenciar')
            audio2.pause();
             $('#play2').addClass('sonar2')
            $('#play2').removeClass('silenciar2')
            audio3.pause();
            $('#play3').addClass('sonar3')
            $('#play3').removeClass('silenciar3')
        }else{
            audio4.pause();
            audio4.currentTime = 0
            $('#play4').addClass('sonar4')
            $('#play4').removeClass('silenciar4')
        }
    }







