import * as React from 'react'
import { SettingsContainerProps } from '../../containers/settings-container'
import { PrincipalPointMode2VP, Axis, ReferenceDistanceUnit } from '../../types/calibration-settings'
import Checkbox from './checkbox'
import Dropdown from './../common/dropdown'
import AxisDropdown from './axis-dropdown'
import PanelSpacer from './../common/panel-spacer'
import ReferenceDistanceForm from './reference-distance-form'

export default class SettingsSection2VP extends React.PureComponent<SettingsContainerProps> {
  render() {
    return (
      <div className='panel-section'>
        <div className='panel-row'>
          Principal point
        </div>
        <div className='panel-row'>
          <Dropdown
            options={
              [
                {
                  value: PrincipalPointMode2VP.Default,
                  id: PrincipalPointMode2VP.Default,
                  label: 'Image midpoint'
                },
                {
                  value: PrincipalPointMode2VP.Manual,
                  id: PrincipalPointMode2VP.Manual,
                  label: PrincipalPointMode2VP.Manual
                },
                {
                  value: PrincipalPointMode2VP.FromThirdVanishingPoint,
                  id: PrincipalPointMode2VP.FromThirdVanishingPoint,
                  label: 'From 3rd vanishing point'
                }
              ]
            }
            selectedOptionId={this.props.calibrationSettings2VP.principalPointMode}
            onChange={(selectedValue: PrincipalPointMode2VP) => {
              this.props.onPrincipalPointModeChange2VP(selectedValue)
            }}
          />
        </div>

        <PanelSpacer />
        <div className='panel-row'>
          Vanishing point axes
        </div>

        <div className='panel-row'>
          <AxisDropdown
            selectedAxis={this.props.calibrationSettings2VP.vanishingPointAxes[0]}
            onChange={(axis: Axis) => {
              this.props.onVanishingPointAxisChange2VP(0, axis)
            }
            }
          />
        </div>
        <PanelSpacer />
        <div className='panel-row'>
          <AxisDropdown
            selectedAxis={this.props.calibrationSettings2VP.vanishingPointAxes[1]}
            onChange={
              (axis: Axis) => {
                this.props.onVanishingPointAxisChange2VP(1, axis)
              }
            }
          />
        </div>
        <PanelSpacer />
        <div className='panel-row'>
          Reference distance
        </div>

        <ReferenceDistanceForm
          referenceAxis={this.props.calibrationSettings2VP.referenceDistanceAxis}
          referenceDistance={this.props.calibrationSettings2VP.referenceDistance}
          referenceDistanceUnit={this.props.calibrationSettings2VP.referenceDistanceUnit}
          onReferenceAxisChange={(axis: Axis | null) => {
            this.props.onReferenceDistanceAxisChange(this.props.globalSettings.calibrationMode, axis)
          }}
          onReferenceDistanceChange={(distance: number) => {
            this.props.onReferenceDistanceChange(this.props.globalSettings.calibrationMode, distance)
          }}
          onReferenceDistanceUnitChange={(unit: ReferenceDistanceUnit) => {
            this.props.onReferenceDistanceUnitChange(this.props.globalSettings.calibrationMode, unit)
          }}
        />

        <PanelSpacer />
        <div className='panel-row'>
          <Checkbox
            title='Rectangle mode'
            isSelected={this.props.calibrationSettings2VP.quadModeEnabled}
            onChange={(isSelected: boolean) => this.props.onQuadModeEnabledChange(isSelected)}
          />
        </div>
      </div>
    )
  }
}