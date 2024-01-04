import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme, useMediaQuery, useTheme } from "@mui/material";
import countries from "../../resources/data/countries";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./style.css";

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    background: "#F2F2F2",
    borderRadius: "20px",
    boxSizing: "border-box",
    padding: "2.5vw 2vw",
    margin: "10px 0",
    textAlign: "center",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    width: "30vw",
    position: "absolute",
    right: "2em",
    top: "20vw",
    [theme.breakpoints.down(1100)]: {
      top: "16vw",
    },
    [theme.breakpoints.down(1000)]: {
      top: "32vh",
    },
    [theme.breakpoints.down("md")]: {
      top: "17vw",
    },
    [theme.breakpoints.down(850)]: {
      position: "relative",
      width: "85%",
      margin: "0 auto",
      top: 0,
      right: 0,
      marginTop: "15px",
    },
  },
  h3: {
    fontStyle: "italic",
    margin: 0,
    padding: 0,
    fontFamily: "times",
    color: "#AA1936",
    fontSize: "1.8em",
    letterSpacing: "-0.8px",
    fontWeight: "100",
    textAlign: "start",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    columnGap: "5px",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.7em",
    },
  },
  p: {
    margin: 0,
    fontSize: "1vw",
    marginBottom: "20px",
    textAlign: "start",
    [theme.breakpoints.down(1280)]: {
      textAlign: "center",
      fontSize: "1.6vw",
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      fontSize: "2vw",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3vw",
    },
  },
  input: {
    outline: "none",
    display: "block",
    boxSizing: "border-box",
    border: "none",
    borderRadius: "10px",
    padding: "10px",
    fontSize: "1.1em",
    color: "black",
    width: "100%",
    margin: "10px 0",
    [theme.breakpoints.down("md")]: {
      fontSize: "1em",
    },
    "-webkit-appearance": "none",
    "-moz-appearance": "none",
    appearance: "none",
    "&::placeholder": {
      color: "black",
    },
  },
  checkbox: {
    display: "flex",
    alignItems: "flex-start",
    columnGap: "15px",
    fontFamily: "times",
    fontStyle: "italic",
    fontSize: "1vw",
    margin: "10px 0 20px 5px",
    width: "100%",
    textAlign: "start",
    justifyContent: "start",
    [theme.breakpoints.up("md")]: {
      maxWidth: "30vw",
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      maxWidth: "95%",
      fontSize: "1em",
    },
    [theme.breakpoints.down(950)]: {
      fontSize: "0.8em",
    },
  },
  a: {
    color: "black",
  },
  button: {
    display: "flex",
    columnGap: "5px",
    alignItens: "center",
    justifyContent: "center",
    borderRadius: "10px",
    border: "none",
    color: "white",
    padding: "15.5px",
    margin: "0 auto",
    boxShadow: "0px 4px 8px #7e7777",
    cursor: "pointer",
    fontSize: "1em",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8em",
    },
  },
  img: {
    borderRadius: "100%",
    position: "absolute",
    width: "5vw",
    top: "0",
    right: "0",
    filter: "brightness(95%) contrast(89%)",
    [theme.breakpoints.down(1280)]: {
      width: "10vw",
    },
    [theme.breakpoints.down("md")]: {
      width: "14vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "18vw",
    },
  },
  checkboxText: {
    display: "inline",
    lineHeight: "1.3em",
  },
  imgContainer: {
    position: "absolute",
    top: "-2vw",
    right: 0,
    [theme.breakpoints.down("md")]: {
      top: "-5vw",
    },
  },
  imgSubContainer: {
    position: "relative",
    height: "5vw",
    [theme.breakpoints.down(1280)]: {
      height: "10vw",
    },
    [theme.breakpoints.down("md")]: {
      height: "14vw",
    },
    [theme.breakpoints.down("sm")]: {
      height: "18vw",
    },
  },
  option: {
    color: "gray",
    "&:hover": {
      background: "#e6e6e6",
    },
  },
}));

const InfoForm = ({
  shadow = false,
  submit,
  title = false,
  href,
  download,
  productId,
  formId
}: {
  shadow?: boolean;
  submit: any;
  title?: boolean;
  href: string;
  download: string;
  productId: string;
  formId: string;
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const [enabledSubmit, setEnabledSubmit] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("fx", "0xba2874"); // formId
    myHeaders.append("content-type", "application/json");

    var raw = JSON.stringify({
      name: "name",
      lastName: "lastName",
      email: "email",
      phone: "prefix+phone",
      prefix: "prefix",
      "privacy-police": true,
      productId: productId, // productId
      formId: formId
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch("https://api.ivacus.com/x/deliverForm", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    const downloadLink = document.createElement("a");
    downloadLink.href = href;
    downloadLink.download = download;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <form
      className={classes.form}
      onSubmit={handleSubmit}
      style={{
        boxShadow: `${shadow ? "0px 4px 8px #7e7777" : undefined}`,
      }}
    >
      {title && (
        <h3 className={classes.h3}>
          <InfoOutlinedIcon />
          Solicita información
        </h3>
      )}
      <div>
        <input
          required
          className={classes.input}
          placeholder="Nombre"
          style={{
            width: '100%',
            marginRight: 0,
            paddingLeft: '10px',
            borderRadius: '10px',
            borderBottom: 'none',
          }}
        />
        <input
          required
          className={classes.input}
          placeholder="Apellidos"
          style={{
            display: 'block',
            width: '100%',
            paddingLeft: '10px',
            borderRadius: '10px',
            borderBottom: 'none',
          }}
        />
        <input
          type="email"
          required
          className={classes.input}
          placeholder="email*"
          style={{
            display: 'block',
            width: '100%',
            paddingLeft: '10px',
            borderRadius: '10px',
            borderBottom: 'none',
          }}
        />
        <select defaultValue="ES" className={classes.input}>
          <option hidden className={classes.option}>
            País de residencia
          </option>
          {countries.map((country: any, index: any) => (
            <option
              key={index}
              className={classes.option}
              value={country.code}
            >
              {country.name} ({country.code} {country.prefix} {country.flag}
              )
            </option>
          ))}
        </select>
        <input
          className={classes.input}
          type="number"
          placeholder="Número de teléfono"
          required
          style={{
            display: 'block',
            width: '100%',
            paddingLeft: '10px',
            borderRadius: '10px',
            borderBottom: 'none',
          }}
        />
      </div>
      <label className={classes.checkbox}>
        <input
          type="checkbox"
          onClick={() => setEnabledSubmit((old) => !old)}
        />
        <div className={classes.checkboxText}>
          Consiento el tratamiento de mis datos por Sagardoy Business & Law
          School, para el envío de información comercial personalizada y/o sobre
          actividades, mediante la elaboración de perfiles basados en la
          información obtenida, incluso de terceros, de conformidad con lo
          dispuesto en la{" "}
          <a
            className={classes.a}
            href="https://www.sagardoyschool.com/politica-de-privacidad/"
            target="_blank"
            rel="noreferrer"
          >
            Política de Privacidad
          </a>
          .
        </div>
      </label>
      <button
        type="submit"
        className={classes.button}
        style={{
          background: `${enabledSubmit ? "#AA1935" : "#B3B3B3"}`,
        }}
        disabled={!enabledSubmit}
      >
        {submit}
      </button>
    </form>
  );
};

export default InfoForm;
