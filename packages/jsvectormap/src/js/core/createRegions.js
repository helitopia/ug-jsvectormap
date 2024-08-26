import { merge } from '../util'
import Region from '../components/region'

export default function createRegions(strokeScaling) {
  this._regionLabelsGroup = this._regionLabelsGroup || this.canvas.createGroup('jvm-regions-labels-group')

  for (const code in this._mapData.paths) {
    const region = new Region({
      map: this,
      code: code,
      path: this._mapData.paths[code].path,
      strokeScaling,
      style: merge({}, this.params.regionStyle),
      labelStyle: this.params.regionLabelStyle, 
      labelsGroup: this._regionLabelsGroup,
      label: this.params.labels && this.params.labels.regions,
    })

    this.regions[code] = {
      config: this._mapData.paths[code],
      element: region,
    }
  }
}