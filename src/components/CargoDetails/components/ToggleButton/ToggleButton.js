import './ToggleButton.css'

export default function ToggleButton() {
  return (
    <div>
      <input className="tgl tgl-ios" id="cb2" type="checkbox" />
      <label className="tgl-btn" htmlFor="cb2"></label>
    </div>
  )
}
