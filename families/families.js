import { checkAuth, deleteBunny, getFamilies, logout } from '../fetch-utils.js';

checkAuth();

const familiesEl = document.querySelector('.families-container');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

async function displayFamilies() {
    familiesEl.textContent = ' ';
    const families = await getFamilies();
    for (let family of families) {
        const div = document.createElement('div');
        div.classList.add('family');

        const h3 = document.createElement('h3');
        h3.textContent = family.name;

        const div2 = document.createElement('div');
        div2.classList.add('bunnies');

        for (let bunny of family.fuzzy_bunnies) {
            const div3 = document.createElement('div');
            div3.textContent = bunny.name;
            div3.addEventListener('click', async () => {
                await deleteBunny(bunny.id);
                displayFamilies();
            });
            div2.append(div3);
        }
        div.append(h3, div2);
        familiesEl.append(div);
    }
}
displayFamilies();
