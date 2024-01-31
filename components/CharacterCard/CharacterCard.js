export function CharacterCard(
  img_json,
  name_json,
  status_json,
  type_json,
  episode_json
) {
  const character_image = img_json;
  const character_name = name_json;
  const character_status = status_json;
  const character_type = type_json;
  const character_episode = episode_json;

  const card = document.createElement("li");
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
