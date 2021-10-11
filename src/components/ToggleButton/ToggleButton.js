import './ToggleButton.css'

export default function ToggleButton(props) {
  const { id } = props
  return (
    <div>
      <input className="tgl tgl-ios" id={id} type="checkbox" />
      <label className="tgl-btn" htmlFor={id}></label>
    </div>
  )
}
