import './Box.scss'

const Box = (props) => {
  return (
    <div {...props} className={`box-size border`}>
      {props.children}
    </div>
  )
}

export default Box
