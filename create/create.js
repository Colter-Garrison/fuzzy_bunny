import { 
    createBunny, 
    getFamilies, 
    checkAuth, 
    logout 
} from '../fetch-utils.js';

const form = document.querySelector('.bunny-form');
const logoutButton = document.getElementById('logout');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const bunnyForm = new FormData(form);
    await createBunny({
        name: bunnyForm.get('bunny-name'),
        family_id: bunnyForm.get('family-id'),
    });
    form.reset();
    window.location.href = '/families';
});

window.addEventListener('load', async () => {
    const familyId = document.getElementById('family-id');
    const families = await getFamilies();
    for (let family of families) {
        const option = document.createElement('option');
        option.value = family.id;
        option.textContent = family.name;
        familyId.append(option);
    }
});


checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});
