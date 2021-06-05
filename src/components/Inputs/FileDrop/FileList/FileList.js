import './file-list.scss';

/**
 * Files list for file input
 * @param {Object} props.files Files to preview
 * @param {Object} props.rejectedFiles Rejected files to preview
 * @param {Function} props.onRemove file remove handler function
 * @return {JSX.Element}
 * @constructor
 */
function FileList(props) {
  const files = props.files;
  const acceptedFiles = files.filter((file) => !file.errors);
  const rejectedFiles = files.filter((file) => file.errors);
  return (
    <div className="file-list">
      {acceptedFiles.map((file, index) => {
        return (
          <span key={index}>
            {file.name}
            <span className="remove-file"
                  onClick={(e) => props.onRemove(acceptedFiles[index].name, e)}></span>
          </span>
        );
      })}
      {
        rejectedFiles.length > 0 &&
        <p className="error-message">some files cannot be uploaded:</p>
      }
      {rejectedFiles.map((file, index) => {
        return (
          <span className={'cannot-upload'} key={index}>
              {file.file.name}
            <span className="remove-file"
                  onClick={(e) => props.onRemove(rejectedFiles[index].file.name, e)}></span>
            </span>
        );
      })}
    </div>

  );
}

export default FileList;
