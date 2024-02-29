var countDowndate = new Date();
countDowndate.setDate(countDowndate.getDate() + 10);
countDowndate.setHours(11, 30, 0);

var x = setInterval(function(){
    var now = new Date() . getTime();
    var t= countDowndate - now;

    var days = Math.floor(t / (1000 * 60 *60 *24));
    var hours = Math.floor((t %(1000 * 60 * 60 * 24 )) / (1000 * 60 *60));
    var minutes = Math.floor(( t % (1000 * 60 * 60)) / (1000* 60));
    var seconds = Math.floor((t % (1000 * 60)) /1000);

    const format = (num) => {
        return `${num}`.padStart(2, `0`);
    };

    document.getElementById("days"). innerHTML = format(days);
    document.getElementById("hours"). innerHTML = format(hours);
    document.getElementById("minutes"). innerHTML = format(minutes);
    document.getElementById("seconds"). innerHTML = format(seconds);

    if (t<0){
        clearInterval(x);
        document.getElementById("days"). innerHTML = "00";
        document.getElementById("hours"). innerHTML = "00";
        document.getElementById("minutes"). innerHTML = "00";
        document.getElementById("seconds"). innerHTML = "00";
    }

},1000);