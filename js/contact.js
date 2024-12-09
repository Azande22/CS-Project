document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-btn');
    const timezoneDisplay = document.getElementById('timezone');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        fetchTimezone();
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });


    async function fetchTimezone() {
        try {
            const response = await fetch('http://worldtimeapi.org/api/ip');
            if (!response.ok) {
                throw new Error(`Timezone API error: ${response.statusText}`);
            }

            const data = await response.json();
            const timezone = data.timezone || 'Unknown timezone';
            const localTime = new Date(data.datetime).toLocaleString();

            timezoneDisplay.innerHTML = `Local Timezone: ${timezone}<br>Local Time: ${localTime}`;
        } catch (error) {
            console.error('Failed to fetch timezone:', error);
            timezoneDisplay.innerHTML = 'Could not fetch timezone information.';
        }
    }
});
