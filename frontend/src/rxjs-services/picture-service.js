import { Subject } from  'rxjs';
const pictureSubject$ = new Subject();

const PictureCommunicationService = {
    updatePictureSubject: (picture) => {
        pictureSubject$.next(picture);
    },
    getPictureSubject: () => {
       return pictureSubject$.asObservable();
    }
};

export default PictureCommunicationService;