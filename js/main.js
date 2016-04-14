import Images from 'js/images';

function renderImages (images) {
  let urls = images
            .filter(obj => obj.data.post_hint === 'image')
            .filter(obj => !obj.data.over_18)
            .map(obj => obj.data.url);
  urls.forEach(url => {
    let element = document.createElement('img');
    element.setAttribute('src', url);
    document.body.appendChild(element);
  });
}

let images = new Images();
images.list()
      .then(renderImages);