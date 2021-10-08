import styles from './file-list.module.scss';

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
    <div className={styles.fileList}>
      {acceptedFiles.map((file, index) => {
        return (
          <span key={index}>
            {file.name}
            <span className={styles.removeFile}
                  onClick={(e) => props.onRemove(acceptedFiles[index].name, e)}></span>
          </span>
        );
      })}
      {
        rejectedFiles.length > 0 &&
        <p className={styles.errorMessage}>some files cannot be uploaded:</p>
      }
      {rejectedFiles.map((file, index) => {
        return (
          <span className={styles.cannotUpload} key={index}>
              {file.file.name}
            <span className={styles.removeFile}
                  onClick={(e) => props.onRemove(rejectedFiles[index].file.name, e)}></span>
            </span>
        );
      })}
    </div>

  );
}

export default FileList;
