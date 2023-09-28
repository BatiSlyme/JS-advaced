function lockedProfile() {
    let userButtons = document.querySelectorAll('button');
    console.log(userButtons);
    userButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let userProfile = e.target.parentElement;
            let unlocked = e.target.parentElement.querySelector('input[value="unlock"]');
            let userInfo = userProfile.querySelector('div div');

            // console.log(e.currentTarget);
            if (unlocked.checked) {
                if (e.target.textContent == 'Show more') {
                    userInfo.style.display = 'block';
                    e.target.textContent = 'Hide it';
                } else if (e.target.textContent == 'Hide it') {
                    userInfo.style.display = 'none';
                    e.target.textContent = 'Show more';
                }

            }
        })
    });
}