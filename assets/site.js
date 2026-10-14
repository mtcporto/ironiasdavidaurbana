const field = document.querySelector('#story-search');
if (field) {
  const stories = [...document.querySelectorAll('.story-row')];
  const normalize = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  field.addEventListener('input', () => {
    const terms = normalize(field.value).trim().split(/\s+/).filter(Boolean);
    let count = 0;
    stories.forEach((story) => {
      const text = normalize(story.dataset.search);
      story.hidden = !terms.every((term) => text.includes(term));
      if (!story.hidden) count++;
    });
    document.querySelector('#search-count').textContent = `${count} ${count === 1 ? 'conto encontrado' : 'contos encontrados'}.`;
    document.querySelector('#empty-state').hidden = count > 0;
  });
}
