import './file-list.scss'
import icon from './paperclip.svg'

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
          <div key={index}>
            <img src={icon} alt="attachment icon"/>
            {props.files[key].name}
          </div>
        )
      })}
    </div>
  )
}

export default FileList;
