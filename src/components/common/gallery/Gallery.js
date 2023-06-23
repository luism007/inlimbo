import React, { useEffect, useRef, useState } from "react";
import PictureCommunicationService from "../../../rxjs-services/picture-service";
import * as photosApi from '../../../api/PhotosApi';
import Spinner from "../loading/Spinner";
import './Gallery.css';
import MiniGallery from "../mini-gallery/MiniGallery";
import { fadeInKeyframes, fadeInOptions } from "../../../models/AnimationsModel";
const Gallery = (props) => {
  
    const [gridPhotos, setGridPhotos] = useState([]);
    const [photoInView, setPhotoInView] = useState(null);
    const [galleryState, setGalleryState] = useState('pause');
    const [currentIndex, setCurrentIndex] = useState(0);
    let interval = useRef(null);
    let subscription$;

    useEffect(() => {
       subscription$ =
         PictureCommunicationService.getPictureSubject().subscribe((p) => {
           setPhotoInView(p);
           animateActivePhoto();
           getRelatedPics(p);
         });

          interval.current = setInterval(() => {
            if(galleryState === 'play') {
              nextPhoto();
              clearInterval(interval);
            }
          }, 3000);

          return () => {
              clearInterval(interval.current);
              subscription$.unsubscribe();
          }
    }, [currentIndex, photoInView, gridPhotos, galleryState]);

    const play = () => {
      setGalleryState('play');
    }
    const pause = () => {
      setGalleryState('pause');
    }

    const viewMiniGallery = () => {
      const mini = document.getElementById('miniGallery');
      mini.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }
    const animateActivePhoto = () => {
        let active = document.getElementById('active-photo');
        (active) ? active.animate(fadeInKeyframes, fadeInOptions) : null;
    }


    const setPhoto = (index) => {
        setCurrentIndex(index);
        animateActivePhoto();
        setPhotoInView(gridPhotos[index]);
    }

    const nextPhoto = () => {
        let index = currentIndex;
        index += 1;
        if(index >= gridPhotos.length) {
            index = 0;
        }
        setPhoto(index);
    }

    const prevPhoto = () => {
        let index = currentIndex;
        index -= 1;
        if(index < 0) {
            index = gridPhotos.length - 1;
        }
        setPhoto(index);
    }

    const configureStart = (photos, photo) => {
      let index = photos.findIndex((p) => {
          return (p._id === photo._id);
      });
      index = (index < 0) ? 0 : index;
      setGridPhotos([photo, ...photos])
      setCurrentIndex(index);
  }

  const getRelatedPics = async (photo) => {
      const photos = await photosApi.getPhotosByCollectionId(photo.collection_id, photo.id);
      configureStart(photos, photo);
  }

  const close = () => {
    setGalleryState('pause');
    props.closeOverlay();
  }

    return (
      <div className="overlay-container">
        <div className="overlay-preview-container">
          <div className="overlay-pic-showcase-container">
            <div className="gallery-hide-button-container">
              <span className="close-btn">
                <img
                  src="public/images/close-x.svg"
                  onClick={close}
                ></img>
              </span>
            </div>
            <div className="overlay-pic-showcase">
              {photoInView ? (
                <img
                  className="overlay-pic"
                  id="active-photo"
                  src={photoInView.source}
                ></img>
              ) : (
                <Spinner></Spinner>
              )}
              <div className="gallery-control-container">
                <div className="overlay-gallery-button-left">
                  <span>
                    <img
                      src="public/images/left-arrow.svg"
                      onClick={prevPhoto}
                    ></img>
                  </span>
                </div>
                {galleryState === "play" ? (
                  <img
                    src="public/images/pause-button.svg"
                    onClick={pause}
                  ></img>
                ) : (
                  <img src="public/images/play-button.svg" onClick={play}></img>
                )}
                <img src ="public/images/gallery-icon.svg" onClick={viewMiniGallery}></img>
                <div className="overlay-gallery-button-right">
                  <span>
                    <img
                      src="public/images/right-arrow.svg"
                      onClick={nextPhoto}
                    ></img>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {photoInView && gridPhotos && (
            <MiniGallery
              photos={gridPhotos}
              photoInView={photoInView}
              setPhoto={setPhoto}
            ></MiniGallery>
          )}
        </div>
        <div className="overlay-pic-description-container">
          <p className="overlay-pic-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque placerat mauris nec magna ornare, ac tincidunt orci
            facilisis. Suspendisse interdum odio ut diam blandit, quis gravida
            erat feugiat. Mauris convallis cursus mauris sed auctor. Sed
            convallis libero libero, id finibus sapien luctus nec. Proin
            imperdiet molestie pellentesque. Aenean ultricies vel turpis eget
            accumsan. Morbi facilisis, justo at venenatis consequat, eros lectus
            sagittis risus, pellentesque sodales est libero nec sapien. Morbi
            sit amet pellentesque est, et malesuada risus. Nam pulvinar magna
            orci, a ullamcorper leo fringilla nec. Phasellus aliquam sapien
            vulputate, aliquet massa sit amet, suscipit risus. Aenean a libero
            ultrices, accumsan urna nec, tristique mauris. Duis porttitor nibh
            massa, nec vulputate neque tempor nec. Duis placerat, nunc eget
            imperdiet porta, tortor mauris ultrices libero, hendrerit dapibus
            elit diam vitae risus. Maecenas a tellus et nisi tristique finibus
            eu ac lorem. Vivamus efficitur blandit viverra. Maecenas faucibus
            pulvinar justo, rutrum mattis ante laoreet sed. Phasellus rhoncus
            massa egestas mi malesuada, cursus sodales nisi scelerisque.
            Maecenas imperdiet consectetur laoreet. In hac habitasse platea
            dictumst. Suspendisse potenti. Maecenas in gravida nunc. Nunc non ex
            luctus nisl pulvinar vestibulum. Nullam rhoncus lorem lectus, quis
            suscipit orci pulvinar eu. Nulla eget ante eu sem suscipit placerat
            id sed diam. Nulla non varius erat. Etiam elementum sapien id neque
            lobortis, ut elementum dolor dictum. Curabitur malesuada libero sit
            amet dui porta eleifend. Aenean pharetra, leo sed facilisis
            eleifend, risus nisl vestibulum mauris, sed ultricies ligula justo
            ac nulla. Etiam et dignissim velit. Sed faucibus mauris augue, sit
            amet euismod ligula ultrices eleifend. Pellentesque eget pharetra
            est. Suspendisse vitae turpis ullamcorper, lobortis lorem eget,
            accumsan metus. Vivamus gravida scelerisque sagittis. Quisque sed
            metus faucibus, interdum sapien nec, fringilla purus. Morbi
            efficitur, urna a scelerisque vehicula, sem est condimentum arcu,
            vel vestibulum tortor elit ac augue. Duis ut velit sed leo laoreet
            porttitor vitae id nunc. Etiam fermentum condimentum enim venenatis
            accumsan. Vestibulum dolor lorem, tincidunt consectetur quam non,
            porta blandit nisl. Integer ligula massa, pulvinar vitae leo
            egestas, eleifend eleifend enim. Morbi facilisis turpis tellus, et
            porta felis finibus sit amet. Pellentesque finibus sed tellus at
            porttitor. Maecenas eu leo ac ligula mollis bibendum ut vitae nunc.
            Etiam vitae consectetur justo. Aenean id feugiat nisl. Morbi nec
            risus condimentum, tincidunt libero non, aliquam sem. Donec
            tincidunt dictum eros ut sodales. Proin eget iaculis est. Sed quis
            placerat enim. Pellentesque a aliquet purus, at ultrices est.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Mauris et rhoncus eros. Vestibulum et
            consectetur nisi, vitae auctor purus. Aenean non iaculis elit. Nulla
            fermentum in diam non fermentum. Aliquam hendrerit euismod enim, nec
            venenatis nulla pellentesque in. Donec eget molestie sapien. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. In eu mi felis. Nam porta nisi id neque tempor, at
            hendrerit nibh convallis. Maecenas efficitur facilisis leo, sed
            tempor tortor malesuada quis. Quisque bibendum erat est, nec mollis
            risus mattis vitae. Curabitur nec euismod ex. Etiam tincidunt dolor
            nibh, quis interdum felis tristique ut. Morbi risus enim, finibus ac
            tortor id, porta rhoncus odio.
          </p>
        </div>
      </div>
    );
}

export default Gallery;