const menu_switch_content = document.querySelector('.menu-switch-content');
document.querySelector('.menu-switcher-content').addEventListener('input', (e) => {
	menu_switch_content.style.setProperty('--position', `${e.target.value}%`);
})