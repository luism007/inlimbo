
export function PhotoModel(_id, source, lowres_source, title, description, type, collection_id, photo_meta_data){
    this.id = _id,
    this.type= type,
    this.title= title,
    this.source= source,
    this.description= description,
    this.collection_id= collection_id
    this.lowres_source = lowres_source
    this.photo_meta_data = photo_meta_data
}