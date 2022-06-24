import "./Alerts.css";

function Error(props) {
  return (
    <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        <div className="error">
          <i className="material-symbols-outlined" style={{marginLeft: '8px'}}>error</i>
            &nbsp; &nbsp;
            <p>{props.msg}</p>
            <button className="closebtn">
                <i className="material-symbols-outlined">close</i>
            </button>
        </div>
    </>
  );
}

export default Error;
