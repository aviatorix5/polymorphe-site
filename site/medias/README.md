# Dossier medias

Déposez ici toutes vos images (jpg, png, webp…).

Ensuite, dans les fichiers HTML, remplacez les placeholders `<div class="img-slot …">` par :

    <img src="medias/votre-image.jpg" alt="description" class="img-slot wide">

ou conservez le placeholder en y ajoutant l'image en fond :

    <div class="img-slot wide" style="background-image:url(medias/votre-image.jpg); background-size:cover; background-position:center"></div>

Conseils :
- Compressez vos images avant de les uploader (TinyPNG, Squoosh) pour un site rapide.
- Largeur max recommandée : 2000 px.
- Nommez vos fichiers sans accents ni espaces : `renaissance-01.jpg` plutôt que `Renaissance — visuel.jpg`.
