import styles from '../css/gallery.module.css'
import Heading from '../components/Heading'
// assets moved to public/assets — reference via public URLs
const elementos1 = '/assets/photos/elementos/one.jpeg'
const elementos2 = '/assets/photos/elementos/two.jpeg'
const elementos3 = '/assets/photos/elementos/three.jpeg'
const elementos4 = '/assets/photos/elementos/four.jpeg'
const elementos5 = '/assets/photos/elementos/five.jpeg'
const elementos6 = '/assets/photos/elementos/six.jpeg'
const elementos7 = '/assets/photos/elementos/seven.jpeg'

const orientation1 = '/assets/photos/orientation/IMG-20240906-WA0022.jpeg'
const orientation2 = '/assets/photos/orientation/IMG-20240906-WA0031.jpeg'
const orientation3 = '/assets/photos/orientation/IMG-20240906-WA0038.jpeg'
const orientation4 = '/assets/photos/orientation/IMG-20240906-WA0062.jpeg'
const orientation5 = '/assets/photos/orientation/IMG-20240907-WA0022.jpeg'

const satXiete1 = '/assets/photos/satXiete/IMG-20241116-WA0013.jpeg'
const satXiete2 = '/assets/photos/satXiete/IMG-20241117-WA0009.jpeg'
const satXiete3 = '/assets/photos/satXiete/IMG-20241117-WA0013.jpeg'
const satXiete4 = '/assets/photos/satXiete/IMG-20241117-WA0019.jpeg'
const satXiete5 = '/assets/photos/satXiete/IMG-20241118-WA0004.jpeg'
const satXiete6 = '/assets/photos/satXiete/IMG-20241118-WA0036.jpeg'
const satXiete7 = '/assets/photos/satXiete/IMG-20241123-WA0086.jpeg'

const socFair1 = '/assets/photos/soc fair/IMG-20240901-WA0023.jpeg'
const socFair2 = '/assets/photos/soc fair/IMG-20240902-WA0007.jpeg'
const socFair3 = '/assets/photos/soc fair/IMG-20240902-WA0013.jpeg'
const socFair4 = '/assets/photos/soc fair/IMG-20240902-WA0019.jpeg'
const socFair5 = '/assets/photos/soc fair/IMG-20240902-WA0022.jpeg'
const socFair6 = '/assets/photos/soc fair/IMG-20240902-WA0026.jpeg'
const socFair7 = '/assets/photos/soc fair/IMG-20240902-WA0032.jpeg'
import Button from '../components/Button'

const events = [
  {
    id: 1,
    name: 'Elementos',
    images: [
      elementos1,
      elementos2,
      elementos3,
      elementos4,
      elementos5,
      elementos6,
      elementos7,
    ],
  },
  {
    id: 2,
    name: 'Orientation',
    images: [
      orientation1,
      orientation2,
      orientation3,
      orientation4,
      orientation5,
    ],
  },
  {
    id: 3,
    name: 'SatXiete',
    images: [
      satXiete1,
      satXiete2,
      satXiete3,
      satXiete4,
      satXiete5,
      satXiete6,
      satXiete7,
    ],
  },
  {
    id: 4,
    name: 'Society Fair',
    images: [
      socFair1,
      socFair2,
      socFair3,
      socFair4,
      socFair5,
      socFair6,
      socFair7,
    ],
  },
]

const Gallery = () => {
  return (
    <div className={styles.galleryContainer}>
      <Heading text="GALLERY" />

      <div className={styles.eventsContainer}>
        {events.map((event) => (
          <div key={event.id} className={styles.eventSection}>
            <div className={styles.eventHeader}>
              <Button text={event.name} />
            </div>

            <div className={styles.eventGrid}>
              {event.images.map((image, index) => (
                <div key={index} className={styles.eventCard}>
                  <div className={styles.cardContent}>
                    <div className={styles.imageContainer}>
                      <img
                        src={image}
                        alt={`${event.name} photo ${index + 1}`}
                        className={styles.eventImage}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
