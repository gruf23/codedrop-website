import styles from './file-drop.module.scss';
import cx from 'classnames';

import FileList from './FileList/FileList';
import { useDropzone } from 'react-dropzone';

function FileDrop(props) {
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    maxFiles: 20,
    maxSize: 2097152,
    onDrop: (acceptedFiles, fileRejections) => {
      props.onDrop([...acceptedFiles, ...fileRejections]);
    }
  });

  const dropzoneClassNames = cx(
    styles.dropzone,
    isDragActive ? styles.drag : false
  )

  return (
    <div className={styles.wrap}>
      <div {...getRootProps({className: dropzoneClassNames})}>
        <input {...getInputProps()} />
        <div className={styles.label}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="46" fill="#d9dfe5">
            <path
              d="M40.664 12.036a14.38 14.38 0 0 0-4.514-8.253C33.477 1.343 30.002 0 26.383 0a14.47 14.47 0 0 0-7.855 2.307c-1.943 1.251-3.557 2.942-4.699 4.931a8.32 8.32 0 0 0-1.522-.144 7.93 7.93 0 0 0-7.927 7.904c0 .564.062 1.107.165 1.64A10.99 10.99 0 0 0 0 25.507c0 2.84 1.059 5.598 2.992 7.781 1.984 2.235 4.606 3.557 7.403 3.711h.082 8.842a1.384 1.384 0 1 0 0-2.768h-8.801c-4.205-.256-7.742-4.244-7.742-8.735 0-2.901 1.563-5.608 4.082-7.074.586-.338.833-1.046.607-1.681a5.01 5.01 0 0 1-.308-1.763c0-2.83 2.313-5.136 5.151-5.136.607 0 1.203.103 1.758.308.679.246 1.429-.062 1.738-.707 1.923-4.07 6.076-6.695 10.59-6.695 6.066 0 11.073 4.531 11.649 10.539.062.625.535 1.128 1.152 1.23 4.575.779 8.03 4.993 8.03 9.801 0 5.095-4.02 9.524-8.976 9.904H30.67a1.384 1.384 0 1 0 0 2.768h7.629.103c3.136-.226 6.066-1.661 8.246-4.06C48.818 30.551 50 27.496 50 24.318c-.01-5.751-3.948-10.867-9.336-12.282zm-7.062 14.675a1.41 1.41 0 0 0 0-1.961l-7.152-7.34a1.35 1.35 0 0 0-.95-.41 1.31 1.31 0 0 0-.95.411l-7.152 7.34a1.41 1.41 0 0 0 0 1.961 1.34 1.34 0 0 0 .95.411 1.3 1.3 0 0 0 .95-.411l4.851-4.979v22.882c0 .77.6 1.386 1.35 1.386s1.35-.616 1.35-1.386V21.732l4.851 4.979a1.31 1.31 0 0 0 1.901 0z"/>
          </svg>
          <p>
            Drop your files here or click to browse <span className="limitation">(20MB max.)</span>
          </p>
          <FileList files={props.filesList} onRemove={props.onRemove}/>
        </div>
      </div>
    </div>
  );
}

export default FileDrop;
