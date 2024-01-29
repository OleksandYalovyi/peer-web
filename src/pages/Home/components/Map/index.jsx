import React from 'react'
import T from 'prop-types'
import GetPeerImage from 'assets/Home/Map/GetPeer.png'
import ThreeDMapsImage from 'assets/Home/Map/ThreeDMaps.png'
import LoveCollectionImage from 'assets/Home/Map/LoveCollection.png'
import LYSMImageImage from 'assets/Home/Map/LYSM.png'
import LNY2024Image from 'assets/Home/Map/LNY2024.png'
import LNY20241Image from 'assets/Home/Map/LNY2024_1.png'
import Boom1Image from 'assets/Home/Map/Boom_1.png'
import NewChatImage from 'assets/Home/Map/NewChat.png'
import ImageGalleryImage from 'assets/Home/Map/ImageGallery.png'
import LNY20242Image from 'assets/Home/Map/LNY2024_2.png'
import WonkaDistrictImage from 'assets/Home/Map/WonkaDistrict.png'
import DuckImage from 'assets/Home/Map/Duck.png'
import PoopGoldenImage from 'assets/Home/Map/PoopGolden.png'
import AppleImage from 'assets/Home/Map/Apple.png'
import CupCakeImage from 'assets/Home/Map/Cupcake.png'
import RocketImage from 'assets/Home/Map/Rocket.png'
import SunglassesImage from 'assets/Home/Map/Sunglasses.png'
import StarImage from 'assets/Home/Map/Star.png'
import HiImage from 'assets/Home/Map/Hi.png'
import HandImage from 'assets/Home/Map/Hand.png'
import CheckImage from 'assets/Home/Map/Check.png'
import IceCreamImage from 'assets/Home/Map/IceCream.png'
import GamepadImage from 'assets/Home/Map/Gamepad.png'
import CellphoneImage from 'assets/Home/Map/Cellphone.png'
import ValentinesImage from 'assets/Home/Map/Valentines.png'
import useCurrentSize from 'hooks/useCurrentSize'
import styles from './map.module.scss'

