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
        name: bunnyForm.get('name'),
        family_id: bunnyForm.get('family_id'),
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
    // let's dynamically fill in the families dropdown from supabase
    // grab the select HTML element from the DOM

    // go get the families from supabase

    // for each family

    // create an option tag

    // set the option's value and text content

    // and append the option to the select
});


checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});
