import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => { 
    return (
      <motion.div
      initial = {{y: '100%', opacity: 0.5}}
      animate = {{y: 0, opacity: 1}}
      exit= {{y: '100%', opacity: 0.5}}
      transition={{duration: 2}}
      >
        <h2> Courses </h2>
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
      </motion.div>
    );
}

export default AboutMe;