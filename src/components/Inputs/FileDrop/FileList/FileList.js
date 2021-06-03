import './file-list.scss'

/**
 * Files list for file input
 * @param {Object} props.files Files to preview
 * @return {JSX.Element}
 * @constructor
 */
function FileList(props) {
  return (
    <div className="file-list">
      {Object.keys(props.files).map((key, index) => {
        return (
          <span key={index}>
            {props.files[key].name}
          </span>
        )
      })}
    </div>
  )
}

export default FileList;