const mapData = [
  {
    type: 'link',
    name: '3D Maps',
    src: ThreeDMapsImage,
    styles: {
      desktop: {
        width: 500,
        height: 560,
        left: 1879,
        top: 76,
      },
      high: {
        width: 303,
        height: 341,
        left: 1145,
        top: 46,
      },
      tablet: {
        width: 247,
        height: 278,
        left: 932,
        top: 37,
      },
      phone: {
        width: 224,
        height: 252,
        left: 233,
        top: 128,
      },
    },
  },
  {
    type: 'link',
    name: 'Get peer',
    src: GetPeerImage,
    styles: {
      desktop: {
        width: 374,
        height: 311,
        left: 989,
        top: 85,
      },
      high: {
        width: 228,
        height: 190,
        left: 603,
        top: 51,
      },
      tablet: {
        width: 185,
        height: 154,
        left: 491,
        top: 42,
      },
      phone: {
        width: 168,
        height: 140,
        left: 255,
        top: 0,
      },
    },
  },
  {
    type: 'link',
    name: 'Love Collection',
    src: LoveCollectionImage,
    styles: {
      desktop: {
        width: 664,
        height: 664,
        left: 45,
        top: 296,
      },
      high: {
        width: 405,
        height: 405,
        left: 27,
        top: 180,
      },
      tablet: {
        width: 329,
        height: 329,
        left: 22,
        top: 147,
      },
      phone: {
        width: 298,
        height: 298,
        left: 34,
        top: -15,
      },
    },
  },
  {
    type: 'link',
    name: 'LYSM',
    src: LYSMImageImage,
    styles: {
      desktop: {
        width: 844,
        height: 370,
        left: 808,
        top: 1309,
      },
      high: {
        width: 514,
        height: 226,
        left: 493,
        top: 773,
      },
      tablet: {
        width: 419,
        height: 419,
        left: 401,
        top: 617,
      },
      phone: {
        width: 337,
        height: 148,
        left: 76,
        top: 780,
      },
    },
  },
  {
    type: 'link',
    name: 'LNY 2024',
    src: LNY2024Image,
    styles: {
      desktop: {
        width: 660,
        height: 660,
        left: 1744,
        top: 1983,
      },
      high: {
        width: 402,
        height: 402,
        left: 1063,
        top: 1208,
      },
      tablet: {
        width: 328,
        height: 328,
        left: 865,
        top: 984,
      },
      phone: {
        width: 264,
        height: 264,
        left: 193,
        top: 1280,
      },
    },
  },
  {
    type: 'link',
    name: 'LNY 2024',
    src: LNY20241Image,
    styles: {
      desktop: {
        width: 808,
        height: 808,
        left: 368,
        top: 1925,
      },
      high: {
        width: 493,
        height: 493,
        left: 224,
        top: 1173,
      },
      tablet: {
        width: 401,
        height: 401,
        left: 183,
        top: 955,
      },
      phone: {
        width: 323,
        height: 323,
        left: 18,
        top: 1352,
      },
    },
  },
  {
    type: 'link',
    name: 'New Chat',
    src: NewChatImage,
    styles: {
      desktop: {
        width: 487,
        height: 366,
        left: 1920,
        top: 880,
      },
      high: {
        width: 297,
        height: 223,
        left: 1170,
        top: 536,
      },
      tablet: {
        width: 242,
        height: 182,
        left: 953,
        top: 437,
      },
      phone: {
        width: 194,
        height: 146,
        left: 233,
        top: 605,
      },
    },
  },
  {
    type: 'link',
    name: 'Boom #1',
    src: Boom1Image,
    styles: {
      desktop: {
        width: 696,
        height: 696,
        left: 1239,
        top: 570,
      },
      high: {
        width: 424,
        height: 424,
        left: 755,
        top: 347,
      },
      tablet: {
        width: 345,
        height: 345,
        left: 615,
        top: 283,
      },
      phone: {
        width: 313,
        height: 313,
        left: 198,
        top: 312,
      },
    },
  },
  {
    type: 'link',
    name: 'Image Gallery',
    src: ImageGalleryImage,
    styles: {
      desktop: {
        width: 505,
        height: 302,
        left: 143,
        top: 1115,
      },
      high: {
        width: 308,
        height: 184,
        left: 87,
        top: 679,
      },
      tablet: {
        width: 250,
        height: 150,
        left: 70,
        top: 553,
      },
      phone: {
        width: 227,
        height: 136,
        left: 58,
        top: 500,
      },
    },
  },
  {
    type: 'link',
    name: 'LNY 2024',
    src: LNY20242Image,
    styles: {
      desktop: {
        width: 449,
        height: 400,
        left: 196,
        top: 1608,
      },
      high: {
        width: 274,
        height: 244,
        left: 119,
        top: 980,
      },
      tablet: {
        width: 223,
        height: 198,
        left: 97,
        top: 798,
      },
      phone: {
        width: 179,
        height: 159,
        left: 57,
        top: 932,
      },
    },
  },
  {
    type: 'link',
    name: 'Wonka district',
    src: WonkaDistrictImage,
    styles: {
      desktop: {
        width: 510,
        height: 510,
        left: 688,
        top: 554,
      },
      high: {
        width: 311,
        height: 311,
        left: 419,
        top: 338,
      },
      tablet: {
        width: 253,
        height: 253,
        left: 341,
        top: 275,
      },
      phone: {
        width: 229,
        height: 229,
        left: 52,
        top: 246,
      },
    },
  },
  {
    type: 'image',
    src: DuckImage,
    name: 'Peer Duck',
    styles: {
      desktop: {
        width: 520,
        height: 520.148,
        left: 1776,
        top: 1320,
      },
      high: {
        width: 316,
        height: 31,
        left: 1082,
        top: 804,
      },
      tablet: {
        width: 258,
        height: 258,
        left: 881,
        top: 655,
      },
      phone: {
        width: 208,
        height: 208,
        left: 204,
        top: 868,
      },
    },
  },
  {
    type: 'image',
    src: PoopGoldenImage,
    name: 'Peer Poop Gold',
    styles: {
      desktop: {
        width: 702,
        height: 701,
        left: 1039,
        top: 1650,
      },
      high: {
        width: 427,
        height: 427,
        left: 633,
        top: 1005,
      },
      tablet: {
        width: 348,
        height: 347,
        left: 515,
        top: 819,
      },
      phone: {
        width: 280,
        height: 280,
        left: 80,
        top: 1007,
      },
    },
  },
  {
    type: 'image',
    src: AppleImage,
    name: 'Peer Apple',
    styles: {
      desktop: {
        width: 411,
        height: 411,
        left: 120,
        top: 2516,
      },
      high: {
        width: 250,
        height: 250,
        left: 73,
        top: 1533,
      },
      tablet: {
        width: 203,
        height: 203,
        left: 59,
        top: 1248,
      },
      phone: {
        width: 164,
        height: 164,
        left: 18,
        top: 1576,
      },
    },
  },
  {
    type: 'image',
    src: CupCakeImage,
    name: 'Peer Cupcake',
    styles: {
      desktop: {
        width: 459,
        height: 459,
        left: 1458,
        top: 2479,
      },
      high: {
        width: 280,
        height: 280,
        left: 888,
        top: 1510,
      },
      tablet: {
        width: 228,
        height: 228,
        left: 723,
        top: 1230,
      },
      phone: {
        width: 183,
        height: 183,
        left: 219,
        top: 1805,
      },
    },
  },
  {
    type: 'button',
    name: 'get the app',
    styles: {
      desktop: {
        width: 340,
        height: 106,
        left: 1110,
        top: 3630,
      },
      high: {
        width: 207,
        height: 64,
        left: 676,
        top: 2212,
      },
      tablet: {
        width: 168,
        height: 52,
        left: 551,
        top: 1801,
      },
      phone: {
        width: 222,
        height: 66,
        left: 136,
        top: 2330,
      },
    },
  },
  {
    type: 'image',
    src: RocketImage,
    name: 'Peer Rocket',
    styles: {
      desktop: {
        width: 388,
        height: 388,
        left: 1480,
        top: 3112,
      },
      high: {
        width: 236,
        height: 236,
        left: 902,
        top: 1896,
      },
      tablet: {
        width: 192,
        height: 192,
        left: 734,
        top: 1544,
      },
      phone: {
        width: 155,
        height: 155,
        left: 100,
        top: 1873,
      },
    },
  },
  {
    type: 'image',
    src: SunglassesImage,
    name: 'Peer Sunglasses',
    styles: {
      desktop: {
        width: 264,
        height: 264,
        left: 625,
        top: 3312,
      },
      high: {
        width: 161,
        height: 161,
        left: 381,
        top: 2018,
      },
      tablet: {
        width: 131,
        height: 131,
        left: 310,
        top: 1643,
      },
      phone: {
        width: 105,
        height: 105,
        left: 209,
        top: 2164,
      },
    },
  },
  {
    type: 'image',
    src: StarImage,
    name: 'Peer Star',
    styles: {
      desktop: {
        width: 537,
        height: 537,
        left: 1857,
        top: 2791,
      },
      high: {
        width: 327,
        height: 327,
        left: 1132,
        top: 1701,
      },
      tablet: {
        width: 266,
        height: 266,
        left: 921,
        top: 1385,
      },
      phone: {
        width: 171,
        height: 171,
        left: 219,
        top: 1988,
      },
    },
  },
  {
    type: 'image',
    src: HiImage,
    name: 'Peer Hi',
    styles: {
      desktop: {
        width: 652,
        height: 652,
        left: 1627,
        top: 3340,
      },
      high: {
        width: 397,
        height: 397,
        left: 991,
        top: 2035,
      },
      tablet: {
        width: 323,
        height: 323,
        left: 807,
        top: 1657,
      },
      phone: {
        width: 179,
        height: 190,
        left: 220,
        top: 2424,
      },
    },
  },
  {
    type: 'image',
    src: HandImage,
    name: 'Peer Hand',
    styles: {
      desktop: {
        width: 526,
        height: 526,
        left: 138,
        top: 3384,
      },
      high: {
        width: 320,
        height: 320,
        left: 84,
        top: 2062,
      },
      tablet: {
        width: 260,
        height: 260,
        left: 68,
        top: 1679,
      },
      phone: {
        width: 210,
        height: 210,
        left: 17,
        top: 2012,
      },
    },
  },
  {
    type: 'image',
    src: CheckImage,
    name: 'Peer Check',
    styles: {
      desktop: {
        width: 441,
        height: 441,
        left: 622,
        top: 3737,
      },
      high: {
        width: 269,
        height: 269,
        left: 379,
        top: 2277,
      },
      tablet: {
        width: 219,
        height: 219,
        left: 309,
        top: 1854,
      },
      phone: {
        width: 131,
        height: 101,
        left: 123,
        top: 2420,
      },
    },
  },
  {
    type: 'image',
    src: IceCreamImage,
    name: 'Peer IceCream',
    styles: {
      desktop: {
        width: 484,
        height: 484,
        left: 1217,
        top: 3788,
      },
      high: {
        width: 295,
        height: 295,
        left: 741,
        top: 2308,
      },
      tablet: {
        width: 240,
        height: 240,
        left: 604,
        top: 1879,
      },
      phone: {
        width: 193,
        height: 193,
        left: 50,
        top: 2548,
      },
    },
  },
  {
    type: 'image',
    src: GamepadImage,
    name: 'Peer Gamepad',
    styles: {
      desktop: {
        width: 250,
        height: 250,
        left: 428,
        top: 3015,
      },
      high: {
        width: 152,
        height: 152,
        left: 261,
        top: 1837,
      },
      tablet: {
        width: 124,
        height: 124,
        left: 212,
        top: 1496,
      },
      phone: {
        width: 100,
        height: 100,
        left: 81,
        top: 1752,
      },
    },
  },
  {
    type: 'image',
    src: CellphoneImage,
    name: 'Peer Cellphone',
    styles: {
      desktop: {
        width: 252,
        height: 252,
        left: 319,
        top: 4016,
      },
      high: {
        width: 153,
        height: 153,
        left: 194,
        top: 2447,
      },
      tablet: {
        width: 125,
        height: 125,
        left: 158,
        top: 1992,
      },
      phone: {
        width: 100,
        height: 100,
        left: 50,
        top: 2490,
      },
    },
  },
  {
    type: 'image',
    src: ValentinesImage,
    name: 'Peer Valentines day',
    styles: {
      desktop: {
        width: 723,
        height: 723,
        left: 701,
        top: 2548,
      },
      high: {
        width: 441,
        height: 441,
        left: 427,
        top: 1553,
      },
      tablet: {
        width: 359,
        height: 359,
        left: 348,
        top: 1264,
      },
      phone: {
        width: 231,
        height: 231,
        left: 175,
        top: 1596,
      },
    },
  },
]

