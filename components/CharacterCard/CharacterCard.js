export function CharacterCard( /// hier dann direkt die Parameter aus dem Datensatz übergeben result.object1.name?
  img_json,
  name_json,
  status_json,
  type_json,
  episode_json
) {
  ////const character_image = img_json;   Brauchen wir hier eine eigene Variable, oder können wir nicht einfach das
  //const character_name = name_json;         unten einsetzen und dann die entsprechenden Parameter übergeben?
  //const character_status = status_json;
  //const character_type = type_json;
  ////const character_episode = episode_json;

  const card = document.createElement("li"); //// hier direkt die Variable ins html einsetzen
  card.innerHTML = `<li class="card">
  <div class=card__image-container">
    <img
      class="card__image"
      src="${character_image}"
      alt="${character_name}"
    />
    <div class="card__image-gradient"></div>
  </div>
  <div class="card__content">
    <h2 class="card__title">Rick Sanchez</h2>
    <dl class="card__info">
      <dt class="card__info-title">Status</dt>
      <dd class="card__info-description">${character_status}</dd>   
      <dt class="card__info-title">Type</dt>
      <dd class="card__info-description">${character_type}</dd>
      <dt class="card__info-title">Occurrences</dt>
      <dd class="card__info-description">${character_episode}</dd>
    </dl>
  </div>
</li>`;
  return card;
}
