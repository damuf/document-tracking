import "./Alerts.css";

function Error(props) {

  return (
    <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        <div className="error"style={{paddingRight: '8px'}}>
          <i className="material-symbols-outlined" style={{marginLeft: '8px', userSelect: "text"}}>error</i>
            &nbsp; &nbsp;
            <p>{props.msg}</p>
        </div>
    </>
  );
}

export default Error;
