import './index.css'
const DenominationItem = props => {
  const {buttonList, onWithdraw} = props
  const {id, value} = buttonList

  const onChanage = () => {
    onWithdraw(id)
  }

  return (
    <li className="button-container">
      <button className="button" onClick={onChanage}>
        {' '}
        {value}{' '}
      </button>
    </li>
  )
}
export default DenominationItem
