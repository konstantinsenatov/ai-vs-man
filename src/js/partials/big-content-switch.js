const aivsman_switch_content = document.querySelector('.aivsman-switch-content');
document.querySelector('.aivsman-switcher-content').addEventListener('input', (e) => {
	aivsman_switch_content.style.setProperty('--position', `${e.target.value}%`);
})