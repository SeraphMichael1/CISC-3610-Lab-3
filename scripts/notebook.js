document.addEventListener('DOMContentLoaded', init);
let title, notes, clearButton;
function init()
{
    title = document.getElementById('title');
    notes = document.getElementById('notes');
    clearButton = document.getElementById('clearButton');

    title.oninput = () => saveLocal('title', title.value);
    notes.oninput = () => saveLocal('notes', notes.value);
    clearButton.addEventListener('click', clear);

    title.value = getLocal('title');
    notes.value = getLocal('notes');
}
function saveLocal(key, value)
{
    if(localStorage) localStorage.setItem(key, value);
}
function getLocal(key)
{
    let ls;
    if(localStorage)
    {
        try { ls = localStorage.getItem(key) || ''; }
        catch(e) { console.error(e); }
    }
    return ls;
}
function clear()
{
    title.value = '';
    notes.value = '';

    localStorage.removeItem('title');
    localStorage.removeItem('notes');
}