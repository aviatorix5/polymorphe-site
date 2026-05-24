# Site Polymorphe — Frédéric Costes-Hadjami

Site statique en HTML/CSS/JS pur. Aucune dépendance à installer, aucune base de données. Bilingue FR/EN.

---

## 📁 Structure des fichiers

```
site/
├── index.html               ← Page d'accueil
├── bio.html                 ← Biographie
├── contact.html             ← Page contact
├── projets/
│   ├── renaissance.html
│   ├── depression-purgatory.html
│   ├── rituel-pour-une-mue.html
│   └── andro-gyne.html
├── css/
│   └── styles.css           ← Tout le style du site (couleurs, typo…)
├── js/
│   └── site.js              ← Bascule de langue FR/EN
├── medias/                  ← Vos images vont ici
└── README.md                ← Ce fichier
```

---

## ✍️ Comment modifier le contenu

### Modifier un texte
Ouvrez le fichier HTML correspondant (par exemple `bio.html`) avec un éditeur de texte (TextEdit, VSCode, Notepad…) et trouvez le texte à modifier.

Les versions FR et EN coexistent dans le même fichier. Elles sont identifiées par `lang="fr"` et `lang="en"` :

```html
<span lang="fr">Bonjour</span>
<span lang="en">Hello</span>
```

Modifiez l'une, l'autre, ou les deux. Le visiteur ne verra que la langue active.

### Ajouter une image
1. Déposez l'image dans le dossier `medias/` (formats `.jpg`, `.png` ou `.webp` recommandés).
2. Dans le fichier HTML de la page, remplacez le placeholder :

```html
<div class="img-slot wide" data-label="…"></div>
```

par :

```html
<img src="medias/mon-image.jpg" alt="Description de l'image" class="img-slot wide">
```

ou utilisez l'image comme fond :

```html
<div class="img-slot wide" style="background-image:url(medias/mon-image.jpg); background-size:cover; background-position:center"></div>
```

### Changer une couleur ou la typographie
Ouvrez `css/styles.css`. Tout en haut (`:root { … }`) vous trouverez les variables :

```css
--bg: #0c0a08;         /* fond */
--fg: #efe8d8;         /* texte principal */
--gold: #bfa874;       /* doré accent */
```

Modifiez les valeurs, sauvegardez, rafraîchissez le navigateur.

---

## 🚀 Mise en ligne

### Étape 1 — Acheter un nom de domaine
Hébergeurs/registrars recommandés :
- **OVH** (français, abordable)
- **Gandi** (français, pratiques transparentes)
- **Hostinger**, **Infomaniak** (suisse)

Comptez 10 à 15 € / an pour le domaine.

### Étape 2 — Prendre un hébergement
Pour un site statique comme celui-ci, un hébergement mutualisé basique suffit largement (~3 € / mois). Vous pouvez aussi héberger gratuitement sur :
- **Netlify** ou **Vercel** : déposez le dossier `site/`, c'est en ligne en 30 secondes. Vous pouvez pointer votre domaine OVH/Gandi dessus.
- **GitHub Pages** : si vous utilisez Git.

### Étape 3 — Uploader les fichiers
Avec un hébergement classique : utilisez **FileZilla** (gratuit) ou l'interface FTP de votre hébergeur. Uploadez **tout le contenu du dossier `site/`** dans la racine de votre espace web (souvent appelée `www/` ou `public_html/`).

Avec Netlify : glissez-déposez simplement le dossier `site/` sur l'interface de Netlify.

---

## 🌍 Bascule de langue

La bascule FR/EN se fait via JavaScript. Le choix de langue est mémorisé dans le navigateur (`localStorage`) — l'utilisateur reste dans sa langue préférée d'une page à l'autre.

Par défaut le site s'affiche en français. Pour qu'il s'ouvre en anglais par défaut, ajoutez `lang="en"` à la balise `<html>` au lieu de `lang="fr"`.

---

## 🎨 Direction visuelle

**B1 — Didone théâtrale**
- Typo principale : Bodoni Moda (Google Fonts)
- Couleurs : noir profond `#0c0a08`, crème `#efe8d8`, doré `#bfa874`
- Cadre intérieur fin sur toutes les pages (signature visuelle)
- Composition centrée, esprit affiche d'opéra

---

## ❓ Questions

Si quelque chose ne s'affiche pas comme attendu, ouvrez la console du navigateur (clic droit → Inspecter → Console) et vérifiez les erreurs.
