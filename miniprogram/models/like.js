import {HTTP} from '../util/http.js'
class LikeModel extends HTTP {
  like(behavior, aryID, category){
      let url = behavior==='like'?'like':'like/cancel'
    this.request({
        url: url,
        method:'POST',
        data:{
            art_id:aryID,
            type:category
        }
    })
  }
}
export {LikeModel}