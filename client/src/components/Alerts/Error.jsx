import "./Alerts.css";

function Error(msg) {
  return (
    <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        <div className="error">
          <i className="material-symbols-outlined">error</i>
            &nbsp; &nbsp;
            <strong>Error</strong>{msg}
            <button className="closebtn">
                <i className="material-symbols-outlined">close</i>
            </button>
        </div>
    </>
  );
}

export default Error;