function Map({ onOpenQRCodeModal }) {
  const screenSize = useCurrentSize()
  const screenSizeData = {
    desktop: {
      width: 2560,
      height: 4483,
    },
    high: {
      width: 1560,
      height: 2644,
    },
    tablet: {
      width: 1270,
      height: 2153,
    },
    phone: {
      width: 495,
      height: 2814,
    },
  }

  const convertToPercentage = ({ width, height, left, top, ...props }) => {
    const currentScreenSize =
      screenSize.width > 659
        ? screenSizeData.tablet
        : screenSize.width > 1269
          ? screenSizeData.high
          : screenSize.width > 2559
            ? screenSizeData.desktop
            : screenSizeData.phone

    const widthPercentage = (width / currentScreenSize.width) * 100
    const paddingBottomPercentage = (height / currentScreenSize.width) * 100
    const leftOffsetPercentage = (left / currentScreenSize.width) * 100
    const topOffsetPercentage = (top / currentScreenSize.height) * 100

    return {
      width: `${widthPercentage}%`,
      paddingBottom: `${paddingBottomPercentage}%`,
      left: `${leftOffsetPercentage}%`,
      top: `${topOffsetPercentage}%`,
      ...props,
    }
  }
  return (
    <section className={styles.map}>
      {mapData.map((item) => {
        const itemStyles = convertToPercentage(
          screenSize.width > 659
            ? item.styles.tablet
            : screenSize.width > 1269
              ? item.styles.high
              : screenSize.width > 2559
                ? item.styles.desktop
                : item.styles.phone,
        )

        return (
          <div className={styles.item} style={{ ...itemStyles, paddingBottom: 0 }}>
            <div className={styles.content}>
              {item.type === 'link' && <img src={item.src} alt={item.name} />}
              {item.type === 'image' && <img src={item.src} alt={item.name} />}
              {item.type === 'node' && item.node && item.node}
              {item.type === 'button' && (
                <button type="button" className={styles.button} onClick={onOpenQRCodeModal}>
                  get the app
                </button>
              )}
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default React.memo(Map)

Map.propTypes = {
  onOpenQRCodeModal: T.func,
}
