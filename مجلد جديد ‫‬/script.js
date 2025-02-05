const currentMonth = new Date().toLocaleString('default', { month: 'long' });
document.getElementById('current-month').innerText = currentMonth;
document.getElementById('month-name').innerText = currentMonth;

const cityTimes = {
    fajr: '5:00 AM',
    dhuhr: '12:15 PM',
    asr: '3:45 PM',
    maghrib: '6:15 PM',
    isha: '7:30 PM'
};

function fillMonthlyPrayerTimes(month) {
    const tbody = document.getElementById('monthly-prayer-times').getElementsByTagName('tbody')[0];
    tbody.innerHTML = "";
    for (let day = 1; day <= 28; day++) {
        let row = tbody.insertRow();
        row.insertCell(0).innerText = day;
        row.insertCell(1).innerText = cityTimes.fajr;
        row.insertCell(2).innerText = cityTimes.dhuhr;
        row.insertCell(3).innerText = cityTimes.asr;
        row.insertCell(4).innerText = cityTimes.maghrib;
        row.insertCell(5).innerText = cityTimes.isha;
    }
}

fillMonthlyPrayerTimes();

function printMonthlyTimes() {
    const month = document.getElementById('month-selector').value;
    alert('الطباعة لشهر ' + month);
    window.print();
}

function copyLink() {
    const link = window.location.href;
    navigator.clipboard.writeText(link).then(() => {
        alert("تم نسخ الرابط: " + link);
    });
}

function getTimeRemaining(prayerTime) {
    const now = new Date();
    const prayerDate = new Date('2025-02-05 ' + prayerTime);
    const timeDiff = prayerDate - now;
    if (timeDiff <= 0) {
        return "لقد حان وقت الصلاة!";
    }

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    return `${hours} ساعة, ${minutes} دقيقة, ${seconds} ثانية`;
}

function updatePrayerCountdowns() {
    document.getElementById('fajr-countdown').innerText = getTimeRemaining(cityTimes.fajr);
    document.getElementById('dhuhr-countdown').innerText = getTimeRemaining(cityTimes.dhuhr);
    document.getElementById('asr-countdown').innerText = getTimeRemaining(cityTimes.asr);
    document.getElementById('maghrib-countdown').innerText = getTimeRemaining(cityTimes.maghrib);
    document.getElementById('isha-countdown').innerText = getTimeRemaining(cityTimes.isha);
}

setInterval(updatePrayerCountdowns, 1000);
