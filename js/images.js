import request from 'superagent';

export default class Images {
  list(){
    let promise = new Promise((resolve, reject) => {
      request.get('https://www.reddit.com/r/wallpaper.json')
             .end((err, res) => {
                resolve(JSON.parse(res.text).data.children);
             });
    });
    return promise;
  }
}