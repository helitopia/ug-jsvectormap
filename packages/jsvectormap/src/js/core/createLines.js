import { merge, getLineUid } from '../util'
import Line from '../components/line'

const LINES_GROUP_CLASS = 'jvm-lines-group'

export default function createLines(lines, isRecentlyCreated = false) {
  // Create group for holding lines we're checking if `linesGroup`
  // exists or not becuase we may add lines after the map has
  // loaded so we will append the futured lines to this group as well.
  this.linesGroup = this.linesGroup || this.canvas.createGroup(LINES_GROUP_CLASS)

  const markers = this._markers
  const { style, elements: _, ...rest } = this.params.lines

  let point1 = false, point2 = false

  for (let index in lines) {
    const config = lines[index]

    for (let mindex in markers) {
      const markerConfig = isRecentlyCreated
        ? markers[mindex].config
        : markers[mindex]

      if (markerConfig.name === config.from) {
        point1 = this.getMarkerPosition(markerConfig)
      }

      if (markerConfig.name === config.to) {
        point2 = this.getMarkerPosition(markerConfig)
      }
    }

    if (point1 !== false && point2 !== false) {
      const options = {
        index,
        map: this,
        group: this.linesGroup,
        config,
        x1: point1.x,
        y1: point1.y,
        x2: point2.x,
        y2: point2.y,
        ...rest,
      }

      // Register lines with unique keys
      this._lines[getLineUid(config.from, config.to)] = new Line(
        options,
        merge({ initial: style }, { initial: config.style || {} }, true)
      )
    }
  }
}