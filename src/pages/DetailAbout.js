import PropTypes from "prop-types"

const DetailAbout = (props) => { // title, total
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{props.total}</p>
    </div>
  )
}

DetailAbout.propTypes = {
    title: PropTypes.string.isRequired,
    total: PropTypes.number
}

export default DetailAbout