notebook.addEventListener('DOMContentLoaded', init);
let title, notes, clearButton;
function init()
{
    title = notebook.getElementById('title');
    notes = notebook.getElementById('notes');
    clearButton = notebook.getElementById('clearButton');

    title.oninput = () => saveToLS('title', title.value);
    notes.oninput = () => saveToLS('notes', notes.value);
    clearButton.addEventListener('click', clear);

    title.value = getFromLS('title');
    notes.value = getFromLS('notes');
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